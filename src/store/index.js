import { createStore } from 'vuex'

export default createStore({
  state: {
    users: null,
    todos: [],
    userName: null,
    userId: 0,
    currentFilter: 'All'
  },
  mutations: {
    setTodos: (state, payload) => state.todos = payload,
    setUsersList: (state, payload) => state.users = payload,
    setUserId: (state, payload) => state.userId = payload,
    setUserName: (state, payload) => state.userName = payload,
    setCurrentFilter: (state, payload) => state.currentFilter = payload,
  },

  getters: {
    getTodos: (state) => {
      return state.todos.filter(todo => {
        return todo.userId === state.userId ? todo : ''
      })
    },
    getCompleted: (state) => {
      return state.todos.filter(todo => {
        return todo.userId === state.userId ? todo.completed : ''
      })
    },

    getUncompleted: (state) => {
      return state.todos.filter(todo => {
        return todo.userId === state.userId ? !todo.completed : ''
      })
    },
    todosLength: (state, getters) => getters.getTodos.length,
    completedLength: (state, getters) => getters.getCompleted.length,
    unCompletedLength: (state, getters) => getters.getUncompleted.length
  },
  actions: {
    setUsersList: ({commit}, payload) => commit('setUsersList', payload),
    setTodos: ({commit}, payload) => commit('setTodos', payload)
  }
})
