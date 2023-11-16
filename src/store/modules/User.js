import { Api } from "@/api/core/request";
import axios from "axios";

/* eslint-disable */
const name = "USER";
const namespaced = true;
const state = {
  loading: false,
  isAuth: false,
  id: null,
  password: null,
  email: null,
  name: null,
  history: [],
  isAdmin: false,
};
const getters = {
  STATE: (s) => s,
};
const mutations = {
  SET_USER: (state, data) => {
    state.isAuth = true
    state.id = data.userId
    state.password = data.userPassword
    state.email = data.userEmail
    state.name = data.userName
    state.history = data.history
    state.isAdmin = data.isAdmin
  },
  REMOVE_USER: (state) => {
    state.isAuth = false
    state.id = null
    state.password = null
    state.email = null
    state.name = null
    state.history = []
    state.isAdmin = null
  },
  SET_USER_ID: (state, data) => {
    state.id = data
  }
};
const actions = {
  // ================= AUTH ================= 
  SIGN_UP_USER: async ({ commit }, { userName, userPassword, userEmail }) => {
    let response
    try {
      response = await axios.post(Api + '/api/Auth/Register', {
        userName,
        userPassword,
        userEmail
      })
      // commit('SET_USER', response)
    } catch (error) {
      console.error(error)
    }
    console.log(response)
  },
  SIGN_IN_USER: async ({ commit }, { userPassword, userEmail }) => {
    let response
    try {
      response = await axios.post(Api + '/api/Auth/Login', {
        userPassword,
        userEmail
      })
      console.log(response)
      // commit('SET_USER', response)
    } catch (error) {
      console.error(error)
    }
  },
  GET_USER_ID: async ({ commit }, { JWT }) => {
    let response
    try {
      response = await axios.get(Api + '/api/Auth/GetId', {
        params: {
          JWT
        }
      })
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  },
  GET_USER_INFO_BY_ID: async ({ commit }, { UserId }) => {
    let response
    try {
      response = await axios.get(Api + '/api/Auth/GetUser', {
        params: {
          UserId
        }
      })
      console.log(response)
      // commit('SET_USER', response)
    } catch (error) {
      console.error(error)
    }
  },
  DELET_USER_ITSELF: async ({ commit }, { UserId }) => {
    let response
    try {
      response = await axios.post(Api + '/api/Auth/DeleteUser', {}, {
        params: {
          UserId
        }
      })
    } catch (error) {
      console.error(error)
    }
  },

  // ================= USER ================= 
  ADD_TO_HISTORY: async ({ commit }, { }) => { },

};
export default {
  name,
  namespaced,
  state,
  getters,
  mutations,
  actions,
};
