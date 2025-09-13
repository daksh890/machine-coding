<script setup lang="ts">
import { useAutoComplete } from '@/composables/useAutoComplete';

const { input, suggestions, isLoading } = useAutoComplete('/api/suggestions');
</script>

<template>
  <div class="relative w-72 mx-auto border-2 p-4">
    <div class="mx-auto my-4">
        <h3 class="text-3xl bold text-amber-500">Auto Complete</h3>
    </div>
    <input
      v-model="input"
      placeholder="Type to search..."
      class="w-full rounded-md bg-white border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:border-2 focus:ring focus:ring-blue-200 focus:outline-none"
    />

    <ul
      v-if="suggestions.length > 0"
      class="absolute z-10 mt-1 w-full rounded-md border border-gray-200 bg-white shadow-lg"
    >
      <li
        v-for="item in suggestions"
        :key="item.id"
        class="cursor-pointer px-3 py-2 hover:bg-gray-100"
      >
        {{ item.name }}
      </li>
    </ul>

    <div v-if="isLoading" class="mt-2 text-sm text-gray-500">Loading...</div>
  </div>
</template>
