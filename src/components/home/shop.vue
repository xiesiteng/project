<template>
    <div>
      <div class="main">
        <div class="noFocus" v-show="noFocus">
          <!--搜索框-->
          <form action="/">
          <van-search
            v-model="value"
            placeholder="搜索商品"

            @focus="showOn"
          />
          </form>
          <!--nav-->
          <div class="nav-wrap" v-show="false">
            <ul class="nav">
              <li :class="active == 0 ? 'nav-active' : ''" @click="choose(0)">综合排序</li>
              <li :class="active == 1 ? 'nav-active' : ''" @click="choose(1)">销量
                <img src="../../../static/images/index/sort.png" alt="">
                <img src="../../../static/images/index/asc.png" alt="" v-show="false">
                <img src="../../../static/images/index/desc.png" alt="" v-show="false">
              </li>
              <li :class="active == 2 ? 'nav-active' : ''" @click="choose(2)">价格
                <img src="../../../static/images/index/sort.png" alt="">
                <img src="../../../static/images/index/asc.png" alt="" v-show="false">
                <img src="../../../static/images/index/desc.png" alt="" v-show="false">
              </li>
            </ul>
          </div>
          <!--nav-->
          <!--搜索结果-->
          <div class="search-res" v-show="true">
            <p>搜索到1个结果</p>
          </div>
          <!--搜索结果-->
          <!--商品信息start-->
          <div class="box-wrap">
            <div class="box" v-for="(item, index) in 5" :key="index">
              <!--多套一层div给border-->
              <div class="box-border">
                <div>
                  <img src="../../../static/images/index/gznf.png" alt="" class="box-img">
                </div>
                <p class="name">美白再生因子深沉抗皱</p>
                <div class="money">￥8999</div>
              </div>
            </div>
          </div>
          <!--商品信息end-->
        </div>
        <!--聚焦搜索框-->

        <div class="onFocus" v-show="onFocus">
          <!--搜索框-->
          <form action="/">
          <van-search
            v-model="value"
            placeholder="搜索商品"
            show-action
            @search="onSearch"
            @cancel="onCancel"
          />
          </form>
          <div class="lately">
            <div>
              <img src="../../../static/images/index/orderTime.png" alt="">
              <span>最近搜索</span>
            </div>
            <img src="../../../static/images/index/delete.png" alt="">
          </div>
          <!--最近搜索标签-->
          <div class="tag-wrap">
            <ul class="tag">
              <li v-for="(item, index) in 6" :key="index" class="tag-item">婚纱裙</li>
            </ul>
          </div>
        </div>
        <!--聚焦搜索框-->
      </div>
    </div>
</template>

<script>
export default {
    name: "shop.vue",
    data () {
      return {
        value: '',
        active: 0,
        noFocus: true,
        onFocus: false
      }
    },
  watch: {

  },
  directives: {
    focus: {
      inserted: function (el, {value}) {
        console.log(el,{value})
        if (value) {
          el.focus();
        }
      }
    }
  },
  mounted() {
      // console.log(this.$refs)
  },
  methods: {
    onSearch () {
        // this.value = '147'
      },
    choose (val) {
      this.active = val
    },
    // showNo () {
    //   this.noFocus = true
    //   this.onFocus = false
    // },
    showOn () {
      this.onFocus = true
      this.noFocus = false
    },
    onCancel () {
      this.noFocus = true
      this.onFocus = false
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
    justify-content: space-between;
    box-sizing: border-box;
    padding: 20px 20px;
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
  }
  .box-img {
    width: 100%;
    height: 150px;
  }
  .name {
    font-size: 14px;
    padding: 18px 10px;
    box-sizing: border-box;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
  }
  .money{
    color: #15B0AE;
    font-size: 14px;
    padding: 0 10px 10px 10px;
    box-sizing: border-box;
  }
  .lately {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 20px 15px;
    color: #999;
    font-size: 13px;
  }
  .lately div{
    display: flex;
    align-items: center;
  }
  .lately span{
    padding-left: 5px;
    box-sizing: border-box;
  }
  .tag-wrap {
    box-sizing: border-box;
    padding: 0 15px;
  }
  .tag{
    display: flex;
    align-items: center;
    /*justify-content: space-around;*/
    flex-wrap: wrap;
  }
  .tag-item{
    background-color: #f1f1f1;
    box-sizing: border-box;
    padding: 5px 15px;
    margin-right: 10px;
    margin-bottom: 10px;
    border-radius: 20px;
  }
  .onFocus {
    min-height: 100vh;
    z-index: 999;
    display: block;
    position: fixed;
    left: 0; top: 0; right: 0; bottom: 0;
    background: #fff;
  }
  .search-res{
    font-size: 13px;
    color: #999;
    padding: 0 15px;
    box-sizing: border-box;
  }
</style>
