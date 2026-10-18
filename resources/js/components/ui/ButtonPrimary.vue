<script setup lang="ts">
withDefaults(defineProps<{
  label?: string;
  disabled?: boolean;
}>(), {
  label: 'Simpan',
  disabled: false,
});

const emit = defineEmits<{
  (e: 'click'): void;
}>();
</script>

<template>
  <v-btn
    color="primary"
    :disabled="disabled"
    v-bind="$attrs"
    @click="emit('click')"
  >
    {{ label }}
  </v-btn>
</template>
