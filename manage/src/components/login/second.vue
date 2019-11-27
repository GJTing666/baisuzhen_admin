<template>
  <div>
    <div class="step_s_box clearfix">
      <div class="fl step_s_left">
        <ul>
          <li class="step_nav">选择功能模块</li>
          <li class="step_nav on">通用功能</li>
          <li class="step_nav">自定义功能</li>
        </ul>
      </div>
      <div class="fr step_s_right">
        <component :is="view"></component>
      </div>
    </div>
    <div class="text-center">
      <el-button @click="changeSt" type="primary">应用模板</el-button>
    </div>
  </div>
</template>

<script>
import curModule from './se_cont1'
import cusModule from './se_cont2'
export default {
  data () {
    return {
      view: 'curModule'
    }
  },
  components: {
    curModule,
    cusModule
  },
  props: {
    changeStep: Function
  },
  methods: {
    changeSt () {
      this.changeStep(3)
    }
  },
  mounted() {
    let stepNav = document.querySelectorAll('.step_s_left .step_nav')
    for (let i = 0; i < stepNav.length; i++) {
      stepNav[i].onclick = () => {
        stepNav[i].classList.add('on')
        let navParent = stepNav[i].parentNode.children
        for (let j=0; j < navParent.length; j++) {
          if(navParent[j].nodeType === 1 && navParent[j] != stepNav[i]) {
            navParent[j].classList.remove('on')
          }
        }
        if (i == 1) {
          this.view = 'curModule'
        } else if (i == 2) {
          this.view = 'cusModule'
        }
      }
    }
  }
}
</script>

<style>

</style>
