import { createStore } from "vuex";

export default createStore({
  state: {
    levels: [1, 2, 3, 4, 5],
    number: 1,
    currentNumber: 1,
    numbersDifference: 0,
    displayCabine: true,
    stack: [],
  },
  getters: {},
  mutations: {
    changeNumber(state, el) {
      state.number = el;
      console.log("number:" + state.number);
      console.log("currentNumber:" + state.currentNumber);
      state.numbersDifference = Math.abs(state.number - state.currentNumber);
      console.log("diff:" + state.numbersDifference);
      state.currentNumber = el;
      console.log("changed currentNumber:" + state.currentNumber);
    },
    displayCabine(state) {
      state.displayCabine = !state.displayCabine;
    },
    addTask(state, el) {
      state.stack.push({
        number: el,
      });
    },
    removeTask(state) {
      state.stack.shift();
    },
  },
  actions: {
    changeNumber({ commit }, el) {
      commit("changeNumber", el);
    },
    displayCabine({ commit }) {
      commit("displayCabine");
    },
    addTask({ commit }, el) {
      commit("addTask", el);
    },
    removeTask({ commit }) {
      commit("removeTask");
    },
  },
  modules: {},
});
