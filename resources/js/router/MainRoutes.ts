const MainRoutes = {
  path: '/main',
  meta: {
    requiresAuth: true
  },
  redirect: '/main/dashboard/default',
  component: () => import('@/layouts/full/FullLayout.vue'),
  children: [
    {
      name: 'LandingPage',
      path: '',
      component: () => import('@/pages/dashboards/default/DefaultDashboard.vue')
    },
    {
      name: 'Default',
      path: 'dashboard/default',
      component: () => import('@/pages/dashboards/default/DefaultDashboard.vue')
    },
    {
      name: 'Starter',
      path: 'starter',
      component: () => import('@/pages/StarterPage.vue')
    },
    {
      name: 'Tabler Icons',
      path: 'icons/tabler',
      component: () => import('@/pages/utilities/icons/TablerIcons.vue')
    },
    {
      name: 'Material Icons',
      path: 'icons/material',
      component: () => import('@/pages/utilities/icons/MaterialIcons.vue')
    },
    {
      name: 'Typography',
      path: 'utils/typography',
      component: () => import('@/pages/utilities/typography/TypographyPage.vue')
    },
    {
      name: 'Shadows',
      path: 'utils/shadows',
      component: () => import('@/pages/utilities/shadows/ShadowPage.vue')
    },
    {
      name: 'Colors',
      path: 'utils/colors',
      component: () => import('@/pages/utilities/colors/ColorPage.vue')
    },
    {
      name: 'SuperAdminDashboard',
      path: '/super-admin/dashboard',
      component: () => import('@/pages/SuperAdmin/Dashboard.vue')
    },
    {
      name: 'SuperAdminPemilik',
      path: '/super-admin/manajemen-pemilik',
      component: () => import('@/pages/SuperAdmin/ManajemenPemilik/Index.vue')
    },
    {
      name: 'SuperAdminKos',
      path: '/super-admin/manajemen-kos',
      component: () => import('@/pages/SuperAdmin/ManajemenKos/Index.vue')
    },
    {
      name: 'SuperAdminFasilitas',
      path: '/super-admin/master-data/fasilitas',
      component: () => import('@/pages/SuperAdmin/MasterData/Fasilitas.vue')
    },
    {
      name: 'OwnerDashboard',
      path: '/owner/dashboard',
      component: () => import('@/pages/Pemilik/Dashboard.vue')
    },
    {
      name: 'OwnerKamar',
      path: '/owner/kelola-kamar',
      component: () => import('@/pages/Pemilik/KelolaKamar/Index.vue')
    },
    {
      name: 'OwnerPenyewa',
      path: '/owner/kelola-penyewa',
      component: () => import('@/pages/Pemilik/KelolaPenyewa/Index.vue')
    },
    {
      name: 'OwnerTagihan',
      path: '/owner/validasi-tagihan',
      component: () => import('@/pages/Pemilik/ValidasiTagihan.vue')
    },
    {
      name: 'TenantDashboard',
      path: '/tenant/dashboard',
      component: () => import('@/pages/Penyewa/Dashboard.vue')
    },
    {
      name: 'TenantTagihan',
      path: '/tenant/tagihan-saya',
      component: () => import('@/pages/Penyewa/TagihanSaya.vue')
    },
    {
      name: 'TenantProfil',
      path: '/tenant/profil',
      component: () => import('@/pages/Penyewa/Profil.vue')
    }
  ]
};

export default MainRoutes;
