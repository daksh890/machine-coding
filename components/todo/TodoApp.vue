<script setup lang="ts">
import { ref } from 'vue';
import TodoInput from './TodoInput.vue'
import TodoList from './TodoList.vue'

type Todo = {
    id: number
    title: string
    completed: boolean

}

const todos = ref<Todo[]>([])
const addTodo = (title: string) => {
    console.log(title);
    todos.value.push({
        id: Date.now(),
        title,
        completed: false
    })
}

function toggleTodo(id: number) {
    const todo = todos.value.find(t => t.id === id)
    if (todo) todo.completed = !todo.completed
}

function deleteTodo(id: number) {
    todos.value = todos.value.filter(t => t.id !== id)
}

</script>

<template>
    <div class="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 class="text-2xl font-bold mb-4">Todo App</h1>

        <!-- Input -->
        <TodoInput @add="addTodo" />

        <!-- List -->
        <TodoList :todos="todos" @toggle="toggleTodo" @delete="deleteTodo" />
    </div>
</template>