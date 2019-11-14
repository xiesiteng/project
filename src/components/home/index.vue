<template>
    <div class="main-wrap">
        <div class="main" >
          <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item, index) in bannerList" :key="index">
              <img :src="item.ad_code" alt="" style="height: 200px; width: 100%">
            </van-swipe-item>
          </van-swipe>
          <!--advisement-->
          <div class="ad-wrap">
            <div class="ad-item" v-for="(item, index) in goods_category" :key="index" @click="toTurn(item.name, item.id)">
              <van-image
                round
                width="44px"
                height="44px"
                :src="item.image"
              />
              <span class="ad-text">{{item.name}}</span>
            </div>
          </div>
          <!--公告-->

          <!--<div class="notice-wrap">
            <img src="../../../static/images/index/notice.png" alt="" class="notice-icon">
            <span class="notice-title">公告</span>
            <p>【标题】内容</p>
          </div>-->

          <div class="notice-wrap">
            <img src="../../../static/images/index/notice.png" alt="" class="notice-icon">
            <span class="notice-title">公告</span>
            <van-swipe
              style="height: 50px; width: 240px"
              vertical
              :show-indicators="false"
              :touchable="false"
              :autoplay="3000">
              <van-swipe-item  style="height: 50px;line-height: 50px;" v-for="(item, index) in noticeList" :key="index">
                <div class="hid">
                <p>【{{item.title}}】</p> <p v-html="item.content" ></p>
                </div>
              </van-swipe-item>

              <div class="custom-indicator" slot="indicator">
                <!--设置轮播的指示器为空-->
              </div>
            </van-swipe>
          </div>


          <!--banner-->
          <div class="banner-wrap">
            <img src="../../../static/images/banner.png" alt="" class="banner">
          </div>
          <!--缦缦拼团-->
          <div class="mm_title">
            <span class="cyan">/</span>
            <p>缦缦拼团</p>
            <span class="cyan">/</span>
          </div>
          <p class="sub_title">Time-limited  Assemble</p>
          <!--拼团头部-->
          <div class="assemble-wrap">
            <div :class="['assemble-title', active == 1 ? 'assemble-title-active' : '']" @click="choose(1)">
              <p>超值拼团</p>
            </div>
            <div :class="['assemble-title', active == 2 ? 'assemble-title-active' : '']" @click="choose(2)">
              <p>限时拼团</p>
            </div>
          </div>
          <!--限时拼团部分-->
          <div class="time_ass">
            <div class="time-title">
              <div class="countDown" v-show="active == 2">
                <p>倒计时</p>
                <van-count-down :time="time">
                  <template v-slot="timeData">
                    <span class="item">{{ timeData.days }}</span>&nbsp;天&nbsp;
                    <span class="item">{{ timeData.hours }}</span> :
                    <span class="item">{{ timeData.minutes }}</span> :
                    <span class="item">{{ timeData.seconds }}</span>
                  </template>
                </van-count-down>
              </div>

              <p class="scan" @click='toMore'>查看更多
                <span>
                  <img src="../../../static/images/index/more.png" alt="" class="more_size">
                </span>
              </p>
            </div>
            <!--拼团start-->
            <div class="ass-item" v-for="(item, index) in group_goods" :key="index">
              <div class="item-left">
                <img :src="item.original_img" alt="" class="item-img">
                <!--<img src="../../../static/images/index/gznf.png" alt="" class="item-img">-->
              </div>
              <div class="item-right">
                <p class="title">{{item.goods_name}}</p>
                <div class="tag-wrap">
                  <span>3人团</span>
                  <span>需预约</span>
                </div>
                <!--价格和拼团按钮-->
                <div class="price-wrap">
                  <div class="include">
                    <em>￥</em>
                    <p class="price">{{item.group_price}}</p>
                  </div>
                  <span class="pre-price">￥{{item.shop_price}}</span>
                  <button class="ping" @click="toAssem(item.goods_id)">去拼团</button>
                </div>
              </div>
            </div>
            <!--拼团end-->
          </div>
          <!--限时拼团部分-->
          <!--三个广告模块start-->
          <div class="guide-wrap">
            <div class="guide-left">
              <p>沙龙活动</p>
              <p>体验不一样的美</p>
              <img src="../../../static/images/index/love.png" alt="" class="guide-imgO">
            </div>
            <div class="guide-right">
              <div class="right-up">
                <img src="../../../static/images/index/logo1.png" alt="" class="guide-imgT">
                <div class="content">
                  <p>余缦缦品牌</p>
                  <p>新时代女性</p>
                </div>
              </div>
              <div class="right-down">
                <img src="../../../static/images/index/logo2.png" alt="" class="guide-imgTh">
                <div class="content">
                  <p>线下门店</p>
                  <p>华侨城店</p>
                </div>
              </div>
            </div>
          </div>
          <!--积分兑换start-->
          <div class="mm_title">
            <span class="cyan">/</span>
            <p>积分兑换</p>
            <span class="cyan">/</span>
          </div>
          <p class="sub_title">POINTS TO REDEEM</p>
          <!--积分兑换end-->
          <!--四个活动start-->
          <div class="scan-more">
            <span @click="toIntegral">查看更多</span>
            <img src="../../../static/images/index/more.png" alt="" class="more_size">
          </div>

          <div class="box-wrap">
            <div class="box" v-for="(item, index) in score_goods" :key="index" @click="toIntegralDetail(item.goods_id)">
              <!--多包一层div给border效果-->
              <div style="border: 1px solid #eee">
                <div>
                  <!--<img src="../../../static/images/index/box.png" alt="" class="box-img">-->
                  <img :src="item.original_img" alt="" class="box-img">
                </div>
                <p class="box-name">{{item.goods_name}}</p>
                <div class="integral">
                  <div class="dui">兑</div>
                  <p>{{item.exchange_integral}}积分</p>
                </div>
              </div>
            </div>
          </div>
          <!--四个活动end-->
        </div>
      <!--遮罩-->
      <div class="mask" v-show="showMask">
        <div class="mask-content">
          <div class="hasDis">

            <!--领取优惠券-->
            <p class="item-title" v-show="!recDis">{{disInfo.name}}</p>
            <div class="item-content" v-show="!recDis">
              <p class="item-disMoney"><span>{{disInfo.money}}</span>元</p>
              <p class="item-condition">全场满{{disInfo.condition}}使用</p>
              <button class="item-get" @click="receive">立即领取</button>
            </div>

            <!--领取成功start-->
            <p class="item-titleSucc" v-show="recDis">领取成功</p>
            <div class="item-contentSucc" v-show="recDis">
              <img src="../../../static/images/index/getDIs.png" alt="">
              <button class="item-getSucc">快去逛逛</button>
            </div>
            <!--领取成功end-->
          </div>
          <div class="close_btn" @click="closeMask">
            <img src="../../../static/images/index/close_btn.png" alt="">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import {Toast} from 'vant'
import tabBar from '../common/tabbar'
import axios from 'axios'
export default {
    name: "index.vue",
  data () {
    return {
      bannerList: [],
      noticeList: [],
      article_banner: [],
      score_goods: [],
      adList: [
        {
          img: '../../../static/images/face.png',
          text: '面部管理'
        },
        {
          img: '../../../static/images/manage.png',
          text: '焕肤管理'
        },
        {
          img: '../../../static/images/eyes.png',
          text: 'EVENT'
        },
        {
          img: '../../../static/images/body.png',
          text: 'BODY CARE'
        }
      ],
      active: 2,
      time: 0,
      endTime: '',
      group_goods: [],
      animate: false,
      goods_category: [],
      showMask: false,
      disInfo: {},
      recDis: false
    }
  },
  components: {
    tabBar
  },
  mounted () {
    this.init()
    this.getDis()
    // setInterval(this.showMarquee, 2000)
  },
  methods: {
    init () {
      axios.get('/lan/_index?prom_type=' + this.active).then(this.initSucc).catch(err => console.log(err))
    },
    initSucc (res) {
      // console.log(res.data)
      this.bannerList = res.data.banner
      this.noticeList = res.data.notice
      this.goods_category = res.data.goods_category
      // this.$set(this.noticeList, 'flag', false)
      this.article_banner = res.data.article_banner
      this.score_goods = res.data.score_goods
      this.group_goods = res.data.group_goods
      if (this.active == 2) {
        this.endTime = this.group_goods[0].group_end_time
        // this.endTime = this.fmtTime(this.endTime, 'Y/M/D h:m:s')
        // console.log(this.endTime)
        var date1 = new Date()
        var date2 = new Date(this.endTime)
        var s1 = date1.getTime(),s2 = date2.getTime();
        var total = (s2 - s1);
        console.log(total)
        this.time = total
      }
      // console.log(this.noticeList)
    },
      choose (val) {

        this.active = val
        this.init()
      },
    toTurn (name, id) {
      switch (name) {
        case '面部管理':
          this.$router.push({path: '/navPage/faceManage', query: {id: id}})
          break
        case '焕肤管理':
          this.$router.push({path: '/navPage/skinManage', query: {id: id}})
          break
        case 'EVENT':
          this.$router.push({path: '/navPage/event', query: {id: id}})
          break
        case 'BODY_CARE':
          this.$router.push({path:'/navPage/bodyCare', query: {id: id}})
          break
      }
    },
    toMore () {
      this.$router.push('/assemble/assemble')
    },
    toIntegral () {
      this.$router.push('/integral/integral')
    },
    toAssem (goods_id) {
      this.$router.push({path: '/assemble/assemblePay', query: {goods_id: goods_id}})
    },
    toIntegralDetail (goods_id) {
      this.$router.push({path: '/integral/detail', query:{goods_id: goods_id}})
    },
    // 是否有优惠券
    getDis () {
      axios.get('/lan/preferential_activity').then(this.getDisSucc).catch(err => console.log(err))
    },
    getDisSucc (res) {
      if (res.data.code == 2000) {
        let result = res.data.data.list
        if (result.length !== 0) {
          this.showMask = true
          this.disInfo = result
        }
      }
    },
    // 领取优惠券
    receive () {
      axios.get('/lan/receive_coupon').then(this.receiveSucc).catch(err => console.log(err))
    },
    receiveSucc (res) {
      if (res.data.code == 2000) {
        this.recDis = true
      } else {
        Toast(res.data.msg)
      }
    },

    closeMask () {
      this.showMask = false
    },

    fmtTime(number,format) {
      // 毫秒级的时间戳转换
      number = number * 1000
      var date = new Date(number)
      // var date = new Date();
      var Y = date.getFullYear();
      var M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
      var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
      var h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
      var m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
      var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
      format=format.indexOf('Y')>-1?format.replace('Y',Y):format;
      format=format.indexOf('M')>-1?format.replace('M',M):format;
      format=format.indexOf('D')>-1?format.replace('D',D):format;
      format=format.indexOf('h')>-1?format.replace('h',h):format;
      format=format.indexOf('m')>-1?format.replace('m',m):format;
      format=format.indexOf('s')>-1?format.replace('s',s):format;
      return format;
    }
  }
}
</script>

<style scoped lang="stylus">
.main-wrap{
  min-height: 100vh;
  padding-bottom: 100px;
  background-color: #fff;
}
.main
  background-color #fff
.countDown
  display flex
  align-items center
  p
    box-sizing border-box
    padding-right 10px
.item
  display: inline-block;
  width: 22px;
  height: 22px;
  line-height: 22px;
  /*margin-right: 5px;*/
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #15B0AE;
  border-radius: 50%;
p
  margin 0
.more_size
  width 7px
  height 12px
.box-img
  height 140px
  width 100%
.main
  min-height 100vh
  margin-bottom 100px
  .ad-wrap
    width 100%
    margin-top 20px
    display flex
    justify-content space-around
    align-items center
    .ad-item
      display flex
      flex-direction column
      justify-content space-around
      align-items center
    .ad-text
      padding .1rem 0
      box-sizing border-box
  .notice-wrap
    display flex
    align-items center
    box-sizing border-box
    padding 0 15px
    height 50px
    line-height 50px
    .notice-icon
      width 15px
      height 15px
    .notice-title
      color #15B0AE
      padding 0 10px 0 5px
  .banner-wrap
    margin-top 29px
    margin-bottom 36px
    display flex
    justify-content center
  .banner
    width 355px
    height 90px
  .mm_title
    font-size 16px
    display flex
    align-items center
    justify-content center
    .cyan
      color #79DAD9
      margin 0 18px
  .sub_title
    margin-top 10px
    font-size 10px
    color #999
    display flex
    justify-content center
  .assemble-wrap
    display flex
    box-sizing border-box
    border-bottom 1px solid #F3F3F3
    .assemble-title
      width 50%
      display flex
      flex-direction column
      align-items center
      height 48px
      line-height 48px
    .assemble-title-active
      color #15B0AE
      position relative
    .assemble-title-active::after
      content: "";
      background: url("../../../static/images/index/heart.png");
      background-repeat:  no-repeat !important;
      background-size: 100% 100%;
      display: block;
      width: 35px;
      height: 6px;
      position: absolute;
      top: 88%;
      left: 50%;
      transform: translateX(-50%);
      z-index: 99;
  .time_ass
    color #000
    .time-title
      display flex
      justify-content space-between
      align-items center
      padding 20px 15px 0 15px
      box-sizing border-box
      position relative
      .scan
        color #999
        position absolute
        right 15px
        /*.more_size
          width 7px
          height 12px*/
    .ass-item
      padding 16px 15px
      box-sizing border-box
      border-bottom 1px solid #eee
      width 100%
      display flex
      /*align-items center*/
      .item-left
        .item-img
          width 100px
          height 100px
      .item-right
        width 100%
        background-color #fff
        padding-left 16px
        box-sizing border-box
        .title
          padding 10px 0
        .tag-wrap
          display flex
          align-items center
          margin-bottom 10px
        .tag-wrap span:nth-child(1)
          background-color #FF9C99
          font-size 10px
          color #fff
          padding 2px 15px
          box-sizing border-box
          border-radius 5px
          margin-right 25px
        .tag-wrap span:nth-child(2)
          background-color #8AD7D6
          font-size 10px
          color #fff
          padding 2px 15px
          box-sizing border-box
          border-radius 5px
        .price-wrap
          display flex
          align-items center
          justify-content space-between
          .include
            display flex
          em
            padding-top 10px
            font-style normal
          .price
            font-size 24px
          .pre-price
            text-decoration line-through
            color #AAAAAA
            padding-top 10px
            margin-left -15px
          .ping
            border none
            width 64px
            height 28px
            background-color #15B0AE
            color #fff
            font-size 12px
  .guide-wrap
    display flex
    align-items center
    margin 38px 0
    padding 0 15px
    box-sizing border-box
    .guide-left
      width 50%
      height 200px
      padding 8px
      box-sizing border-box
      box-shadow: 4px 4px 8px #eee
      p:nth-child(1)
        color #333
        font-size 20px
        margin-bottom 8px
      p:nth-child(2)
        font-size 14px
        color #999
        padding-bottom 36px
      .guide-imgO
        width 150px
        height 94px
    .guide-right
      width 50%
      height 200px
      box-sizing border-box
      .right-up
        padding 0 10px
        box-sizing border-box
        height 95px
        display flex
        align-items center
        box-shadow: 4px 4px 8px #eee
        margin-bottom 10px
        .content
          width 90px
          box-sizing border-box
          padding-left 10px
          p:nth-child(1)
            color #333
            font-size 14px
          p:nth-child(2)
            color #999
            font-size 10px
        .guide-imgT
          width 64px
          height 64px
      .right-down
        padding 0 10px
        box-sizing border-box
        height 95px
        display flex
        align-items center
        box-shadow: 4px 4px 8px #eee
        .content
          width 90px
          box-sizing border-box
          padding-left 10px
          p:nth-child(1)
            color #333
            font-size 14px
          p:nth-child(2)
            color #999
            font-size 10px
        .guide-imgTh
          width 52px
          height 42px
  .scan-more
    padding 20px
    box-sizing border-box
    display flex
    align-items center
    justify-content flex-end
    span
      color #999
      margin-right 5px
  .box-wrap
    padding 0 15px
    box-sizing border-box
    display flex
    flex-wrap wrap
    .box:nth-child(2n+1)
      padding-right 5px
      box-sizing border-box
    .box:nth-child(2n)
      padding-left 5px
      box-sizing border-box
    .box
      width 50%
      margin-bottom 20px
      /*padding 8px*/
      box-sizing border-box
      .box-name
        font-size 16px
        padding 0 10px
        box-sizing border-box
      .integral
        display flex
        padding 14px 10px
        box-sizing border-box
        .dui
          width 18px
          height 18px
          line-height 18px
          text-align center
          font-size 12px
          color #fff
          background-color #15B0AE
          border-radius 3px
          margin-right 12px
        p
          color #666

.hid
  width 100%;
  height: 50px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  display flex
.mask
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .5);
  z-index: 1000;
.mask-content
  bottom: 50%;
  transform: translateY(50%);
.hasDis
  width: 200px;
  height: 281px;
  margin: 0 auto;
  background url("../../../static/images/index/index_dis.png")
  background-size 100% 100%
  position relative
.close_btn
  width 32px;
  margin: 0 auto;
  margin-top: 20px;
.item-title
  position absolute
  top 57px
  left 50%
  transform translateX(-50%)
  font-size 20px
  color #333
  font-family SourceHanSansSC-Medium
.item-titleSucc
  position absolute
  top 57px
  left 50%
  transform translateX(-50%)
  font-size 20px
  color #DC3B0D
  font-family SourceHanSansSC-Medium
.item-content
  position absolute
  top 85px
  left 50%
  transform translateX(-50%)
  display flex
  flex-direction column
  align-items center
.item-contentSucc
  position absolute
  top 102px
  left 50%
  transform translateX(-50%)
  display flex
  flex-direction column
  align-items center
.item-disMoney
  color #DC3B0D
  font-size 24px
  span
    font-size 36px!important
.item-condition
  color #666666
  padding-bottom 16px
.item-get
  width 98px
  height 25px
  border none
  border-radius 10px
  background-color #15B0AE
  color #fff
.item-getSucc
  width 98px
  height 25px
  border none
  border-radius 10px
  background-color #15B0AE
  color #fff
  margin-top 20px

</style>




