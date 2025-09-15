<script setup lang="ts">
import { ref } from 'vue'

// Define the type of items
interface Item {
  id: number
  name: string
}

// Reactive list
const items = ref<Item[]>([
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
])

// Track dragging state
const draggedItem = ref<Item | null>(null)

// Drag start
const onDragStart = (item: Item) => {
  draggedItem.value = item
}

// Drag over
const onDragOver = (event: DragEvent) => {
  event.preventDefault() // necessary to allow drop
}

// Drop
const onDrop = (item: Item) => {
  if (!draggedItem.value || draggedItem.value.id === item.id) return

  const draggedIndex = items.value.findIndex(i => i.id === draggedItem.value?.id)
  const dropIndex = items.value.findIndex(i => i.id === item.id)

  // Reorder items
  items.value.splice(draggedIndex, 1) // remove dragged item
  items.value.splice(dropIndex, 0, draggedItem.value) // insert at drop position

  draggedItem.value = null
}
</script>

<template>
  <ul class="w-64 mx-auto mt-10 space-y-2">
    <li
      v-for="item in items"
      :key="item.id"
      draggable="true"
      @dragstart="() => onDragStart(item)"
      @dragover="onDragOver"
      @drop="() => onDrop(item)"
      class="p-4 bg-gray-100 border border-gray-300 rounded cursor-grab select-none hover:bg-gray-200 active:cursor-grabbing active:bg-gray-300 transition"
    >
      {{ item.name }}
    </li>
  </ul>
</template>
