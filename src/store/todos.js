import { saveLocalStorage } from "../services";

const state = {
  data: {
    todos: [],
  },
};

const mutations = {
  setTodos: (state, payload) => {
    state.data.todos = payload;

    saveLocalStorage("todos", state.data.todos);
  },

  setNewTodo: (state, payload) => {
    const newTodo = {
      id: Date.now(),
      title: payload,
      completed: false,
    };

    state.data.todos.unshift(newTodo);
    saveLocalStorage("todos", state.data.todos);
  },

  removeTodo: (state, payload) => {
    state.data.todos = state.data.todos.filter(
      (todo) => todo.id !== payload.id
    );

    saveLocalStorage("todos", state.data.todos);
  },

  setStatus: (state, payload) => {
    state.data.todos = state.data.todos.map((todo) => {
      if (todo.id === payload.id) {
        return { ...todo, completed: !todo.completed };
      }

      return todo;
    });

    saveLocalStorage("todos", state.data.todos);
  },
};

const actions = {
  retrieveTodos({ commit }, payload) {
    commit("setTodos", payload);
  },

  addTodo({ commit }, payload) {
    commit("setNewTodo", payload);
  },

  filterTodos({ commit }, payload) {
    commit("removeTodo", payload);
  },

  toggleTodo({ commit }, payload) {
    commit("setStatus", payload);
  },
};

const getters = {
  getTodos: (state) => state.data.todos,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
