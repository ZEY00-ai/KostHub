<script setup lang="ts">
import TenantLayout from '@/layouts/tenant/TenantLayout.vue';
import StatusBadge from '@/components/ui/StatusBadge.vue';

const bills = [
  { month: 'Juli 2026', amount: 'Rp 950.000', status: 'Belum Bayar' },
  { month: 'Juni 2026', amount: 'Rp 950.000', status: 'Lunas' },
  { month: 'Mei 2026', amount: 'Rp 950.000', status: 'Menunggu Verifikasi' },
];
</script>

<template>
  <TenantLayout>
    <v-card>
      <v-card-title>Tagihan Saya</v-card-title>
      <v-card-text>
        <v-list lines="two">
          <v-list-item v-for="bill in bills" :key="bill.month">
            <v-list-item-title>{{ bill.month }}</v-list-item-title>
            <v-list-item-subtitle>{{ bill.amount }}</v-list-item-subtitle>
            <template #append>
              <div class="d-flex align-center gap-2">
                <StatusBadge :status="bill.status" />
                <v-btn size="small" color="primary" variant="tonal">Upload Bukti</v-btn>
              </div>
            </template>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </TenantLayout>
</template>
