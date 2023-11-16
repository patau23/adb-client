<template>
  <v-app>
    <v-app-bar color="#1E1E1E">
      <v-container class="" dense fill-height fluid>
        <v-row align="center" justify="center">
          <v-col cols="auto">
            <v-btn icon="mdi-menu" @click="drawer = !drawer"> </v-btn>
          </v-col>
          <v-col cols="auto">
            <v-btn icon="mdi-home" :to="'/'"> </v-btn>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="9">
            <Header />
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" color="#F3F3F3">
    </v-navigation-drawer>
    <v-main height="100%">
      <v-container v-if="!loading" :fluid="true">
        <v-layout>
          <slot />
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from "../components/custom/Header.vue";
export default {
  name: "DefaultLayout",
  components: {
    Header,
  },
  data: () => {
    return {
      loading: false,
      drawer: true,
    };
  },
  methods: {
    search() {
      console.log(1);
    },
  },
};
</script>

<style scoped></style>
