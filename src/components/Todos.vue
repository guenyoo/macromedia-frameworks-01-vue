<script setup lang="ts">
import { ref, computed } from 'vue';
import { type TodoProps } from './Todo.vue';
import TodoList from './TodoList.vue';
import { toggleCompleted } from '@/utils/toggleCompleted';

const todos = ref([
  { name: 'todo1', id: 'todo1', completed: false },
  { name: 'todo2', id: 'todo2', completed: false },
  { name: 'todo3', id: 'todo3', completed: false },
]);

const openTodos = computed<TodoProps[]>(() =>
  todos.value.filter((todo) => !todo.completed),
);
const completedTodos = computed<TodoProps[]>(() =>
  todos.value.filter((todo) => todo.completed),
);

function toggleCompletedTodos(id: string) {
  toggleCompleted(todos, id);
}
</script>

<template>
  <section class="grid gap-4">
    <h2 class="text-5xl">My ToDos</h2>
    <TodoList
      :todoList="openTodos"
      name="Open Todos"
      @toggleCompleted="toggleCompletedTodos"
    />
    <TodoList
      :todoList="completedTodos"
      name="Completed Todos"
      @toggleCompleted="toggleCompletedTodos"
    />
  </section>
</template>
