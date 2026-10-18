<script setup lang="ts">
import OwnerLayout from '@/layouts/owner/OwnerLayout.vue';

const bills = [
  { name: 'Ahmad', month: 'Juli 2026', amount: 'Rp 950.000', status: 'Menunggu Verifikasi' },
  { name: 'Rosa', month: 'Juli 2026', amount: 'Rp 1.150.000', status: 'Menunggu Verifikasi' },
  { name: 'Dian', month: 'Juli 2026', amount: 'Rp 1.050.000', status: 'Ditolak' },
];
</script>

<template>
  <OwnerLayout>
    <v-card>
      <v-card-title>Validasi Tagihan</v-card-title>
      <v-card-text>
        <v-list lines="two">
          <v-list-item v-for="bill in bills" :key="bill.name">
            <v-list-item-title>{{ bill.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ bill.month }} • {{ bill.amount }}</v-list-item-subtitle>
            <template #append>
              <div class="d-flex align-center gap-2">
                <v-chip color="warning" size="small">{{ bill.status }}</v-chip>
                <v-btn icon="mdi-eye" variant="text" size="small" />
                <v-btn icon="mdi-check" variant="text" color="success" size="small" />
              </div>
            </template>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </OwnerLayout>
</template>
