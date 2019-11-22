
let state = {
  info: {},
  token: ''
}

let mutations = {
  changeUser (state, data) {
    state.info = data.info
    state.token = data.token
  }
}

export default {
  state,
  mutations
}
