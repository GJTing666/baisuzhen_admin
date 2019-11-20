<template>
  <div class="login_bg register_bg">
    <div class="login_box">
      <div class="reTitle">
        <span>找回登录密码</span>
      </div>
      <el-form :model="formData" ref="form" :rules="rules">
        <el-form-item prop="username">
          <div class="login_name clearfix">
            <span class="fl">请输入手机号 : </span>
            <el-input v-model="formData.username"></el-input>
          </div>
        </el-form-item>
        <el-form-item prop="code">
          <div class="login_pwd reCode clearfix">
            <span class="fl">请输入验证码 : </span>
            <el-input v-model="formData.code"></el-input>
            <el-button class="fr" type="default">获取验证码</el-button>
          </div>
        </el-form-item>
        <el-form-item prop="password">
          <div class="login_pwd clearfix">
            <span class="fl">请输入密码 : </span>
            <el-input v-model="formData.password"></el-input>
          </div>
        </el-form-item>
        <el-form-item prop="rePassword">
          <div class="login_pwd clearfix">
            <span class="fl">确认新密码 : </span>
            <el-input v-model="formData.rePassword"></el-input>
          </div>
        </el-form-item>
        <div class="login_btn_box">
          <el-button type="primary" class="login_btn" @click="login('form')">提 交</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var validateName = (rule, value, callback) => {
      let reName = /^1[345789][0-9]{9}$/
      if (value === "") {
        callback(new Error("请输入手机号"))
      } else if (!reName.test(value)) {
        callback(new Error("请输入正确手机号"))
      } else {
        callback()
      }
    };
    var validateCode = (rule, value, callback) => {
      if (!value) {
        callback(new Error("验证码错误"))
      }else{
        callback()
      }
    };
    var validatePwd = (rule, value, callback) => {
      // 密码至少包含 数字和英文，长度6-18
      let pwdReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/;
      if (value === "") {
        callback(new Error("请输入密码"))
      }else if (!pwdReg.test(value)) {
        callback(new Error("密码至少包含 数字和英文，长度6-18位字符"))
      }else{
        callback()
      }
    };
    var validateRePwd = (rule, value, callback) => {
      if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.formData.password) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
    };
    return {
      formData: {
        username: "",
        code: "",
        password: "",
        rePassword: ""
      },
      checked: false,
      rules: {
        username: [
          { validator: validateName, trigger: "blur" }
        ],
        code: [
          { validator: validateCode, trigger: "blur" }
        ],
        password: [
          { validator: validatePwd, trigger: "blur" }
        ],
        rePassword: [
          { validator: validateRePwd, trigger: "blur" }
        ]
      }
    }
  },
  methods: {
    login(formName) {
      this.$refs[formName].validate((valid) => {
        console.log(valid)
      })
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../css/login.less";
@import "../../css/register.less";
</style>
