import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import * as firebase from "firebase/app";
import "firebase/auth";
import store from "./store";

Vue.config.productionTip = false;
let app = "";

const firebaseConfig = {
  apiKey: "AIzaSyBG_3aVehU10TfH9IU7cEyqdSyKh-dLW5k",
  authDomain: "vue-firebase-auth-81a6a.firebaseapp.com",
  databaseURL: "https://vue-firebase-auth-81a6a.firebaseio.com",
  projectId: "vue-firebase-auth-81a6a",
  storageBucket: "vue-firebase-auth-81a6a.appspot.com",
  messagingSenderId: "50684701218",
  appId: "1:50684701218:web:027df400880a959984f87b",
  measurementId: "G-NG0VYD03JD"
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function(user) {
  store.dispatch("fetchUser", user);
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
