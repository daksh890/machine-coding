<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

type Todo = {
  id: number
  title: string
  completed: boolean
}

// Props from parent
const props = defineProps<{
  todos: Todo[]
}>()

// Events to parent
const emit = defineEmits(["toggle", "delete"]);

function toggleTodo(id: number) {
  emit('toggle', id)
}

function deleteTodo(id: number) {
  emit('delete', id)
}
</script>

<template>
  <ul>
    <li
      v-for="todo in todos"
      :key="todo.id"
      :class="{ completed: todo.completed }"
      class="flex justify-between items-center mb-2 p-2 border rounded"
    >
      <span @click="toggleTodo(todo.id)" class="cursor-pointer">
        {{ todo.title }}
      </span>
      <button
        @click="deleteTodo(todo.id)"
        class="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </li>
  </ul>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
  color: gray;
}
</style>
