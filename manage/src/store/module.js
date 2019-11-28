
let state = {
  moduleList: [
    {
      name: '账户管理',
      desc: '账户功能描述账户功能描述账户功能描述账户功能描述',
      showName: '账户管理',
      id: 1
    },{
      name: '产品管理',
      desc: '产品功能描述产品功能描述产品功能描述产品功能描述',
      showName: '产品管理',
      id: 2
    },{
      name: '商家管理',
      desc: '商家功能描述商家功能描述商家功能描述商家功能描述',
      showName: '商家管理',
      id: 3
    },{
      name: '信息管理',
      desc: '信息功能描述信息功能描述信息功能描述信息功能描述',
      showName: '信息管理',
      id: 4
    },{
      name: '二维码管理',
      desc: '二维码功能描述二维码功能描述二维码功能描述二维码功能描述',
      showName: '二维码管理',
      id: 5
    }
  ],
  chooseModuleList: []
}

let mutations = {
  // 点击的是通用还是自定义对应的index
  changeTabIndex (state, index) {
    state.tabIndex = index
  },
  // 选择的模块
  changechooseModule (state, data) {
    if (data.moduleDtaList && data.isChecked == true) {
      state.chooseModuleList.push(data)
      // console.log(state.chooseModuleList, data.index, data.isChecked)
      // 设置chooseModuleList的数组内数据的index等于data.index
      state.chooseModuleList[data.index].index = data.index
    } else {
      state.chooseModuleList.map((item, index) => {
        if (item.index == data.index) {
          state.chooseModuleList.splice(index, 1)
        }
      })
    }

  },
  // 改变的模块（勾选或者未勾选）
  changeModuleList (state, moduleList) {
    state.moduleList = moduleList
  }
}

let actions = {
  commitModuleList ({commit}, moduleList) {
    commit('changeModuleList', moduleList)
  }
}

export default {
  state,
  mutations,
  actions
}
