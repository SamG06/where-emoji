import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'GetStarted',
      component: () => import('@/views/GetStartedView.vue'),
    },
    {
      path: '/play',
      name: 'GameView',
      component: () => import('@/views/GameView.vue'),
    },
  ],
});

export default router;
