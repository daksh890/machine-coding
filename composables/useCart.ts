// composables/useCart.ts
import { useState } from 'nuxt/app'
import { computed } from 'vue'

export interface CartItem {
  id: number
  name: string
  quantity: number
  price: number
}

export const useCart = () => {
  // Global state persisted across navigation
  const items = useState<CartItem[]>('cart-items', () => [])

  const addToCart = (item: CartItem) => {
    const existing = items.value.find(i => i.id === item.id)
    if (existing) {
      existing.quantity += item.quantity
    } else {
      items.value.push({ ...item }) // spread for safety
    }
  }

  const removeFromCart = (id: number) => {
    items.value = items.value.filter(i => i.id !== id)
  }

  const updateQuantity = (id: number, quantity: number) => {
    const item = items.value.find(i => i.id === id)
    if (item) item.quantity = quantity
  }

  const clearCart = () => {
    items.value = []
  }

  const totalItems = computed(() =>
    items.value.reduce((acc, item) => acc + item.quantity, 0)
  )

  const totalPrice = computed(() =>
    items.value.reduce((acc, item) => acc + item.price * item.quantity, 0)
  )

  return { items, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice }
}
