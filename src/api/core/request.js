/* eslint-disable */
import axios from "axios";
import Vue from 'vue'

const client = axios.create({
  baseURL: process.env.VUE_APP_API_URL, // eslint-disable-line no-undef
  json: true,
});

export default {
  async execute(method, resource, data = {}, headers = {}, params = {}) {
    return client({
      crossdomain: true,
      method,
      url: resource,
      data,
      headers: {
        Accept: "*/*",
        ...headers,
      },
      params,
    }).then(
      (response) => {
        return response.data;
      },
      (error) => {
        console.log(
          "Ошибка в запросе по пути " +
          resource +
          " | status: " +
          error.request.status
        );
        try {
          return JSON.parse(error.request.response);
        } catch (e) {
          return error.request.response;
        }
      }
    );
  },
};
