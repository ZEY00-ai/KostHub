<script setup lang="ts">
import OwnerLayout from '@/layouts/owner/OwnerLayout.vue';

const headers = [
  { title: 'Nama', key: 'name' },
  { title: 'Kamar', key: 'room' },
  { title: 'Durasi', key: 'duration' },
  { title: 'Status', key: 'status' },
  { title: 'Aksi', key: 'actions' },
];

const items = [
  { name: 'Ahmad', room: 'A-102', duration: '6 bulan', status: 'Aktif' },
  { name: 'Rosa', room: 'B-205', duration: '12 bulan', status: 'Aktif' },
  { name: 'Dian', room: 'C-305', duration: '3 bulan', status: 'Menunggu' },
];
</script>

<template>
  <OwnerLayout>
    <v-card>
      <v-card-title class="d-flex justify-space-between align-center">
        <span>Kelola Penyewa</span>
        <v-btn color="primary">Tambah Penyewa</v-btn>
      </v-card-title>
      <v-card-text>
        <v-data-table :headers="headers" :items="items" hide-default-footer>
          <template #item.actions>
            <v-btn icon="mdi-eye" variant="text" size="small" />
            <v-btn icon="mdi-pencil" variant="text" size="small" />
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </OwnerLayout>
</template>
