import type { Ref } from 'vue';
import type { TodoProps } from '@/components/Todo.vue';

export function toggleCompleted(todos: Ref<TodoProps[]>, id: string) {
  const todoToChange = todos.value.find((todo) => todo.id === id);
  todoToChange!.completed = !todoToChange?.completed;
}
