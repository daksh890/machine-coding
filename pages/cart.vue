<script setup lang="ts">
import { useCart } from '@/composables/useCart'
import { useRouter } from 'vue-router'

definePageMeta({
  layout: false,
})

const { items, removeFromCart, totalItems, totalPrice } = useCart()
const router = useRouter()

const remove = (id: number) => removeFromCart(id)
const checkout = () => router.push('/checkout')
</script>

<template>
  <div class="p-4 max-w-lg mx-auto">
    <h2 class="text-xl font-bold mb-4">Your Cart ({{ totalItems }} items)</h2>

    <div v-if="items.length === 0" class="text-gray-500">Cart is empty</div>

    <div
      v-for="item in items"
      :key="item.id"
      class="flex justify-between items-center border-b py-2"
    >
      <div>
        {{ item.name }} - ${{ item.price }}
        <input
          type="number"
          min="1"
          v-model.number="item.quantity"
          class="w-16 border ml-2 p-1 rounded"
        />
      </div>
      <button
        @click="remove(item.id)"
        class="text-red-500 hover:underline"
      >
        Remove
      </button>
    </div>

    <div v-if="items.length > 0" class="mt-4">
      <p class="font-bold">Total: ${{ totalPrice }}</p>
      <button
        @click="checkout"
        class="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Checkout
      </button>
    </div>
  </div>
</template>
