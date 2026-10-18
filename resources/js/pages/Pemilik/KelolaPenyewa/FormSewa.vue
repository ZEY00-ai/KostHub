<script setup lang="ts">
import OwnerLayout from '@/layouts/owner/OwnerLayout.vue';
import TextInput from '@/components/ui/TextInput.vue';
import ButtonPrimary from '@/components/ui/ButtonPrimary.vue';
</script>

<template>
  <OwnerLayout>
    <v-card max-width="900" class="mx-auto">
      <v-card-title>Form Sewa</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <TextInput label="Nama Penyewa" />
          </v-col>
          <v-col cols="12" md="6">
            <TextInput label="Email" type="email" />
          </v-col>
          <v-col cols="12" md="6">
            <v-select label="Pilih Kamar" :items="['A-101', 'A-102', 'B-205']" variant="outlined" />
          </v-col>
          <v-col cols="12" md="6">
            <TextInput label="Durasi Sewa (bulan)" />
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
