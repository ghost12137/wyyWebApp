import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    userAccount: null,
    userProfile: null,
    isLogin: false
  },
  mutations: {
    setUserStatus(state, userMsg) {
      if (userMsg) {
        state.isLogin = true,
        state.token = userMsg.token;
        state.userAccount = userMsg.userAccount;
        state.userProfile = userMsg.userProfile;
        sessionStorage.setItem('token', state.token);
        sessionStorage.setItem('isLogin', state.isLogin);
        sessionStorage.setItem('userAccount', state.userAccount);
        sessionStorage.setItem('userProfile', state.userProfile);
      } else if (userMsg == null) {
        sessionStorage.removeItem('isLogin');
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('userAccount');
        sessionStorage.removeItem('userProfile');
        state.isLogin = false,
        state.token = '';
        state.userAccount = null;
        state.userProfile = null;
      }
    }
  },
  actions: {
    setUser(context, userMsg) {
      context.commit('setUserStatus', userMsg);
    },
  },
  modules: {
  },
  getters: {
    isLogin(state) {
      if (!state.isLogin) {
        state.isLogin = sessionStorage.getItem('isLogin');
        state.token = sessionStorage.getItem('token');
        state.userAccount = sessionStorage.getItem('userAccount');
        state.userProfile = sessionStorage.getItem('userProfile');
      }
      return state.isLogin;
    }
  },
})
