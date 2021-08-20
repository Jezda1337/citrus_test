import { createStore } from "vuex";

export default createStore({
  state: {
    userId: 0,
    name: "",
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
