<template>
  <div class="sign-up">
    <p>Vytvoř si nový účet</p>
    <input type="text" placeholder="email" v-model="email" /><br />
    <input type="password" placeholder="password" v-model="password" @keyup.enter="signUp" /><br />
    <button @click="signUp">Registrovat</button>
    <p>Nebo můžeš zpátky na stránku s <router-link to="/login">přihlášením</router-link>.</p>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.replace("dashboard");
        })
        .catch(error => {
          alert("Ouha." + error.message);
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>
