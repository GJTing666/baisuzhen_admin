<template>
  <div class="login_bg">
    <div class="login_box">
      <div class="login_img">
        <img :src="logo" alt="login.png" />
      </div>
      <el-form :model="formData" ref="form" :rules="rules">
        <div class="el-form-item">
          <label class="el-form-item__label">
            <i class="el-icon-mobile-phone"></i>
          </label>
          <div class="el-form-item__content">
            <div class="el-input">
              <input
                v-model="formData.username"
                type="text"
                placeholder="手机号"
                autocomplete="off"
                class="el-input__inner"
              />
            </div>
          </div>
        </div>
        <div class="el-form-item">
          <label class="el-form-item__label">
            <i class="el-icon-lock"></i>
          </label>
          <div class="el-form-item__content">
            <div class="el-input">
              <input
                v-model="formData.password"
                type="password"
                placeholder="密码"
                autocomplete="off"
                class="el-input__inner"
              />
            </div>
          </div>
        </div>
        <div class="login_tip clearfix">
          <el-checkbox class="fl login_check" v-model="checked">是否记住账号</el-checkbox>
          <router-link to="/forget" class="fr repwd_btn">忘记密码? 立即找回</router-link>
        </div>
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
    /*var validateName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号"))
      }
      else {
        callback()
      }
    };
    var validatePwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"))
      }
    };*/
    return {
      logo,
      formData: {
        username: "",
        password: ""
      },
      checked: false,
      rules: {
        username: [
          // { validator: validateName, trigger: "blur" }
          { required: true, message:"请输入手机号",trigger: "blur" }
        ],
        password: [
          // { validator: validatePwd, trigger: "blur" }
          { required: true, message:"请输入密码",trigger: "blur" }

        ]
      }
    }
  },
  methods: {
    login(formName) {
      console.log(111)
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
