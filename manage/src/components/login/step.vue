<template>
  <div>
    <Top></Top>
    <div class="step_box">
      <el-steps :active="stepActive">
        <el-step class="first_step" title="设置交易密码" icon="el-icon-success"></el-step>
        <el-step class="second_step" title="选择功能模块" icon="el-icon-success"></el-step>
        <el-step class="third_step" title="菜单配置" icon="el-icon-success"></el-step>
      </el-steps>
    </div>
    <conponent :changeStep="changeStep" :is="view"></conponent>
  </div>
</template>

<script>
import Top from 'components/common/top.vue'
import First from 'components/login/first.vue'
import Second from 'components/login/second.vue'
import Third from 'components/login/third.vue'
export default {
  data () {
    return {
      stepActive: 1,
      view: 'First'
    }
  },
  components: {
    Top,
    First,
    Second,
    Third
  },
  methods: {
    changeStep (step) {
      this.stepActive = step
      if (step === 1) {
        this.view = 'First'
      } else if (step === 2) {
        this.view = 'Second'
      } else {
        this.view = 'Third'
      }
    }
  }
}
</script>

<style lang="less">
@import './css/step.less';
</style>
