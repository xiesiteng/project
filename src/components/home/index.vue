<template>
    <div>
        <div class="main" >
          <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item, index) in bannerList" :key="index">
              <img :src="item.ad_code" alt="" style="height: 200px; width: 100%">
            </van-swipe-item>
          </van-swipe>
          <!--advisement-->
          <div class="ad-wrap">
            <div class="ad-item" v-for="(item, index) in adList" :key="index" @click="toTurn(index)">
              <van-image
                round
                width="44px"
                height="44px"
                :src="item.img"
              />
              <span class="ad-text">{{item.text}}</span>
            </div>
          </div>
          <!--公告-->
          <div class="notice-wrap">
            <img src="../../../static/images/index/notice.png" alt="" class="notice-icon">
            <span class="notice-title">公告</span>
            <p>【缦缦拼团】公告内容</p>
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
            <div class="ass-item" v-for="(item, index) in 3" :key="index">
              <div class="item-left">
                <img src="../../../static/images/index/gznf.png" alt="" class="item-img">
              </div>
              <div class="item-right">
                <p class="title">光子嫩肤</p>
                <div class="tag-wrap">
                  <span>3人团</span>
                  <span>需预约</span>
                </div>
                <!--价格和拼团按钮-->
                <div class="price-wrap">
                  <div class="include">
                    <em>￥</em>
                    <p class="price">399.9</p>
                  </div>
                  <span class="pre-price">￥599.9</span>
                  <button class="ping" @click="toAssem">去拼团</button>
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
            <div class="box" v-for="(item, index) in score_goods" :key="index" @click="toIntegralDetail">
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
    </div>
</template>

<script>
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
      time: 10 * 60 * 60 * 1000
    }
  },
  components: {
    tabBar
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      axios.get('/lan/_index?prom_type=1').then(this.initSucc).catch(err => console.log(err))
    },
    initSucc (res) {
      // console.log(res.data)
      this.bannerList = res.data.banner
      this.noticeList = res.data.notice
      this.article_banner = res.data.article_banner
      this.score_goods = res.data.score_goods
      // console.log(this.noticeList)
    },
      choose (val) {
        if (val == 1) {
          this.active = 1
        } else {
          this.active = 2
        }
      },
    toTurn (val) {
      switch (val) {
        case 0:
          this.$router.push('/navPage/faceManage')
          break
        case 1:
          this.$router.push('/navPage/skinManage')
          break
        case 2:
          this.$router.push('/navPage/event')
          break
        case 3:
          this.$router.push('/navPage/bodyCare')
          break
      }
    },
    toMore () {
      this.$router.push('/assemble/assemble')
    },
    toIntegral () {
      this.$router.push('/integral/integral')
    },
    toAssem () {
      this.$router.push('/assemble/assemblePay')
    },
    toIntegralDetail () {
      this.$router.push('/integral/detail')
    }
  }
}
</script>

<style scoped lang="stylus">
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
    padding 15px
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
</style>
