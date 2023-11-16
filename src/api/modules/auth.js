import request from "../core/request";
// import Vue from 'vue'

export default {
  registerUser({ userName, userEmail, userPassword }) {
    return request.execute(
      'post',
      '/Auth/Register',
      {
        userName, userEmail, userPassword
      }
    )
  },
  loginUser({ userPassword, userEmail }) {
    'post',
      '/Auth/Login',
      { userPassword, userEmail }
  },
  getUserId() {
    return request.execute(
      'get',
      '/Auth/GetId',
      {},
      {}
    )
  },
  getUser(UserId) {
    return request.execute(
      'get',
      `/Auth/GetUser`,
      {},
      {},
      { UserId }
    )
  },
  deleteUser(UserId) {
    return request.execute(
      'post',
      '/Auth/DeleteUser',
      {},
      { UserId }
    )
  },
}