<!-- layouts/default.vue -->
<template>
    <header>
      <nav>
        <NuxtLink to="/">Home</NuxtLink> |
        <NuxtLink to="/dashboard">Dashboard</NuxtLink> |
        <NuxtLink to="/login">Login</NuxtLink>
      </nav>
    </header>
  
    <main>
      <slot />
    </main>
  </template>
  