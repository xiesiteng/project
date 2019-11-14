<template>
    <div class="main">
      <div class="nav-wrap">
        <ul class="nav">
          <!--<li v-for="(item, index) in navList" :key="index" :class="[active == index ? 'nav-active' : '']" @click="choose(index)">{{item}}</li>-->
          <li :class="[active == 0 ? 'nav-active' : '']" @click="choose(0)">拼团中</li>
          <li :class="[active == 1 ? 'nav-active' : '']" @click="choose(1)">已完成</li>
        </ul>
      </div>
      <!--正在拼团的拼团内容-->
      <scroll :onLoadMore="onLoadMore" :enableLoadMore="enableLoadMore" v-show="active == 0">
        <div class="order-info" v-for="(item, index) in list" :key="index" >
          <div class="orderNum">
            <p>{{item.add_time}}</p>
            <span>{{item.status_name}}</span>
          </div>
          <div class="info" @click="toAssem(item.id)">
            <div class="info-left">
              <img :src="item.original_img" alt="" class="size">
            </div>
            <div class="info-right">
              <p class="title">{{item.goods_name}}</p>
              <p class="time">￥{{item.goods_price}}</p>
              <div class="button-group">
                <button class="over-btn">去邀请</button>
              </div>
            </div>
          </div>
        </div>
      </scroll>
      <!--已完成的拼团-->
      <scroll :onLoadMore="onLoadMore" :enableLoadMore="enableLoadMore" v-show="active == 1">
        <div class="order-info" v-for="(item, index) in list" :key="index" >
          <div class="orderNum">
            <p>{{item.add_time}}</p>
            <span>{{item.status_name}}</span>
          </div>
          <div class="info" @click="toassDetail(item.id, item.status_name)">
            <div class="info-left">
              <img :src="item.original_img" alt="" class="size">
            </div>
            <div class="info-right">
              <p class="title">{{item.goods_name}}</p>
              <p class="time">￥{{item.goods_price}}</p>
              <div class="button-group">
                <!--<button class="over-btn" @click="subNow">立即预约</button>-->
                <button class="over-btn" v-show="item.status_name == '拼团失败'" @click="moreAss">更多拼团</button>
              </div>
            </div>
          </div>
        </div>
      </scroll>
    </div>
</template>

<script>
import axios from 'axios'
import {Toast} from 'vant'
import scroll from '../common/scroll'
export default {
  name: "myAssemble",
  data () {
    return{
      active: 1,
      navList: ['拼团中', '已结束'],
      page: 1,
      enableLoadMore: true,
      list: []
    }
  },
  components:{
    scroll
  },
  mounted () {
    // this.init()
    this.choose(0)
  },
  methods: {
    choose (val) {
      this.active = val
      this.page = 1
      this.enableLoadMore = true
      this.list = []
      this.init()
    },
    toAssem (id) {
      this.$router.push({path: '/assemble/onAssemble', query: {id: id}})
    },
    init () {
      axios.get('/lan/group_own?page=' + this.page + '&status=' + this.active).then(this.initSucc).catch(err => console.log(err))
    },
    initSucc (res) {
      if (res.data.code == 2000) {
        if (res.data.data.length == 0) {
          this.enableLoadMore = false
          return false
        }
        this.list = this.list.concat(res.data.data)
      } else {
        Toast(res.data.msg)
      }
    },
    onLoadMore(done) {
      setTimeout(()=>{
        if(!this.enableLoadMore) {
          return false
        }
        this.page++
        this.init()
        done();
      }, 200)
    },
    // 已完成的拼团跳转详情
    toassDetail (id, status_name) {
      if (status_name == '拼团成功') {
        this.$router.push({path: '/assemble/assSucc', query: {id: id}})
      } else {
        this.$router.push({path: '/assemble/assFail', query: {id: id}})
      }
    },
    // 更多拼团
    moreAss () {
      this.$router.push('/assemble/assemble')
    }

  }
}
</script>

<style scoped>
  .main{
    background-color: #fff;
    min-height: 100vh;
  }
  .size{
    width: 100px;
    height: 100px;
  }
  .nav{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 15px 0;
  }
  .nav-active {
    color: #15B0AE;
    position: relative;
  }
  .nav-active::after {
    content: "";
    background: url("../../../static/images/index/heart.png");
    background-repeat:  no-repeat !important;
    background-size: 100% 100%;
    display: block;
    width: 35px;
    height: 6px;
    position: absolute;
    top: 150%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 99;
  }
  .orderNum{
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 15px;
    background-color: #FCFCFC;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }
  .orderNum p{
    color: #666;
  }
  .orderNum span{
    color: #15B0AE;
  }
  .info{
    box-sizing: border-box;
    padding: 15px;
    display: flex;
    align-items: center;
  }
  .info-left{
    width: 30%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
  }
  .info-right{
    width: 70%;
    box-sizing: border-box;
    padding-left: 15px;
  }
  .title{
    font-weight: 600;
    font-size: 16px;
    color: #666;
  }
  .time{
    color: #999;
    box-sizing: border-box;
    padding: 15px 0;
  }
  .over-btn{
    width: 70px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    background-color: #15B0AE;
    color: #fff;
    font-size: 13px;
    border: none;
    border-radius: 2px;
  }
</style>
