import { createApp } from 'vue';
import './style.css';
import './assets/styles.scss';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.min.css'; // CSS de Bootstrap
import 'bootstrap'; // JS de Bootstrap
import '@fortawesome/fontawesome-free/css/all.css';


createApp(App).use(router).mount('#app');