<template>
  <div class="home">
    <h1>home</h1>
    <div>{{user}}</div>
    <button v-if="user" @click="onLogout">Logout</button>
  </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";

export default {
  
  data() {
    const auth = getAuth();
    const user = auth.currentUser

    return {
      error: '',
      user
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
