import { createApp } from 'vue';
import router from '@/router';
import naive from 'naive-ui';
import twemoji from 'twemoji';
import { createPinia } from 'pinia';
import App from './App.vue';

import '@/assets/main.css';

const app = createApp(App);

app.directive('twemoji', {
  mounted(el) {
    // eslint-disable-next-line no-param-reassign
    el.innerHTML = twemoji.parse(el.innerHTML);
  },
});

const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(naive);

app.mount('#app');
