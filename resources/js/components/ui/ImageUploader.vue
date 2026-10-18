<script setup lang="ts">
import { ref } from 'vue';

const props = withDefaults(defineProps<{
  label?: string;
}>(), {
  label: 'Upload gambar',
});

const selected = ref<File | null>(null);

const onChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  selected.value = target.files?.[0] ?? null;
};
</script>

<template>
  <div>
    <v-file-input
      :label="props.label"
      prepend-icon="mdi-paperclip"
      variant="outlined"
      density="comfortable"
      @change="onChange"
    />
    <div v-if="selected" class="text-caption text-medium-emphasis">
      File terpilih: {{ selected.name }}
    </div>
  </div>
</template>
