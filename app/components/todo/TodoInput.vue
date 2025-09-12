<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const newTask = ref<string>("");

const emit = defineEmits(["add"]);
const handleAdd = () => {
    if (!newTask.value.trim()) return;
    emit('add', newTask.value.trim());
    newTask.value = '';
}

</script>

<template>
    <div class="flex gap-2 mb-4">
        <input v-model="newTask" type="text" placeholder="Add a new task" class="flex-1 border rounded px-2 py-1"
            @keyup.enter="handleAdd" />
        <button class="bg-blue-500 text-white px-4 rounded" @click="handleAdd">
            Add
        </button>
    </div>
</template>