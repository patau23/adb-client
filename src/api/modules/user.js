import request from "../core/request";
// import Vue from 'vue'

export default {
  addProductToUsersWishlist({ UserId, ProductId }) {
    return request.execute(
      'put',
      '/Add_to_Users_Wishlist',
      {},
      { UserId, ProductId }
    )
  },
  addViewedProductToUsersHistory({ UserId, ProductId }) {
    return request.execute(
      'put',
      '/Add_to_Users_History',
      {},
      { UserId, ProductId }
    )
  },
  // addProductToUsersCart ({})
}