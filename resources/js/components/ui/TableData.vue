<script setup lang="ts">
withDefaults(defineProps<{
  headers?: Array<Record<string, string | boolean | number>>;
  items?: Array<Record<string, unknown>>;
}>(), {
  headers: () => [],
  items: () => [],
});
</script>

<template>
  <v-data-table :headers="headers" :items="items" class="elevation-0" hide-default-footer />
</template>
