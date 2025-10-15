<script setup lang="ts">
const { name = 'World' } = defineProps<{ name?: string }>()
</script>

<template>
  <h1 class="text-5xl text-success text-shadow-sm">Hello {{ name }}!</h1>
</template>

<style scoped></style>
