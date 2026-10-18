<script setup lang="ts">
const props = withDefaults(defineProps<{
  modelValue?: boolean;
  title?: string;
  maxWidth?: number;
}>(), {
  modelValue: false,
  title: 'Dialog',
  maxWidth: 640,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();

const close = () => emit('update:modelValue', false);
</script>

<template>
  <v-dialog
    :model-value="props.modelValue"
    :max-width="props.maxWidth"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <v-card>
      <v-card-title class="d-flex justify-space-between align-center">
        {{ props.title }}
        <v-btn icon="mdi-close" variant="text" @click="close" />
      </v-card-title>
      <v-card-text>
        <slot />
      </v-card-text>
      <v-card-actions>
        <slot name="actions" />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
