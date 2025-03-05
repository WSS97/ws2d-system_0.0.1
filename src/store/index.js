import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      name: '',
      email: '',
      password: '',
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
