<script setup lang="ts">
import AdminLayout from '@/layouts/admin/AdminLayout.vue';
import TextInput from '@/components/ui/TextInput.vue';
import ButtonPrimary from '@/components/ui/ButtonPrimary.vue';
</script>

<template>
  <AdminLayout>
    <v-card max-width="760" class="mx-auto">
      <v-card-title>Form Akun Pemilik</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <TextInput label="Nama Lengkap" />
          </v-col>
          <v-col cols="12" md="6">
            <TextInput label="Email" type="email" />
          </v-col>
          <v-col cols="12" md="6">
            <TextInput label="Nomor HP" />
          </v-col>
          <v-col cols="12" md="6">
            <TextInput label="Password" type="password" />
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn variant="text">Batal</v-btn>
        <ButtonPrimary label="Simpan" />
      </v-card-actions>
    </v-card>
  </AdminLayout>
</template>
