import { createRouter, createWebHistory } from 'vue-router';

import GetStarted from '@/views/GetStartedView.vue';
import GameView from '@/views/GameView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'GetStarted',
      component: GetStarted,
    },
    {
      path: '/play',
      name: 'GameView',
      component: GameView,
    },
  ],
});

export default router;
