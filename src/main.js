import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './routes'
import AppLayout from '@/layouts/AppLayout.vue'
import VueScrollTo from 'vue-scrollto'

createApp(App).use(router).use(VueScrollTo).component('AppLayout', AppLayout).mount('#app')
