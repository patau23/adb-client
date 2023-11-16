<template>
  <v-container dense fluid fill-height>
    <v-row align="center" justify="center">
      <v-col>
        <v-row>
          <v-text-field
            density="compact"
            variant="solo"
            label="Search templates"
            append-inner-icon="mdi-magnify"
            single-line
            rounded
            hide-details
            @click:append-inner="search"
          ></v-text-field>
        </v-row>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="1">
        <Avatar />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Avatar from "./Avatar.vue";
export default {
  name: "HeaderComponent",
  components: {
    Avatar,
  },
  data: () => {
    return {
      searchInput: "",
    };
  },
  methods: {
    search() {
      console.log(1);
    },
  },
};
</script>

<style lang="scss" scoped></style>
