<script setup lang="ts">
const menus = [
  { title: 'Dashboard', to: '/tenant/dashboard' },
  { title: 'Tagihan Saya', to: '/tenant/tagihan-saya' },
  { title: 'Profil', to: '/tenant/profil' },
];
</script>

<template>
  <v-app>
    <v-app-bar color="primary" flat>
      <v-app-bar-title>KostHub Tenant</v-app-bar-title>
      <v-spacer />
      <v-btn variant="text" to="/tenant/dashboard">Dashboard</v-btn>
      <v-btn variant="text" to="/tenant/tagihan-saya">Tagihan</v-btn>
      <v-btn variant="text" to="/tenant/profil">Profil</v-btn>
    </v-app-bar>

    <v-main class="bg-grey-lighten-4 pt-16">
      <v-container fluid class="pa-6">
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>
