<script setup lang="ts">
import AdminLayout from '@/layouts/admin/AdminLayout.vue';

const stats = [
  { label: 'Total Kos', value: '128', color: 'primary' },
  { label: 'Kamar Aktif', value: '2.460', color: 'success' },
  { label: 'Penyewa Aktif', value: '1.870', color: 'info' },
  { label: 'Tagihan Belum Bayar', value: '146', color: 'warning' },
];
</script>

<template>
  <AdminLayout>
    <v-row class="mb-4">
      <v-col v-for="stat in stats" :key="stat.label" cols="12" md="3">
        <v-card class="h-100">
          <v-card-text>
            <div class="text-caption text-medium-emphasis">{{ stat.label }}</div>
            <div class="text-h4 font-weight-bold mt-2">{{ stat.value }}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" lg="8">
        <v-card>
          <v-card-title>Grafik Pertumbuhan</v-card-title>
          <v-card-text>
            <div class="d-flex align-center justify-center py-8 text-medium-emphasis">
              Area chart placeholder untuk pertumbuhan kos dan penyewa.
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" lg="4">
        <v-card>
          <v-card-title>Aktivitas Terbaru</v-card-title>
          <v-card-text>
            <v-list density="compact">
              <v-list-item title="Pemilik baru mendaftar" subtitle="2 jam yang lalu" />
              <v-list-item title="Tagihan verifikasi masuk" subtitle="4 jam yang lalu" />
              <v-list-item title="Kamar baru ditambahkan" subtitle="Hari ini" />
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </AdminLayout>
</template>
