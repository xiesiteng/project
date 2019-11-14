<template>
  <div>
    <div class="main">
      <!--tag标签-->
      <div class="subnav-wrap">
        <van-tag round v-for="(item, index) in goods_category" :key="index" :class="['subnav' ,subActive == index ? 'subnav-active' : '']" @click="subChoose(index, item.id)">{{item.name}}</van-tag>
      </div>
      <!--tag标签-->
      <!--产品列表start-->
      <scroll :onLoadMore="onLoadMore" :enableLoadMore="enableLoadMore">
        <div class="box-wrap">

          <div class="box" v-for="(item, index) in list" :key="index">
            <!--多套一层div给border-->
            <div class="box-border">
              <div>
                <img :src="item.original_img" alt="" class="box-img">
              </div>
              <p class="name">{{item.goods_name}}</p>
              <div class="order" @click="toSubscribe(item.goods_id)">预约</div>
            </div>
          </div>

        </div>
      </scroll>
      <!--产品列表end-->
    </div>
  </div>
</template>

<script>
  import scroll from '../common/scroll'
  import axios from 'axios'
  export default {
    name: "event",
    data () {
      return {
        subActive: 0,
        enableLoadMore: true,
        // subnavList: ['全部项目', '保湿', '美白', '抗敏管理', '控油祛痘', '老化管理'],
        cat_id: '',
        page: 1,
        goods_category: [],
        list: []
      }
    },
    components: {
      scroll
    },
    mounted () {
      this.cat_id = this.$route.query.id
      this.init()
    },
    methods: {
      init () {
        axios.get('/lan/goods_list?cat_id=' + this.cat_id + '&is_order=1' + '&page=' + this.page).then(this.initSucc).catch(err => console.log(err))
      },
      initSucc (res) {
        if (res.data.code == 2000) {
          if (res.data.data.list.length == 0) {
            this.enableLoadMore = false
          }
          this.goods_category = res.data.data.goods_category
          this.list = this.list.concat(res.data.data.list)
        }
      },
      subChoose (index, id) {
        this.subActive = index
        this.cat_id = id
        this.page = 1
        this.list = []
        this.init()
      },
      toSubscribe (goods_id) {
        this.$router.push({path: '/subscribe/productDetail', query: {goods_id: goods_id}})
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
    margin-bottom: 100px;
  }
  .nav-wrap {}
  .nav{
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 20px 15px;
    border-bottom: 1px solid #eee;
    color: #666;
  }
  .nav-active {
    color: #15B0AE;
    position: relative;
  }
  .nav-active::after {
    content: "";
    background: url("../../../static/images/index/heart.png");
    background-repeat:  no-repeat !important;
    display: block;
    width: 35px;
    height: 6px;
    position: absolute;
    top: 175%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 99;
  }

  .subnav-wrap {
    padding: 20px 15px 0 15px;
    box-sizing: border-box;
  }
  .subnav {
    /*padding: 3px 5px;*/
    padding: 0;
    background-color: #F1F1F1;
    color: #999999;
    width: 75px;
    height: 26px;
    text-align: center;
    line-height: 30px;
    box-sizing: border-box;
    font-size: 14px;
    margin: 0 10px 10px 0;
  }
  .subnav-active {
    color: #fff;
    background-color: #15B0AE;
  }
  .box-wrap {
    box-sizing: border-box;
    padding: 0 15px;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .box {
    width: 50%;
    margin-bottom: 20px;
  }
  .box:nth-child(2n+1) {
    box-sizing: border-box;
    padding-right: 5px;
  }
  .box:nth-child(2n) {
    box-sizing: border-box;
    padding-left: 5px;
  }
  .box-border {
    border: 1px solid #eee;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .box-img {
    width: 100%;
    height: 150px;
  }
  .name {
    font-size: 16px;
    padding: 18px 5px;
    box-sizing: border-box;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
  }
  .order {
    color: #15B0AE;
    font-size: 16px;
    width: 120px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    border: 1px solid #15B0AE;
    border-radius: 15px;
    margin-bottom: 20px;
  }
</style>
