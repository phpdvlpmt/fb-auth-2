<template>
  <div class="dashboard">
    <h1 class="text-green-400 text-6xl">Dashboard</h1>
  </div>
</template>

<script>
// @ is an alias to /src

import * as firebase from "firebase/app";
import "firebase/auth";
import { mapGetters } from "vuex";

export default {
  name: "dashboard",
  components: {},
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          // this.$router.replace("home");
        });
    }
  },
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  }
};
</script>
