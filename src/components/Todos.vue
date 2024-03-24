<script setup lang="ts">
import { ref, computed } from 'vue';
import clsx from 'clsx';
import { v4 as uuidv4 } from 'uuid';
import { type TodoProps } from './Todo.vue';
import TodoList from './TodoList.vue';
import { toggleCompleted } from '@/utils/toggleCompleted';
import { handleLocalStorage } from '@/utils/handleLocalStorage';

const inputText = ref('');
const isDisabled = computed(() => inputText.value.trim().length === 0);

const todos = handleLocalStorage();

const openTodos = computed<TodoProps[]>(() =>
  todos.value.filter((todo: TodoProps) => !todo.completed),
);
const completedTodos = computed<TodoProps[]>(() =>
  todos.value.filter((todo: TodoProps) => todo.completed),
);

function toggleCompletedTodos(id: string) {
  toggleCompleted(todos, id);
}

function createNewTodo() {
  const newTodos = [
    ...todos.value,
    { name: inputText.value, id: uuidv4(), completed: false },
  ];

  todos.value = newTodos;
  inputText.value = '';
}

function archiveTodo(id: string) {
  const newTodos = todos.value.filter((todo: TodoProps) => todo.id !== id);
  todos.value = newTodos;
}
</script>

<template>
  <section class="grid gap-4 place-items-center">
    <h2 class="text-5xl">My ToDo's</h2>
    <section class="grid grid-cols-1 gap-4">
      <h3 class="text-3xl">Add ToDos</h3>
      <input
        class="py-2 px-2 peer border border-neutral-300 rounded"
        type="text"
        placeholder="Todo Name"
        v-model="inputText"
      />
      <button
        :class="
          clsx(
            isDisabled
              ? 'peer-disabled:bg-gray-200 border border-neutral-300 rounded bg-neutral-200 text-neutral-400'
              : 'bg-teal-300',
            'text-black py-3 transition-colors rounded',
          )
        "
        :disabled="isDisabled"
        @click="createNewTodo"
      >
        Todo hinzufügen
      </button>
    </section>
    <TodoList
      :todoList="openTodos"
      name="Open Todos"
      @toggleCompleted="toggleCompletedTodos"
      @archiveTodo="archiveTodo"
    />
    <TodoList
      :todoList="completedTodos"
      name="Completed Todos"
      @toggleCompleted="toggleCompletedTodos"
      @archiveTodo="archiveTodo"
    />
  </section>
</template>
