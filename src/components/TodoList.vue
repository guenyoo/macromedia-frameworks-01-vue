<script setup lang="ts">
import Todo, { type TodoProps } from '@/components/Todo.vue';

interface TodoList {
  todoList: TodoProps[];
  name: string;
}
const { todoList, name } = defineProps<TodoList>();

defineEmits(['toggleCompleted']);
</script>

<template>
  <h3 class="text-3xl">{{ name }}</h3>
  <ul>
    <li v-for="todo in todoList">
      <Todo
        :key="todo.id"
        :name="todo.name"
        :id="todo.id"
        :completed="todo.completed"
        @toggleCompleted="$emit('toggleCompleted', todo.id)"
      />
    </li>
  </ul>
</template>
