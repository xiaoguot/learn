export default {
  state: {
    name: 'zhangsan'
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  getters: {
    fullname(state) {
      return state.name + '11111'
    },
    fullname2(state, getters) {
      return getters.fullname + '2222'
    },
    fullname3(state, getters, rootstate) {
      return getters.fullname2 + rootstate.counter
    }
  },
  actions: {
    aUpateName(context) {
      setTimeout(() => {
        context.commit('updateName', 'dengmei')
      }, 1000);
    }
  }
}