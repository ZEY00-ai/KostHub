<script setup lang="ts">
const menus = [
  { title: 'Dashboard', to: '/super-admin/dashboard' },
  { title: 'Manajemen Pemilik', to: '/super-admin/manajemen-pemilik' },
  { title: 'Manajemen Kos', to: '/super-admin/manajemen-kos' },
  { title: 'Master Data', to: '/super-admin/master-data/fasilitas' },
];
</script>

<template>
  <v-app>
    <v-navigation-drawer permanent width="260">
      <v-list density="comfortable" nav>
        <v-list-item>
          <template #prepend>
            <v-icon icon="mdi-shield-account" />
          </template>
          <v-list-item-title class="text-h6">
            KostHub Admin
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
