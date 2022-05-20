<template>
  <form class="login-form" @submit.prevent="onLogin">
    <h1>Login Page</h1>
    <div v-if="error">{{error}}</div>
    <label for="email">Email:</label>
    <input type="text" name="email" placeholder="enter email" v-model="email">
    <br>
    <label for="pass">Password:</label>
    <input type="text" name="pass" placeholder="enter password" v-model="password">
    <br>
    <input type="submit" value="Login">
  </form>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export default {
  data() {
    return{
      email: '',
      password: '',
      error: '',
      user: ''
    }
  },
  methods: {
      onLogin() {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, this.email, this.password)
          .then((userCredential) => {
            this.user = userCredential.user;
            this.$router.replace({ name: "home" });
          })
          .catch((error) => {
            this.error = error.message;
          });
    },
    
  }
}
</script>

<style>

</style>