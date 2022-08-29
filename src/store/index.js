import { createStore } from "vuex";

export default createStore({
  state: {
    levels: [1, 2, 3, 4, 5],
    levelsForCabine: [1, 2, 3, 4, 5],
  },
  getters: {},
  mutations: {
    remove(state, el) {
      state.levelsForCabine.length = el;
    },
  },
  actions: {},
  modules: {},
});
