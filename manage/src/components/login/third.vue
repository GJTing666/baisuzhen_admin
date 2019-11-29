<template>
  <div class="third_step margin-t-50">
    <div class="">
      <div class="module_rename">
        <div class="mo_title">菜单设置</div>
        <ul class="mo_lists">
          <li key="index" v-for="(item, index) in choostModule" class="mo_list clearfix">
            <div class="fl">
              <p class="font-14">{{item.name}}</p>
              <div class="margin-t-5">显示名称 : <input v-model="item.showName" class="mo_input" type="text"></div>
            </div>
            <span class="fr el-icon-delete text-main font-16 margin-t-15"></span>
          </li>
        </ul>
      </div>
      <div class="text-center margin-t-20">
        <el-button @click="changeSt" type="default">返 回</el-button>
        <el-button type="primary" @click="subModule">提 交</el-button>
      </div>
    </div>
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
    },
    subModule () {
      this.$router.push('/')
    }
  },
  computed: {
    choostModule () {
      return this.$store.state.step.chooseModuleList
    }
  }
}
</script>

<style>

</style>
