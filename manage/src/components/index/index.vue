<template>
  <div class="main_container">
    <el-container>
      <el-header><Top></Top></el-header>
      <el-container>
        <el-aside><Left></Left></el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Top from 'components/common/top.vue'
import Left from 'components/common/left.vue'
export default {
  components: {
    Top,
    Left
  }
}
</script>

<style lang="less">
@import "../../css/main_index.less";
</style>
