<template>
    <div>
      <div class="eva-header">
        <div class="eva-item" @click="pick(1)">
          <img src="../../../static/images/index/good.png" alt="" v-show="active !== 1">
          <img src="../../../static/images/index/good_checked.png" alt="" v-show="active == 1">
          <span :class="[active == 1 ? 'eva-active' : 'eva']">好评</span>
        </div>

        <div class="eva-item" @click="pick(2)">
          <img src="../../../static/images/index/mid.png" alt="" v-show="active !== 2">
          <img src="../../../static/images/index/mid_checked.png" alt="" v-show="active == 2">
          <span :class="[active == 2 ? 'eva-active' : 'eva']">中评</span>
        </div>

        <div class="eva-item" @click="pick(3)">
          <img src="../../../static/images/index/bad.png" alt="" v-show="active !== 3">
          <img src="../../../static/images/index/bad_checked.png" alt="" v-show="active == 3">
          <span :class="[active == 3 ? 'eva-active' : 'eva']">差评</span>
        </div>
      </div>
      <!--评价内容-->
      <textarea name="" id="" cols="30" rows="6" class="content" placeholder="请输入评价内容" v-model="txt"></textarea>
      <!--上传图片-->
      <div class="pic-wrap">
        <van-uploader
          v-model="fileList"
          multiple
          :deletable="deletable"
          :max-count="4"
          :after-read="afterRead"
          @delete="deleteImage"
          ref="uploader"
        >
          <div class="picture">
            <img src="../../../static/images/index/camera.png" alt="">
            <span>上传照片</span>
          </div>
        </van-uploader>
      </div>
      <!--提交-->
      <div class="submit" @click="submit">提交评价</div>
    </div>
</template>

<script>
import axios from 'axios'
import {Toast} from 'vant'
export default {
  name: "evaluate",
  data () {
    return{
      active: 0,
      fileList: [],
      txt: '',
      order_id: '',
      list: [],
      deletable: true,
      twice: true // 节阀流
    }
  },
  mounted () {
    this.order_id = this.$route.query.order_id
  },
  methods: {
    pick (val) {
      this.active = val
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      // console.log(file.content);
      this.list.push(file.content)
    },

    deleteImage (e) {
      // 找到需要删除的图片
      for (let i=0; i<this.list.length; i++) {
        if (e.content == this.list[i]) {
          this.list.splice(i, 1)
        }
      }
      // console.log(this.list)
    },
    submit () {
      if (this.twice) {
        if (this.active == 0) {
          Toast('请选择评价等级')
          return false
        }
        if (!this.txt) {
          Toast('请输入评价内容')
          return false
        }
        // 关闭节阀流防止多次点击
        this.twice = false
        // 格式化图片传参
        let images = ''
        if (this.list.length == 1) {
          images = this.list[0]
        } else {
          for (let i=0;i<this.list.length - 1;i++){
            images = this.list[i] + ',' + this.list[i+1]
          }
        }
        axios.get('/lan/order_comment?order_id=' + this.order_id + '&level=' + this.active + '&content=' + this.txt + '&images=' + images).then(this.submitSucc).catch(err => console.log(err))
      }
    },
    submitSucc (res) {
      if (res.data.code == 2000) {
        Toast('评论成功')
        // 评论提交成功后再把所有图片上传到服务器
        let j = 0
        let params = {
          name: ''
        }
        for(j=0;j<this.list.length;j++) {
          params.name = this.list[j]
          // 调用上传接口
          axios.post('/lan/upload_img', params).then(res => {
            if (res.data.code == 2000) {
              console.log('uploadOk')
            }
          })
        }
        // 图片上传完成打开节阀流
        this.twice = true
      } else {
        Toast(res.data.msg)
      }
    }
  }
}
</script>

<style scoped>
  .eva-header{
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    padding: 20px 0;
  }
  .eva-item{
    display: flex;
    align-items: center;
  }
  .eva{
    /*color: #15B0AE;*/
    color: #999999;
    padding-left: 10px;
    box-sizing: border-box;
    font-size: 15px;
  }
  .eva-active{
    color: #15B0AE;
    /*color: #999999;*/
    padding-left: 10px;
    box-sizing: border-box;
    font-size: 15px;
  }
  .content{
    width: 100%;
    box-sizing: border-box;
    border: none;
    background-color: #F4F4F4;
    padding: 15px;
    resize: none;
    line-height: 1.5;
    margin-bottom: 17px;
  }
  .picture{
    width: 105px;
    height: 80px;
    border: 1px dashed #BBBBBB;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #BBBBBB;
  }
  .pic-wrap{
    box-sizing: border-box;
    padding: 0 15px;
  }
  .submit{
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 18px;
    background-color: #15B0AE;
    color: #fff;
    position: fixed;
    bottom: 0;
  }
</style>

<style>
  .van-uploader__preview-image{
    width: 105px!important;
    height: 80px!important;
  }
  .van-uploader__preview i {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: url("../../../static/images/index/close_btn.png") no-repeat;
    background-size: 100% 100%;
  }
  .van-uploader__preview-delete{
    position: absolute;
    right: -5px;
    top: -5px;
    padding: 0.02667rem;
    color: rgba(255,255,255, 0);
    background-color: #fff;
  }
</style>
