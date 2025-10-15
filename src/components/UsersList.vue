<script setup lang="ts">
import type { User } from '@/types';
import { UserService } from '@/services/user'
import { ref, onMounted, type Ref } from 'vue';

let users: Ref<User[]> = ref([])

onMounted(async () => {
  console.log('Mounted')
  users.value = await UserService.fetchUsers()
  console.log('Users', users)
})
</script>

<template>
  <div v-if="users.length">
    <div v-for="user in users" :key="user.id" @click="UserService.setCurrentUser(user)">
      {{ user.name }}
    </div>
    <div v-if="UserService.currentUser">Current user: {{ UserService.currentUser.name }}</div>
  </div>
</template>
