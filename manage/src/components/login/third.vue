<template>
  <div>
    <div>第三步</div>
    <el-button @click="changeSt" type="default">返 回</el-button>
    <el-button type="primary">提 交</el-button>
  </div>
</template>

<script>
export default {
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

<style>

</style>
