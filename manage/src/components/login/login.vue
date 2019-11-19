<template>
  <div class="login_bg">
    <div class="login_box">
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <div class="login_img">
          <img src="@/assets/logo_login.png" alt="login.png">
        </div>
        <div class="el-form-item">
          <label class="el-form-item__label"><i class="el-icon-mobile-phone"></i></label>
          <div class="el-form-item__content">
            <div class="el-input">
              <input type="text" placeholder="手机号" autocomplete="off" class="el-input__inner">
            </div>
          </div>
        </div>
        <div class="el-form-item">
          <label class="el-form-item__label"><i class="el-icon-lock"></i></label>
          <div class="el-form-item__content">
            <div class="el-input">
              <input type="text" placeholder="密码" autocomplete="off" class="el-input__inner">
            </div>
          </div>
        </div>
        <div class="login_tip clearfix">
          <el-checkbox class="fl" v-model="checked">是否记住账号</el-checkbox>
          <router-link to="" class="fr repwd_btn">忘记密码? 立即找回</router-link>
        </div>
        <div class="login_btn_box">
          <el-button type="primary" class="login_btn">立即登录</el-button>
        </div>
        <div class="ad_text">百溯真商家系统后台</div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      },
      checked: true
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../../css/public.less';
  @import '../../css/login.less';
</style>
