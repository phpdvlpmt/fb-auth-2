<template>
  <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
    <div class="container mx-auto flex">
      <router-link to="/" class="navbar-brand">My App</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label>
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto"></ul>
        <ul class="navbar-nav ml-auto">
          <template v-if="user.loggedIn">
            <div class="flex">
              <router-link to="/dashboard" class="ml-4">Dashboard</router-link>
              <div class="ml-4">{{ user.data.email }}</div>
              <li class="ml-4">
                <a class="ml-4" @click.prevent="signOut">Sign out</a>
              </li>
            </div>
          </template>
          <template v-else>
            <div class="flex">
              <li class="ml-4">
                <router-link to="login" class="ml-4">Login</router-link>
              </li>
              <li class="ml-4">
                <router-link to="sign-up" class="ml-4">Register</router-link>
              </li>
            </div>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapGetters } from "vuex";
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  computed: {
    ...mapGetters({
      // map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "home"
          });
        });
    }
  }
};
</script>
