<script setup lang="ts">
import { useCart } from '@/composables/useCart'

definePageMeta({
    layout: false,
})

const cart = useCart()

const products = [
    { id: 1, name: 'T-shirt', price: 20 },
    { id: 2, name: 'Shoes', price: 50 },
    { id: 3, name: 'Hat', price: 15 },
]

const add = (product: typeof products[0]) => {
    cart.addToCart({ ...product, quantity: 1 })
    console.log('Cart now:', cart.items.value)
}
</script>

<template>
    <div class="p-4 grid grid-cols-3 gap-4">

        <header class="p-4 flex justify-end gap-4">
            <NuxtLink to="/cart" class="px-3 py-1 border rounded">
                Cart ({{ cart.totalItems }})
            </NuxtLink>
        </header>

        <div v-for="product in products" :key="product.id" class="border p-4 rounded shadow">
            <h3 class="font-bold">{{ product.name }}</h3>
            <p class="text-gray-700">$ {{ product.price }}</p>
            <button @click="add(product)" class="mt-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
                Add to Cart
            </button>
        </div>
    </div>
</template>
