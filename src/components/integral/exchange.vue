<template>
    <div class="main">
      <scroll :onLoadMore="onLoadMore" :enableLoadMore="enableLoadMore">
        <div class="exchange" v-for="(item, index) in list" :key="index">
          <div class="exc-title">
            <p>预约编号：{{item.order_sn}}</p>
            <img src="../../../static/images/index/delete.png" alt="">
          </div>
          <!--内容-->
          <div class="exc-content">
            <div class="content-left">
              <img :src="item.goods.original_img" alt="" class="size">
            </div>
            <div class="content-right">
              <p>{{item.goods.goods_name}}</p>
              <span>{{item.integral}}积分</span>
              <button @click="toDetail(item.order_id)">查看详情</button>
            </div>
          </div>
        </div>
      </scroll>
    </div>
</template>

<script>
import axios from 'axios'
import scroll from '../common/scroll'
export default {
    name: "exchange",
  data () {
    return {
      enableLoadMore: true,
      page: 1,
      list: []
    }
  },
  components: {
      scroll
  },
  mounted() {
    this.init()
  },
  methods:{
    init () {
      axios.get('/lan/order_lists?order_prom_type=4' + '&page=' + this.page).then(this.initSucc).catch(err => console.log(err))
    },
    initSucc (res) {
      if (res.data.code == 2000) {
        if (res.data.data.list.length == 0) {
          this.enableLoadMore = false
        }
        this.list = this.list.concat(res.data.data.list)
      }
    },
    toDetail (order_id) {
      this.$router.push({path: '/integral/exchangeDetail', query: {order_id: order_id}})
    },
    onLoadMore(done) {
      setTimeout(()=>{
        if(!this.enableLoadMore) {
          return
        }
        this.page++
        this.init()
        done();
      }, 200)
    }
  }
}
</script>

<style scoped>
  .main{
    min-height: 100vh;
    background-color: #fff;
  }
  .size{
    width: 100px;
    height: 100px;
  }
  .exc-title{
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 15px;
    background-color: #FDFDFD;
    border-bottom: 1px solid #eee;
    border-top: 1px solid #eee;
    color: #666666;
  }
  .exc-content{
    box-sizing: border-box;
    padding: 15px;
    display: flex;
    align-items: center;
  }
  .content-left{
    width: 30%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content-right{
    display: flex;
    flex-direction: column;
    padding-left: 15px;
    box-sizing: border-box;
  }
  .content-right p{
    font-size: 16px;
  }
  .content-right span{
    color: #15B0AE;
    padding: 15px 0;
  }
  .content-right button{
    border: none;
    width: 80px;
    text-align: center;
    height: 28px;
    line-height: 28px;
    font-size: 13px;
    color: #424242;
    background-color: #EEEEEE;
  }
</style>
