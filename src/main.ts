import { createApp } from 'vue'
import router from './router/router';

import App from './App.vue'
import '@/assets/scss/styles.scss';
const app = createApp(App)
    app.use(router)
app.mount('#app')
