<template>
  <ul>
    <li
      :key="index"
      v-for="(item, index) in moduleList"
      class="module_list"
      :class="{'checked': item.isChecked && tabIndex == 2}"
      @click="changeModule(index)">
      <div class="module_tit">{{item.name}}</div>
      <div class="module_cont">{{item.desc}}</div>
      <span class="checked_status"><i class="el-icon-check"></i></span>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      moduleList: []
    }
  },
  methods: {
    changeModule (index) {
      if (this.tabIndex === 1) {
        return false
      }
      let module = this.moduleList[index]
      // module.isChecked = ! module.isChecked
      let moduleList = this.moduleList
      moduleList[index].isChecked = ! moduleList[index].isChecked
      // this.moduleList = moduleList
      // 设置勾选后的模块的属性isChecked
      this.$set(this.moduleList, index, module)
      this.$store.dispatch('commitModuleList', moduleList)
      // 选择的模块
      let isChecked = moduleList[index].isChecked
      let moduleDtaList = []
      if (this.tabIndex === 2) {
        moduleDtaList = moduleList.filter((item) => {
          return item.isChecked
        })
        console.log(moduleDtaList)
      }
      this.$store.commit('changechooseModule', {
        moduleDtaList,
        index,
        isChecked
      })
    }
  },
  mounted () {
    this.moduleList = this.$store.state.step.moduleList
  },
  computed: {
    tabIndex () {
      return this.$store.state.step.tabIndex
    }
  }
}
</script>

<style>

</style>
