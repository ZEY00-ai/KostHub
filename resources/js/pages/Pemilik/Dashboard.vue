<script setup lang="ts">
import OwnerLayout from '@/layouts/owner/OwnerLayout.vue';

const stats = [
  { label: 'Kamar Kosong', value: '12', color: 'success' },
  { label: 'Kamar Terisi', value: '48', color: 'primary' },
  { label: 'Tagihan Menunggu', value: '7', color: 'warning' },
  { label: 'Pendapatan Bulan Ini', value: 'Rp 18.4Jt', color: 'info' },
];
</script>

<template>
  <OwnerLayout>
    <v-row>
      <v-col v-for="stat in stats" :key="stat.label" cols="12" md="3">
        <v-card>
          <v-card-text>
            <div class="text-caption text-medium-emphasis">{{ stat.label }}</div>
            <div class="text-h4 font-weight-bold mt-2">{{ stat.value }}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-2">
      <v-col cols="12" lg="7">
        <v-card>
          <v-card-title>Ringkasan Properti</v-card-title>
          <v-card-text>
            <v-list density="comfortable">
              <v-list-item title="Kost Melati" subtitle="24 kamar • 18 terisi" />
              <v-list-item title="Kost Satria" subtitle="18 kamar • 16 terisi" />
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" lg="5">
        <v-card>
          <v-card-title>Notifikasi</v-card-title>
          <v-card-text>
            <v-alert type="warning" variant="tonal">3 bukti transfer menunggu validasi.</v-alert>
            <v-alert type="info" variant="tonal">Jatuh tempo tagihan hari Senin.</v-alert>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </OwnerLayout>
</template>
