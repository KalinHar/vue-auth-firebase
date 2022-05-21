<template>
  <div class="chat-box">
    <h1>Welcome, {{ state.username }}</h1>
    <div 
      v-for="message in state.messages" 
      :key="message.key" 
      :class="(message.username == state.username ? 'message current-user' : 'message')">
      <div class="message-inner">
        <div class="username">{{ message.username }}</div>
        <div class="content">{{ message.content }}</div>
      </div>
    </div>
    <form @submit.prevent="SendMessage">
      <input 
        type="text" 
        v-model="inputMessage" 
        placeholder="Write a message..." />
      <input 
        type="submit" 
        value="Send" />
    </form>
  </div>
</template>

<script>
import db from '@/db'
import { getAuth } from "firebase/auth";
import { reactive, onMounted, ref } from 'vue';

export default {
  setup() {
    const inputUsername = ref("");
    const inputMessage = ref("");
    const state = reactive({
      username: "",
      messages: []
    });

    const SendMessage = () => {
      const messagesRef = db.database().ref("messages");
      if (inputMessage.value === "" || inputMessage.value === null) {
        return;
      }
      const message = {
        username: state.username,
        content: inputMessage.value
      }
      messagesRef.push(message);
      inputMessage.value = "";
    }

    onMounted(() => {
      const messagesRef = db.database().ref("messages");
      messagesRef.on('value', snapshot => {
        const data = snapshot.val();
        let messages = [];
        Object.keys(data).forEach(key => {
          messages.push({
            id: key,
            username: data[key].username,
            content: data[key].content
          });
        });
        state.messages = messages;
      });
    });

    return {
      inputUsername,
      // Login,
      state,
      inputMessage,
      SendMessage,
      // Logout
    }

  }
}
</script>

