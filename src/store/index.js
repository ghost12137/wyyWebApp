import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    userAccount: null,
    userProfile: null,
    isLogin: false,
    uid: ''
  },
  mutations: {
    setUserStatus(state, userMsg) {
      if (userMsg) {
        state.isLogin = true,
        state.token = userMsg.token;
        state.userAccount = userMsg.userAccount;
        state.userProfile = userMsg.userProfile;
        state.uid = userMsg.userProfile.userId;
        sessionStorage.setItem('token', state.token);
        sessionStorage.setItem('isLogin', state.isLogin);
        sessionStorage.setItem('uid', state.uid);
        sessionStorage.setItem('userAccount', JSON.stringify(state.userAccount));
        sessionStorage.setItem('userProfile', JSON.stringify(state.userProfile));
      } else if (userMsg == null) {
        sessionStorage.removeItem('isLogin');
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('uid');
        sessionStorage.removeItem('userAccount');
        sessionStorage.removeItem('userProfile');
        state.isLogin = false,
        state.token = '';
        state.uid = '';
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
        state.uid = sessionStorage.getItem('uid');
        state.userAccount = JSON.parse(sessionStorage.getItem('userAccount'));
        state.userProfile = JSON.parse(sessionStorage.getItem('userProfile'));
        // console.log(state.userProfile);
      }
      return state.isLogin;
    }
  },
})
