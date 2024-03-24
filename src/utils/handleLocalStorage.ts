import { ref, watch } from 'vue';

export const handleLocalStorage = () => {
  const localStorageItems = localStorage.getItem('todos') || JSON.stringify([]);
  const parsedAndReffedItems = ref(JSON.parse(localStorageItems));

  watch(
    parsedAndReffedItems,
    (newValue) => {
      localStorage.setItem('todos', JSON.stringify(newValue));
    },
    { deep: true },
  );

  return parsedAndReffedItems;
};
