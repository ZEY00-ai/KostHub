<script setup lang="ts">
import AdminLayout from '@/layouts/admin/AdminLayout.vue';

const facilities = ['WiFi', 'Parkir Motor', 'Parkir Mobil', 'Laundry', 'Air Panas', 'Dapur Bersama'];
</script>

<template>
  <AdminLayout>
    <v-card>
      <v-card-title class="d-flex justify-space-between align-center">
        <span>Master Data Fasilitas</span>
        <v-btn color="primary">Tambah Fasilitas</v-btn>
      </v-card-title>

      <v-card-text>
        <v-row>
          <v-col v-for="facility in facilities" :key="facility" cols="12" md="4">
            <v-card variant="outlined">
              <v-card-text class="d-flex justify-space-between align-center">
                <span>{{ facility }}</span>
                <div>
                  <v-btn icon="mdi-pencil" variant="text" size="small" />
                  <v-btn icon="mdi-delete" variant="text" size="small" color="error" />
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </AdminLayout>
</template>
