<script setup>
import UsersList from '@/components/UsersList.vue'
</script>

<template>
  <div class="h-full flex flex-col items-center justify-start py-6">
    <h1
      class="text-6xl font-semibold bg-clip-text text-transparent text-shadow-lg bg-linear-to-r/increasing from-indigo-500 to-teal-500">
      Users
    </h1>
    <UsersList />
  </div>
</template>

<style scoped>
/* Component-specific styles go here */
</style>
