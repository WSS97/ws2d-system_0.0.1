import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [
      {
        user: {
          id: '',
          name: '',
          email: '',
          pass: '',
        },
      },
    ],
    loggedUser: { id: '', name: '', email: '', pass: '' },
  },
  getters: {
    getLoggedtUser: (state) => state.loggedUser,
  },
  mutations: {
    alterUser(state, data) {
      state.user = data
    },
    addUser(state, newUser) {
      state.users.push(newUser)
    },
    setLoggedUser(state, user) {
      state.loggedUser = user
    },
  },
  actions: {},
  modules: {},
})
