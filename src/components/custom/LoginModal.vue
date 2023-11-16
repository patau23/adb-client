<template>
  <v-dialog width="500">
    <template v-slot:activator="{ props }">
      <v-btn rounded variant="text" v-bind="props" text="Sign In"> </v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card title="SIGN IN">
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text="Close" @click="isActive.value = false"></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {
  name: "LoginModal",
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
