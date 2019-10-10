<template>
    <div>
      <div class="main">
        <div class="address-wrap" v-show="!noAddress">
          <div v-for="(item, index) in addressList" :key="index" >
            <van-swipe-cell :on-close="onClose" :name="index">

              <template slot="default">
                <!--<van-cell :border="false" title="单元格" value="内容" />-->
                <div class="address-item" @click="tochangeAddress(item.address_id, item.consignee, item.mobile, item.province, item.city, item.district, item.address)">
                  <div class="info">
                    <span>{{item.consignee}}</span>
                    <p>{{item.mobile}}</p>
                  </div>
                  <div class="address-info">
                    <div class="info-left">
                      <p>{{item.province}} {{item.city}} {{item.district}}</p>
                      <p>{{item.address}}</p>
                    </div>
                    <img src="../../../static/images/index/more_small.png" alt="">
                  </div>
                </div>
              </template>

              <template slot="right">
                <van-button square type="danger" text="删 除" class="del" @click="deleteAddress(item.address_id)"/>
              </template>
            </van-swipe-cell>
          </div>
        </div>
        <!--无地址-->
        <div class="noAddress" v-show="noAddress">
          <img src="../../../static/images/index/noAddress.png" alt="">
          <p>您暂时没有收货地址哦</p>
        </div>
        <!--新增地址-->
        <div class="new" @click="addAddress">+新增地址</div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import {Toast} from 'vant'
export default {
  name: "mineAddress",
  data () {
      return {
        list: [
          {id: 0},
          {id: 1},
          {id: 2}
        ],
        noAddress: false,
        addressList: []
      }
  },
  mounted () {
    this.getAddress()
  },
  methods: {
    getAddress () {
      axios.get('/lan/user_address').then(this.getAddressSucc).catch(err => console.log(err))
    },
    getAddressSucc (res) {
      console.log(res.data.data.result)
      if (res.data.code == 2000) {
        if (res.data.data.result.length == 0) {
          this.noAddress = true
        } else {
          this.addressList = res.data.data.result
        }
      }
    },
    onClose(clickPosition, instance) {
      switch (clickPosition) {
        case 'left':
        case 'cell':
        case 'outside':
          instance.close();
          break;
        case 'right':
          // console.log('删除')
          break;
      }
    },

    deleteAddress (address_id) {
      // console.log(address_id)
      axios.get('/lan/user_address_delete?address_id=' + address_id).then(this.deleteSucc).catch(err => console.log(err))
    },
    deleteSucc (res) {
      if (res.data.code == 2000) {
        this.getAddress()
      } else {
        Toast(res.data.msg)
      }
    },
    addAddress () {
      this.$router.push('/person/newAddress')
    },
    tochangeAddress (address_id,consignee,mobile,province,city,district,address) {
      this.$router.push({path: '/person/changeAddress', query: {address_id: address_id, consignee: consignee,mobile: mobile, province: province, city: city, district: district, address: address}})
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
