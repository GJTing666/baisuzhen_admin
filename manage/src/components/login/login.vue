<template>
  <div class="login_bg">
    <div class="login_box">
      <div class="login_img">
        <img :src="logo" alt="login.png" />
      </div>
      <el-form :model="formData" ref="form" :rules="rules">
        <el-form-item prop="username">
          <div class="login_name clearfix">
            <span class="fl"><i class="el-icon-mobile-phone"></i></span>
            <!-- <input type="text" v-model="formData.username" placeholder="手机号"> -->
            <el-input v-model="formData.username" placeholder="手机号"></el-input>
          </div>
        </el-form-item>
        <el-form-item prop="password">
          <div class="login_pwd clearfix">
            <span class="fl"><i class="el-icon-lock"></i></span>
            <!-- <input type="password" v-model="formData.password" placeholder="密码"> -->
            <el-input v-model="formData.password" placeholder="密码"></el-input>
          </div>
        </el-form-item>
        <el-form-item>
          <div class="login_tip clearfix">
            <el-checkbox class="fl login_check" v-model="checked">是否记住账号</el-checkbox>
            <router-link to="/forget" class="fr repwd_btn">忘记密码? 立即找回</router-link>
          </div>
        </el-form-item>
        <div class="login_btn_box">
          <el-button type="primary" class="login_btn" @click="login('form')">立即登录</el-button>
        </div>
        <div class="ad_text">百溯真商家系统后台</div>
      </el-form>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/logo_login.png"
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
    return {
      logo,
      formData: {
        username: "",
        password: ""
      },
      checked: false,
      rules: {
        username: [
          { validator: validateName, trigger: "blur" }
        ],
        password: [
          { validator: validatePwd, trigger: "blur" }
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
</style>
