import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      selecterFooter: 'home'
    }),
    mutations: {
      changeCategory(state, value) {
        state.selecterFooter = value
      }
    }
  })
}

export default createStore
