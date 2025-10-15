<script setup>
import ModeToggle from '@/components/ModeToggle.vue'
import ThemePicker from '@/components/ThemePicker.vue'
</script>

<template>
  <header class="navbar bg-base-200 text-base-content shadow-sm">
    <div class="flex-none">
      <router-link to="/" class="btn btn-ghost text-xl">
        <img src="@/assets/vue.svg" />
        Vue3 Starter
      </router-link>
    </div>
    <div class="flex-1 align-center">
      <ul class="menu menu-horizontal text-xl">
        <li><router-link to="/" active-class="bg-base-300 font-bold">Home</router-link></li>
        <li><router-link to="/users" active-class="bg-base-300 font-bold">Users</router-link></li>
      </ul>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal text-lg align-center">
        <li>
          <ThemePicker />
        </li>
        <li>
          <ModeToggle />
        </li>
      </ul>
    </div>
  </header>
</template>
