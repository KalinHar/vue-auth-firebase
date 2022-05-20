// import firebase from "firebase/app";
import { initializeApp } from 'firebase/app';
import "firebase/database";

const config = {
  apiKey: "AIzaSyAcT7yptdPBg8vke8BkaylirG-3qvF-tV8",
  authDomain: "freechat-11aba.firebaseapp.com",
  projectId: "freechat-11aba",
  storageBucket: "freechat-11aba.appspot.com",
  messagingSenderId: "838291377352",
  appId: "1:838291377352:web:c17294b61b86cd8136e9fd"
}

const db = initializeApp(config);
export default db;