import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './routes'
import AppLayout from '@/layouts/AppLayout.vue'

createApp(App).use(router).component('AppLayout', AppLayout).mount('#app')
