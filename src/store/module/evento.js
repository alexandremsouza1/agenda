
export default {
  namespaced: true,
  // state
  state: {
    eventos: []
  },
  // getters
  getters: {
    evento: state => state.eventos
  },
  // mutations
  mutations: {
    SET_EVT (state, json) {
      state.eventos.push(json)
    }
  },
  // actions
  actions: {
    saveEvt ({ commit }, json) {
      commit('SET_EVT', json)
    }
  }
}
