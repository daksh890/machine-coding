<script setup lang="ts">
import { ref } from 'vue'
import { useCart } from '@/composables/useCart';
definePageMeta({
    layout:false
})

const {items, totalItems, clearCart, totalPrice} = useCart();
const name = ref('')
const address = ref('')
const success = ref(false)

const placeOrder = () => {
    console.log('Order Details:', { name: name.value, address: address.value, items: items.value })
    clearCart()
    success.value = true
}
</script>



<template>
    <div class="p-4 max-w-md mx-auto">
        <h2 class="text-xl font-bold mb-4">Checkout</h2>

        <div v-for="item in items" :key="item.id" class="flex justify-between py-1">
            <span>{{ item.name }} x {{ item.quantity }}</span>
            <span>${{ item.price * item.quantity }}</span>
        </div>

        <p class="mt-2 font-bold">Total: ${{ totalPrice }}</p>

        <form @submit.prevent="placeOrder" class="mt-4 flex flex-col gap-2">
            <input v-model="name" type="text" placeholder="Name" required class="border p-2 rounded" />
            <input v-model="address" type="text" placeholder="Address" required class="border p-2 rounded" />
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Place
                Order</button>
        </form>

        <p v-if="success" class="mt-4 text-green-600 font-bold">Order Placed Successfully!</p>
    </div>
</template>