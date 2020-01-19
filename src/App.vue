<template>
  <div id="app">
    <navbar></navbar>
    <router-view />
  </div>
</template>
<script>
import navbar from "./components/Navbar";
export default {
  components: {
    navbar
  },
  data() {
    return {
      user: null,
      email: null
    };
  }
};
</script>

<style lang="scss">
@tailwind base;

@tailwind components;

@tailwind utilities;
</style>
