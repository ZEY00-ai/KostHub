<script setup lang="ts">
import OwnerLayout from '@/layouts/owner/OwnerLayout.vue';

const headers = [
  { title: 'Nama Kamar', key: 'name' },
  { title: 'Tipe', key: 'type' },
  { title: 'Harga', key: 'price' },
  { title: 'Status', key: 'status' },
  { title: 'Aksi', key: 'actions' },
];

const items = [
  { name: 'A-101', type: 'Kamar Putri', price: 'Rp 950.000', status: 'Tersedia' },
  { name: 'A-102', type: 'Kamar Putra', price: 'Rp 1.150.000', status: 'Terisi' },
  { name: 'B-205', type: 'Kamar Putri', price: 'Rp 1.050.000', status: 'Tersedia' },
];
</script>

<template>
  <OwnerLayout>
    <v-card>
      <v-card-title class="d-flex justify-space-between align-center">
        <span>Kelola Kamar</span>
        <v-btn color="primary">Tambah Kamar</v-btn>
      </v-card-title>
      <v-card-text>
        <v-data-table :headers="headers" :items="items" hide-default-footer>
          <template #item.actions>
            <v-btn icon="mdi-pencil" variant="text" size="small" />
            <v-btn icon="mdi-delete" variant="text" size="small" color="error" />
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </OwnerLayout>
</template>
