<template>
  <v-dialog width="700">
    <template v-slot:activator="{ props }">
      <v-btn rounded variant="text" v-bind="props" text="Sign Up"> </v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card rounded title="SIGN UP">
        <v-card-subtitle> please enter all data </v-card-subtitle>

        <v-card-text>
          <!-- username -->
          <v-text-field
            v-model="username"
            label="Type your user name"
            loading
            placeholder="Come up with a creative username ⭐️"
          >
            <template v-slot:loader>
              <v-progress-linear
                :active="loading"
                height="7"
                indeterminate
              ></v-progress-linear>
            </template>
          </v-text-field>

          <!-- email -->
          <v-text-field
            v-model="email"
            label="Type your email"
            loading
            placeholder="enter your valid email"
          >
            <template v-slot:loader>
              <v-progress-linear
                :active="loading"
                height="7"
                indeterminate
              ></v-progress-linear>
            </template>
          </v-text-field>

          <v-sheet class="d-flex flex-column flex-wrap bg-surface-variant">
            <!-- password -->
            <v-text-field
              class="flex-1-0 ma-2 pa-2"
              v-model="password"
              label="Type your password"
              loading
              placeholder="password"
              hint="must be more than 8 letters and includes numbers"
              :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPass ? 'text' : 'password'"
              counter
              @click:append="showPass = !showPass"
            >
              <template v-slot:loader>
                <v-progress-linear
                  :active="loading"
                  height="7"
                  indeterminate
                ></v-progress-linear>
              </template>
            </v-text-field>
            <!-- repeat -->
            <v-text-field
              class="ma-2 pa-2"
              v-model="passwordRepeat"
              label="Repeat password"
              loading
              placeholder="repeat your password"
              hint="must be more than 8 letters and includes numbers"
              :append-icon="showRepeat ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showRepeat ? 'text' : 'password'"
              counter
              @click:append="showRepeat = !showRepeat"
            >
              <template v-slot:loader>
                <v-progress-linear
                  :active="loading"
                  height="7"
                  indeterminate
                ></v-progress-linear>
              </template>
            </v-text-field>
          </v-sheet>
        </v-card-text>

        <v-card-actions>
          <v-btn text="Close" @click="isActive.value = false"></v-btn>
          <v-spacer></v-spacer>
          <v-btn text="Sign up" @click="registNewUser(isActive)"></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "RegisterModal",
  data() {
    return {
      loading: false,
      email: "",
      username: "",
      password: "",
      passwordRepeat: "",
      showPass: false,
      showRepeat: false,
    };
  },
  computed: {
    similarPasswords() {
      return this.password === this.passwordRepeat;
    },
    ...mapGetters({}),
  },
  methods: {
    ...mapActions({
      
    }),
    async registNewUser(isActiveModalState) {
      this.loading = true;
      // request
      this.email = "";
      this.username = "";
      this.password = "";
      this.passwordRepeat = "";
      isActiveModalState.value = false;
      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
