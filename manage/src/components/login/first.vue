<template>
  <div class="first_step_cont">
    <el-form label-position="right" label-width="120px" :model="formData">
      <el-form-item label="">
        <div class="step_tips">
          <p>是否需要委托印链平台加密保存您的交易密码 ?</p>
          <p
            style="color: #409EFF;"
          >
            若未选择加密保存服务，请您务必认真保存，一旦丢失将无法找回！
          </p>
          <div class="switch_box">
            <el-switch
              :width="wid"
              v-model="formData.isSave"
              active-text="是"
              inactive-text="否"
              @change="changeStatus"
            >
            </el-switch>
          </div>
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
      <el-form-item label="">
        <el-button class="rea_btn" @click="changeSt" type="primary">确认提交</el-button>
      </el-form-item>
    </el-form>

    <el-dialog
      title="密码加密协议"
      :visible="dialogVisible"
      width="30%"
      :show-close="false">
      <div class="model_cont">
        <p>这是一段信息</p>
        <p>这是一段信息</p>
        <p>这是一段信息</p>
        <p>这是一段信息</p>
        <p>这是一段信息</p>
        <p>这是一段信息</p>
        <p>这是一段信息</p>
        <p>这是一段信息</p>
        <p>这是一段信息</p>
        <p>这是一段信息</p>
        <p>这是一段信息</p>
        <p>这是一段信息</p>
        <p>这是一段信息</p>
        <p>这是一段信息</p>
        <p>这是一段信息</p>
        <p>这是一段信息</p>
        <p>这是一段信息</p>
        <p>这是一段信息</p>
        <p>这是一段信息</p>
        <p>这是一段信息</p>
        <p>这是一段信息</p>
        <p>这是一段信息</p>
        <p>这是一段信息</p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">同 意</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      wid: 48,
      dialogVisible: false,
      formData: {
        isSave: false,
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
    },
    changeStatus (value) {
      this.dialogVisible = value
    }
  }
}
</script>

<style lang="less">
  @import './css/step.less';
</style>
