<script setup lang="ts">
import OwnerLayout from '@/layouts/owner/OwnerLayout.vue';
import TextInput from '@/components/ui/TextInput.vue';
import ButtonPrimary from '@/components/ui/ButtonPrimary.vue';
</script>

<template>
  <OwnerLayout>
    <v-card max-width="900" class="mx-auto">
      <v-card-title>Form Kamar Baru</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <TextInput label="Nama Kamar" />
          </v-col>
          <v-col cols="12" md="6">
            <TextInput label="Harga Sewa" />
          </v-col>
          <v-col cols="12" md="6">
            <v-select label="Tipe Pembayaran" :items="['Bulanan', 'Tahunan']" variant="outlined" />
          </v-col>
          <v-col cols="12" md="6">
            <v-select label="Tipe Kamar" :items="['Putra', 'Putri', 'Campur']" variant="outlined" />
          </v-col>
          <v-col cols="12">
            <v-checkbox label="WiFi" hide-details />
            <v-checkbox label="Parkir Motor" hide-details />
            <v-checkbox label="Laundry" hide-details />
            <v-checkbox label="Air Panas" hide-details />
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn variant="text">Batal</v-btn>
        <ButtonPrimary label="Simpan" />
      </v-card-actions>
    </v-card>
  </OwnerLayout>
</template>
