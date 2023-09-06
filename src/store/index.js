
import Vuex, { createStore } from 'vuex';



export default createStore({
  state: {
    users: [], 
    currentUser: null,
    tasks:[], 
    changeSelected:'',

  },

  mutations: {

    registerUser(state, user) {
      state.users.push(user);
    },
    setCurrentUser(state, user) {
      state.currentUser = user;
    },
  },
  actions: {
    register({ commit }, user) {
      commit('registerUser', user);
    },
    login({ commit, state }, credentials) {
      const user = state.users.find(u => u.email === credentials.email && u.password === credentials.password);
      if (user) {
        commit('setCurrentUser', user);
      }
    },
    logout({ commit }) {
      commit('setCurrentUser', null);
    },
  },
  getters: {
    isLoggedIn: state => !!state.currentUser,
  },
});
