<!-- pages/login.vue -->
<script setup>
import { useAuth } from "~/composables/useAuth";

const user = useAuth();
const username = ref("");

function login() {
  if (username.value.trim()) {
    user.value = { name: username.value };
    return navigateTo("/dashboard");
  }
}
</script>

<template>
  <div>
    <h1>Login</h1>
    <input v-model="username" placeholder="Enter username" />
    <button @click="login">Login</button>
  </div>
</template>
