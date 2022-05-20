import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import { getAuth } from 'firebase/auth'
import db from './db'

// const auth = getAuth(db)

// export { auth }

createApp(App).use(router).mount('#app')
