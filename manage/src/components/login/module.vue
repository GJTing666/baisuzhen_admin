<template>
  <ul>
    <li
      :key="index"
      v-for="(item, index) in moduleList"
      class="module_list"
      @click="changeModule">
      <div class="module_tit">{{item.name}}</div>
      <div class="module_cont">{{item.desc}}</div>
      <span class="checked_status"><i class="el-icon-check"></i></span>
    </li>
  </ul>
</template>

<script>
export default {
  methods: {
    changeModule () {}
  },
  computed: {
    moduleList () {
      return this.$store.state.step.moduleList
    }
  }
}
</script>

<style>

</style>
