<script setup lang="ts">
import AdminLayout from '@/layouts/admin/AdminLayout.vue';

const headers = [
  { title: 'Nama Kos', key: 'name' },
  { title: 'Alamat', key: 'address' },
  { title: 'Pemilik', key: 'owner' },
  { title: 'Jumlah Kamar', key: 'rooms' },
  { title: 'Status', key: 'status' },
];

const items = [
  { name: 'Kost Melati', address: 'Jl. Merdeka No. 12', owner: 'Rina Wijaya', rooms: 24, status: 'Aktif' },
  { name: 'Kost Satria', address: 'Jl. Sudirman No. 8', owner: 'Budi Santoso', rooms: 18, status: 'Aktif' },
  { name: 'Kost Harmoni', address: 'Jl. Merpati No. 5', owner: 'Nia Ramadhani', rooms: 12, status: 'Pending' },
];
</script>

<template>
  <AdminLayout>
    <v-card>
      <v-card-title>Manajemen Kos & Bangunan</v-card-title>
      <v-card-text>
        <v-data-table :headers="headers" :items="items" hide-default-footer />
      </v-card-text>
    </v-card>
  </AdminLayout>
</template>
