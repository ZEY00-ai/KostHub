<script setup lang="ts">
withDefaults(defineProps<{
  label?: string;
  modelValue?: string | number;
  type?: string;
  placeholder?: string;
}>(), {
  label: 'Label',
  modelValue: '',
  type: 'text',
  placeholder: '',
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void;
}>();
</script>

<template>
  <v-text-field
    :label="label"
    :type="type"
    :placeholder="placeholder"
    :model-value="modelValue"
    @update:model-value="emit('update:modelValue', $event)"
    variant="outlined"
    density="comfortable"
  />
</template>
