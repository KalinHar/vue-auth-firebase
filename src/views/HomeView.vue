<template>
  <div class="home">
    <h1>home</h1>
    <div>{{error}}</div>
    <button @click="onLogout">Logout</button>
  </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";

export default {
  
  data() {
    return {
      error: '',
      user: '4'
    } 
  },
  methods: {
    onLogout() {
      const auth = getAuth();
      signOut(auth).then(() => {
        this.$router.replace({ name: "login" });
      }).catch((error) => {
        this.error = error.message
      });
    }
  }
}
</script>
