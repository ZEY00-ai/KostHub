<script setup lang="ts">
import TenantLayout from '@/layouts/tenant/TenantLayout.vue';
import ImageUploader from '@/components/ui/ImageUploader.vue';
import TextInput from '@/components/ui/TextInput.vue';
import ButtonPrimary from '@/components/ui/ButtonPrimary.vue';
</script>

<template>
  <TenantLayout>
    <v-card max-width="780" class="mx-auto">
      <v-card-title>Profil Saya</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="4">
            <ImageUploader label="Foto profil" />
          </v-col>
          <v-col cols="12" md="8">
            <v-row>
              <v-col cols="12" md="6">
                <TextInput label="Nama Lengkap" model-value="Ahmad Santoso" />
              </v-col>
              <v-col cols="12" md="6">
                <TextInput label="Nomor HP" model-value="0812-3456-7890" />
              </v-col>
              <v-col cols="12">
                <TextInput label="Password Baru" type="password" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn variant="text">Batal</v-btn>
        <ButtonPrimary label="Simpan" />
      </v-card-actions>
    </v-card>
  </TenantLayout>
</template>
