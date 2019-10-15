<template>
    <div class="main">
      <van-steps direction="vertical" :active="0" active-color="#15B0AE">

        <van-step v-for="(item, index) in list" :key="index">
          <!--<h3 class="log-status">已签收</h3>-->
          <p class="log-info">{{item.context}}</p>
          <p class="log-time">{{item.time}}</p>
        </van-step>

      </van-steps>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "logistics",
  data () {
    return{
      order_id: '',
      list: [
        // {
        //   "time": "2019-10-12 17:42:15",
        //   "ftime": "2019-10-12 17:42:15",
        //   "context": "【深圳市】 快件已由【菜鸟的深圳塘水围二区40栋101店】代签收, 如有问题请电联（18823756915 / 15817450139）, 感谢您使用中通快递, 期待再次为您服务!"
        // },
        // {
        //   "time": "2019-10-12 16:50:05",
        //   "ftime": "2019-10-12 16:50:05",
        //   "context": "【深圳市】 【深圳龙华】 的胡波（18823756915） 正在第1次派件, 请保持电话畅通,并耐心等待（95720为中通快递员外呼专属号码，请放心接听）"
        // },
        // {
        //   "time": "2019-10-12 12:58:45",
        //   "ftime": "2019-10-12 12:58:45",
        //   "context": "【深圳市】 快件已经到达 【深圳龙华】"
        // }
      ]
    }
  },
  mounted() {
    this.order_id = this.$route.query.order_id
    this.init()
  },
  methods: {
    init () {
      axios.get('/lan/look_Logistics?order_id=' + this.order_id).then(this.initSucc).catch(err => console.log(err))
    },
    initSucc (res) {
      if (res.data.code == 2000) {
        this.list = res.data.data.data
      }
    }
  }
}
</script>

<style scoped>
  h3{
    margin: 0;
  }
  .main{
    padding: 23px 0;
    box-sizing: border-box;
  }
  .log-info{
    color: #666666;
    padding: 10px 0;
    box-sizing: border-box;
  }
  .log-time{
    color: #999999;
    font-size: 12px;
  }
  .log-status{
    color: #181818;
    font-size: 18px;
    font-weight: 400;
  }
</style>
