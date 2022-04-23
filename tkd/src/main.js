import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import prismic from './prismic'

const app = createApp(App)

app.use(router).use(prismic)

app.mount('#app')
