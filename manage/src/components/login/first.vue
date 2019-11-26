<template>
  <div class="first_step_cont">
    <el-form label-position="right" label-width="120px" :model="formData">
      <el-form-item label="">
        <div class="step_tips">
          <p>是否需要委托印链平台加密保存您的交易密码 ?</p>
          <p>若未选择加密保存服务，请您务必认真保存，一旦丢失将无法找回！</p>
        </div>
      </el-form-item>
      <el-form-item label="输入新交易密码">
        <el-input type="password" v-model="formData.password"></el-input>
      </el-form-item>
      <el-form-item label="确认新交易密码">
        <el-input type="password" v-model="formData.repassword"></el-input>
      </el-form-item>
      <el-form-item label="输入验证码">
        <el-input v-model="formData.code"></el-input>
      </el-form-item>
    </el-form>
    <el-button @click="changeSt" type="primary">下一步</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formData: {
        password: '',
        repassword: '',
        code: ''
      }
    }
  },
  props: {
    changeStep: Function
  },
  methods: {
    changeSt () {
      this.changeStep(2)
    }
  }
}
</script>

<style lang="less">
  @import './css/step.less';
</style>
