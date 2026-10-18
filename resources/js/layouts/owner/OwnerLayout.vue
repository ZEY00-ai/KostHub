<script setup lang="ts">
const menus = [
  { title: 'Dashboard', to: '/owner/dashboard' },
  { title: 'Kelola Kamar', to: '/owner/kelola-kamar' },
  { title: 'Kelola Penyewa', to: '/owner/kelola-penyewa' },
  { title: 'Validasi Tagihan', to: '/owner/validasi-tagihan' },
];
</script>

<template>
  <v-app>
    <v-navigation-drawer permanent width="260">
      <v-list density="comfortable" nav>
        <v-list-item>
          <template #prepend>
            <v-icon icon="mdi-home-city" />
          </template>
          <v-list-item-title class="text-h6">
            Pemilik Kos
          </v-list-item-title>
        </v-list-item>

        <v-divider class="my-2" />

        <v-list-item
          v-for="item in menus"
          :key="item.title"
          :to="item.to"
          link
        >
          <template #prepend>
            <v-icon icon="mdi-chevron-right" size="18" />
          </template>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="bg-grey-lighten-4">
      <v-container fluid class="pa-6">
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>
