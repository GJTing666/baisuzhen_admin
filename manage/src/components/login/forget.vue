<template>
  <div class="login_bg register_bg">
    <div class="login_box">
      <div class="re_title">
        <span>找回登录密码</span>
      </div>
      <el-form :model="formData" ref="form" :rules="rules">
        <div class="el-form-item">
          <label class="el-form-item__label">
            请输入手机号 :
          </label>
          <div class="el-form-item__content">
            <div class="el-input">
              <input
                v-model="formData.username"
                type="text"
                autocomplete="off"
                class="el-input__inner"
              />
            </div>
          </div>
        </div>
        <div class="el-form-item clearfix">
          <div class="fl">
            <label class="el-form-item__label">
              请输入验证码 :
            </label>
            <div class="el-form-item__content" style="width: 112px;">
              <div class="el-input">
                <input
                  v-model="formData.code"
                  type="text"
                  autocomplete="off"
                  class="el-input__inner"
                />
              </div>
          </div>
          </div>
          <div class="fr code_btn">
            <el-button type="default">获取验证码</el-button>
          </div>
        </div>
        <div class="el-form-item">
          <label class="el-form-item__label">
            输入新密码 :
          </label>
          <div class="el-form-item__content">
            <div class="el-input">
              <input
                v-model="formData.password"
                type="password"
                autocomplete="off"
                class="el-input__inner"
              />
            </div>
          </div>
        </div>
        <div class="el-form-item">
          <label class="el-form-item__label">
            确认新密码 :
          </label>
          <div class="el-form-item__content">
            <div class="el-input">
              <input
                v-model="formData.rePassword"
                type="password"
                autocomplete="off"
                class="el-input__inner"
              />
            </div>
          </div>
        </div>
        <div class="login_btn_box">
          <el-button type="primary" class="login_btn" @click="login('form')">提 交</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formData: {
        username: '',
        code: '',
        password: '',
        rePassword: '',
      },
      rules: {
        username: [
          // { validator: validateName, trigger: "blur" }
          { required: true, message:"请输入手机号",trigger: "blur" }
        ],
        code: [
          {required: true, message: '', trigger: 'blur'}
        ],
        password: [
          // { validator: validatePwd, trigger: "blur" }
          { required: true, message:"请输入密码",trigger: "blur" }

        ],
        rePassword: [
          {required: true, message: '', trigger: 'blur'}
        ]
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../css/login.less";
@import "../../css/register.less";
</style>
