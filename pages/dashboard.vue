<!-- pages/dashboard.vue -->
<script setup>
import { useAuth } from "~/composables/useAuth";
const user = useAuth();

definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <div>
    <h1>Dashboard</h1>
    <p>Welcome, {{ user?.name }}</p>
  </div>
</template>
