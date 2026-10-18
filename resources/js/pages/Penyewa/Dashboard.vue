<script setup lang="ts">
import TenantLayout from '@/layouts/tenant/TenantLayout.vue';
</script>

<template>
  <TenantLayout>
    <v-row>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>Info Kamar</v-card-title>
          <v-card-text>
            <p class="text-h6">A-102</p>
            <p class="text-body-2">Kamar Putra • 6 bulan tersisa</p>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>Tagihan Terdekat</v-card-title>
          <v-card-text>
            <p class="text-h6">Rp 950.000</p>
            <p class="text-body-2">Jatuh tempo 12 Agustus 2026</p>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>Durasi Sewa</v-card-title>
          <v-card-text>
            <p class="text-h6">6 bulan</p>
            <p class="text-body-2">Sisa masa sewa 18 minggu</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </TenantLayout>
</template>
