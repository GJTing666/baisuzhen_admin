<template>
  <div>
    <div>第二步</div>
    <el-button @click="changeSt" type="primary">下一步</el-button>
  </div>
</template>

<script>
export default {
  props: {
    changeStep: Function
  },
  methods: {
    changeSt () {
      this.changeStep(3)
    }
  }
}
</script>

<style>

</style>
