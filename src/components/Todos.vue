<script setup lang="ts">
import Todo, { type TodoProps } from './Todo.vue';
import { ref, computed } from 'vue';

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

function toggleCompleted(id: string) {
  const todoToChange = todos.value.find((todo) => todo.id === id);
  todoToChange!.completed = !todoToChange?.completed;
}
</script>

<template>
  <h2>My ToDos</h2>
  <h3>Open ToDos</h3>
  <ul>
    <li v-for="todo in openTodos">
      <Todo
        :key="todo.id"
        :name="todo.name"
        :id="todo.id"
        :completed="todo.completed"
        @toggleCompleted="toggleCompleted"
      />
    </li>
  </ul>
  <h3>Completed Todos</h3>
  <ul>
    <li v-for="todo in completedTodos">
      <Todo
        :key="todo.id"
        :name="todo.name"
        :id="todo.id"
        :completed="todo.completed"
        @toggleCompleted="toggleCompleted"
      />
    </li>
  </ul>
</template>
