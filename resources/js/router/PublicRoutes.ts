const PublicRoutes = {
  path: '/',
  component: () => import('@/layouts/blank/BlankLayout.vue'),
  meta: {
    requiresAuth: false
  },
  children: [
    {
      path: '',
      redirect: '/login'
    },
    {
      name: 'Authentication',
      path: '/login',
      component: () => import('@/pages/authentication/LoginPage.vue')
    },
    {
      name: 'Login',
      path: '/login1',
      component: () => import('@/pages/authentication/auth/LoginPage.vue')
    },
    {
      name: 'Register',
      path: '/register',
      component: () => import('@/pages/authentication/auth/RegisterPage.vue')
    },
    {
      name: 'Error 404',
      path: '/error',
      component: () => import('@/pages/pages/maintenance/error/Error404Page.vue')
    }
  ]
};

export default PublicRoutes;
