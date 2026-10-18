import { createRouter, createWebHistory } from 'vue-router';
import MainRoutes from './MainRoutes';
import PublicRoutes from './PublicRoutes';
import { useAuthStore } from '@/stores/auth';

export const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/pages/pages/maintenance/error/Error404Page.vue')
    },
    MainRoutes,
    PublicRoutes
  ]
});

router.beforeEach((to) => {
  const auth = useAuthStore();
  const authRequired = to.matched.some((record) => record.meta.requiresAuth === true);

  if (authRequired && !auth.user) {
    auth.returnUrl = to.fullPath;
    return '/login';
  }
});
