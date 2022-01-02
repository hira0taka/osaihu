import App from './App.vue'
import { createApp } from 'vue'
import { router } from './router'
import { store } from './store.js'

var app = createApp(App)
app.use(router)
app.mount('#app')
app.use(store)