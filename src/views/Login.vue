<template>
  <div class="login">
    <h3>Přihlášení</h3>
    <input type="text" placeholder="email" v-model="email" /><br />
    <input type="password" placeholder="password" v-model="password" @keyup.enter="login" /><br />
    <button @click="login">Přihlásit</button>
    <p>Nemáte účet? Můžete si ho <router-link to="/sign-up">vytvořit</router-link></p>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          //alert("Jsi přihlášen.");
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
