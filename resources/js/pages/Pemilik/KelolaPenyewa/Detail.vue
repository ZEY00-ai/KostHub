<script setup lang="ts">
import OwnerLayout from '@/layouts/owner/OwnerLayout.vue';
</script>

<template>
  <OwnerLayout>
    <v-card>
      <v-card-title>Detail Sewa Penyewa</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <v-list density="comfortable">
              <v-list-item title="Nama" subtitle="Ahmad" />
              <v-list-item title="Kamar" subtitle="A-102" />
              <v-list-item title="Masa Sewa" subtitle="6 bulan" />
            </v-list>
          </v-col>
          <v-col cols="12" md="6">
            <v-list density="comfortable">
              <v-list-item title="Nomor HP" subtitle="0812-3456-7890" />
              <v-list-item title="Status" subtitle="Aktif" />
              <v-list-item title="Catatan" subtitle="Pembayaran rutin dan tepat waktu" />
            </v-list>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </OwnerLayout>
</template>
