<template>
    <div>
      <div class="main">
        <div class="address-wrap" v-show="true">
          <div v-for="(item, index) in list" :key="index" @click="passInfo(item.id)">
            <van-swipe-cell :on-close="onClose" :name="index">

              <template slot="default">
                <!--<van-cell :border="false" title="单元格" value="内容" />-->
                <div class="address-item">
                  <div class="info">
                    <span>何大米</span>
                    <p>18283350462</p>
                  </div>
                  <div class="address-info">
                    <div class="info-left">
                      <p>四川省 成都市 武侯区</p>
                      <p>晋阳新居</p>
                    </div>
                    <img src="../../../static/images/index/more_small.png" alt="">
                  </div>
                </div>
              </template>

              <template slot="right">
                <van-button square type="danger" text="删 除" class="del"/>
              </template>
            </van-swipe-cell>
          </div>
        </div>
        <!--无地址-->
        <div class="noAddress" v-show="false">
          <img src="../../../static/images/index/noAddress.png" alt="">
          <p>您暂时没有收货地址哦</p>
        </div>
        <!--新增地址-->
        <div class="new" @click="addAddress">+新增地址</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "mineAddress",
      data () {
          return {
            list: [
              {id: 0},
              {id: 1},
              {id: 2}
            ]
          }
      },
      methods: {
        onClose(clickPosition, instance, name) {
          switch (clickPosition) {
            case 'left':
            case 'cell':
            case 'outside':
              instance.close();
              break;
            case 'right':
              this.deleteItem()
              console.log(name)
              break;
          }
        },
        deleteItem () {
          console.log('点击删除')
        },
        passInfo (val) {
          console.log(val)
        },
        addAddress () {
          this.$router.push('/person/newAddress')
        }
      }
    }
</script>

<style scoped>
  .main{
    min-height: 100vh;
    background-color: #fff;
  }
  .address-wrap{
    margin-bottom: 60px;
  }
.address-item{
  width: 100%;
  height: 105px;
  /*background-color: pink;*/
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
  padding: 0 15px;
}
  .del{
    height: 105px;
    width: 70px;
    text-align: center;
    background-color: #15B0AE;
    border: #15B0AE;
    font-size: 14px;
  }
  .new{
    height: 50px;
    width: 100%;
    position: fixed;
    bottom: 0;
    color: #fff;
    background-color: #15B0AE;
    line-height: 50px;
    text-align: center;
  }
  .info{
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 16px 0;
    font-size: 16px;
  }
  .address-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
  }
  .info-left{
    display: flex;
    flex-direction: column;
  }
  .noAddress{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 154px auto;
  }
  .noAddress p{
    padding: 15px 0;
    box-sizing: border-box;
    color: #666;
    font-size: 12px;
  }
</style>
