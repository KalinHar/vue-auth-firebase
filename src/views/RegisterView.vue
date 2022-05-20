<template>
  <form class="register-form" @submit.prevent="onRegister">
    <h1>Register Page</h1>
    <div v-if="error">{{error}}</div>
    <label for="email">Email:</label>
    <input type="text" name="email" placeholder="enter email" v-model="email">
    <br>
    <label for="pass">Password:</label>
    <input type="text" name="pass" placeholder="enter password" v-model="password">
    <br>
    <input type="submit" value="Register">
  </form>
  
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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
    onRegister() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          this.user = userCredential.user;
          this.$router.replace({ name: "home" });
        })
        .catch((error) => {
          this.error = error.message;
        });
    }
  }
}
</script>

<style>

</style>