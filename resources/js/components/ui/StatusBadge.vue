<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  status: string;
}>();

const palette: Record<string, string> = {
  aktif: 'success',
  lunas: 'success',
  menunggu: 'warning',
  pending: 'warning',
  ditolak: 'error',
  belum: 'error',
  default: 'secondary',
};

const color = computed(() => palette[props.status.toLowerCase()] ?? palette.default);
</script>

<template>
  <v-chip :color="color" size="small" variant="tonal">
    {{ status }}
  </v-chip>
</template>
