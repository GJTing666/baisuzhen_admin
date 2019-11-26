<template>
  <div class="main_top clearfix">
    <div class="fl main_top_left clearfix">
      <img class="logo" :src="logoImg">
      <span class="l_title">重庆耐克尔有限公司</span>
    </div>
    <div class="fr main_top_right clearfix">
      <div class="unameImg fl"><img class="imgq" :src="nameImg"></img></div>
      <a class="r_uname">admin</a>
      <a><i class="iconfont icon-tuichu"></i> 退出</a>
    </div>
  </div>
</template>

<script>
import logoImg from 'images/logo.png'
import unameImg from 'images/uname.jpg'
export default {
  data () {
    return {
      logoImg: logoImg,
      nameImg: unameImg
    }
  }
}
</script>

<style lang="less" scoped>
  @import './css/main.less';
</style>
