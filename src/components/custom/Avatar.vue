<template>
  <v-container fluid style="">
    <v-row justify="center" align="center">
      <v-menu min-width="200px" rounded>
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props">
            <v-avatar image="https://mangadex.org/img/avatar.png"> </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-card-text>
            <div class="mx-auto text-center">
              <v-avatar color="brown">
                <span class="text-h5">{{ user.initials }}</span>
              </v-avatar>
              <h3>{{ user.fullName }}</h3>
              <p class="text-caption mt-1">
                {{ user.email }}
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn class="" rounded :elevation="0" :to="'/user-profile'">
                <v-icon start icon="mdi-cart-arrow-right"></v-icon>
                Wishlist
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn class="" rounded :elevation="0" :to="'/user-profile'">
                <v-icon start icon="mdi-cart-heart"></v-icon>
                Cart
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn rounded variant="text"> Log Out </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-menu>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AvatarComponent",
  data: () => {
    return {
      user: {
        fullName: "John Doe",
        email: "john.doe@doe.com",
      },
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
