<script setup lang="ts">
// Root component - minimal setup
import AppHeader from '@/components/AppHeader.vue'
</script>

<template>
  <div id="app" class="flex flex-col h-screen">
    <AppHeader />

    <main class="flex-1 overflow-auto">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer>Footer</footer>
  </div>
</template>

<style scoped>
/* Simple transition for router-view */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
