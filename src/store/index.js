import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      name: '',
      email: '',
      pass: '',
    },
  },
  getters: {},
  mutations: {
    alterUser(state, data) {
      this.state.user = data
    },
  },
  actions: {},
  modules: {},
})
