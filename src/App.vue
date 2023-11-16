<template>
  <div v-if="!loading">
    <v-card>bruh</v-card>
    <component :is="'default-layout'">
      <router-view />
    </component>
  </div>
</template>

<script>
/* eslint-disable */
import Default from "./layouts/default.vue";

export default {
  name: "App",
  components: {
    "default-layout": Default,
  },
  data: () => {
    return {
      loading: false,
    };
  },
  async created() {
    // const user = await axios.get(
    //   `http://adbfinal.azurewebsites.net/api/Auth/GetUser`,
    //   {
    //     params: {
    //       UserId: 1,
    //     },
    //   }
    // );
    // console.log(user);
    // const response = await axios.get(
    //   "http://adbfinal.azurewebsites.net/api/Product/Get_All_Products"
    // );
    // this.product = response.data;
    // console.log(this.product[0].productImage);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
