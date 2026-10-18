<script setup lang="ts">
import AdminLayout from '@/layouts/admin/AdminLayout.vue';
import StatusBadge from '@/components/ui/StatusBadge.vue';

const headers = [
  { title: 'Nama', key: 'name' },
  { title: 'Email', key: 'email' },
  { title: 'Kos', key: 'property' },
  { title: 'Status', key: 'status' },
  { title: 'Aksi', key: 'actions' },
];

const items = [
  { name: 'Rina Wijaya', email: 'rina@kosthub.id', property: 'Kost Melati', status: 'Aktif' },
  { name: 'Budi Santoso', email: 'budi@kosthub.id', property: 'Kost Satria', status: 'Menunggu' },
  { name: 'Nia Ramadhani', email: 'nia@kosthub.id', property: 'Kost Harmoni', status: 'Ditolak' },
];
</script>

<template>
  <AdminLayout>
    <v-card>
      <v-card-title class="d-flex justify-space-between align-center">
        <span>Manajemen Akun Pemilik</span>
        <v-btn color="primary">Tambah Pemilik</v-btn>
      </v-card-title>

      <v-card-text>
        <v-data-table :headers="headers" :items="items" hide-default-footer>
          <template #item.status="{ item }">
            <StatusBadge :status="item.status" />
          </template>

          <template #item.actions>
            <v-btn icon="mdi-pencil" variant="text" size="small" />
            <v-btn icon="mdi-delete" variant="text" size="small" color="error" />
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </AdminLayout>
</template>
