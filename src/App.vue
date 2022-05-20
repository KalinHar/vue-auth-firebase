<template>
  <nav>
    <div v-if="user">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> 
    </div>
    <div v-else>
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link>
    </div>
    <!-- <h1>{{  }} </h1> -->
  </nav>
  <router-view/>
</template>

<script>
import { getAuth } from "firebase/auth";
import { onMounted, onChange } from 'vue';


export default {

  setup() {
    let user = ''

    onMounted(() => {
      const auth = getAuth();
      const data = auth.currentUser;

      if (data) {
        user = data
      } else {
        user = ''
      }
    });

    

    return {
      user,
    }
  },
  
  
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
