import { createStore } from "vuex";

export default createStore({
  state: {
    userId: 1,
    name: "Leanne",
  },
  mutations: {
    changeUserId: (state, payload) => {
      state.userId = payload;
    },
    changeName: (state, payload) => {
      state.name = payload.name;
    },
  },
});
