<template>
    <div class="main">
      <div class="header">
        <div class="header-content">
          <div class="header-wrap">
            <h3>2019</h3>
            <p>当前可用积分</p>
          </div>
        </div>
      </div>
      <!--nav-->
      <div class="nav">
        <ul class="nav-wrap">
          <li :class="['nav-item', active == 0 ? 'nav-item-active' : '']" @click="choose(0)">全部</li>
          <li :class="['nav-item', active == 1 ? 'nav-item-active' : '']" @click="choose(1)">获取</li>
          <li :class="['nav-item', active == 2 ? 'nav-item-active' : '']" @click="choose(2)">使用</li>
        </ul>
      </div>
      <!--积分详情-->
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div class="cell-wrap">
          <div class="cell" v-for="(item, index) in list" :key="index">
            <div class="cell-left">
              <p>{{item.title}}</p>
              <span>{{item.time}}</span>
            </div>
            <div class="cell-right">{{item.value}}</div>
          </div>
        </div>

      </van-list>
    </div>
</template>

<script>
export default {
    name: "integral",
  data () {
    return {
      active: 0,
      list: [
        {title: '购物奖励', value: '+10', time: '2019-09-29 10:07'},
        {title: '购物奖励', value: '+10', time: '2019-09-29 10:07'},
        {title: '购物奖励', value: '+10', time: '2019-09-29 10:07'},
        {title: '购物奖励', value: '+10', time: '2019-09-29 10:07'},
        {title: '购物奖励', value: '+10', time: '2019-09-29 10:07'},
        {title: '购物奖励', value: '+10', time: '2019-09-29 10:07'}
      ],
      loading: false,
      finished: false
    }
  },
  mounted() {
  },
  methods: {
    choose (val) {
      this.active = val
    },
    getItem () {
      let obj = {title: '购物奖励', value: '+10', time: '2019-09-29 10:07'}
      this.list.push(obj)
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        // for (let i = 0; i < this.list.length; i++) {
        //   this.list.push(this.list.length + 1);
        // }
        this.loading = true
        this.getItem()
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 20) {
          this.finished = true;
        }
      }, 500);
    }
  }
}
</script>

<style scoped>
  h3{
    margin: 0;
    font-size: 24px;
    padding: 15px 0;
  }
  .main{
    background-color: #f5f5f5;
    min-height: 100vh;
  }
  .header{
    width: 100%;
    height: 170px;
    background: url("../../../static/images/index/bg.png");
  }
  .header-content{
    width: 100%;
    height: 100%;
  }
  .header-wrap{
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    color: #fff;
  }
  .nav{
    padding: 0 15px;
    background-color: #fff;
    margin-bottom: 5px;
  }
  .nav-wrap{
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .nav-item{
    padding: 10px 10px;
  }
  .nav-item-active{
    border-bottom: 2px solid #15B0AE;
    color: #15B0AE;
  }
  .cell-wrap{
    padding: 0 15px;
    box-sizing: border-box;
    background-color: #fff;
  }
  .cell{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
    border-bottom: 1px solid #eee;
  }
  .cell:last-child{
    border: none;
  }
  .cell-left p{
    padding-bottom: 5px;
  }
</style>
