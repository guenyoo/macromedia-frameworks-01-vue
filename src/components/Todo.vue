<script setup lang="ts">
import ArchiveIcon from '@/assets/archive-icon.svg?component';

export type TodoProps = { name: string; id: string; completed: boolean };
const { name, id, completed } = defineProps<TodoProps>();
</script>

<template>
  <div class="grid grid-flow-col auto-cols-max gap-4 place-items-center">
    <input
      type="checkbox"
      :id="id"
      :name="id"
      :checked="completed"
      @change="$emit('toggleCompleted', id)"
    />
    <label :for="id">{{ name }}</label>
    <button @click="$emit('archiveTodo', id)">
      <ArchiveIcon class="size-5" />
    </button>
  </div>
</template>
