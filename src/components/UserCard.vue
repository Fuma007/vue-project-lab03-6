<script setup lang="ts">
import type { User } from '@/types'

defineProps<{
  user: User
}>()
</script>

<template>
  <RouterLink class="user-link" :to="{ name: 'user-profile-view', params: { id: user.id } }">
    <div class="user-card">
      <h2>{{ user.name }}</h2>
      <p>{{ user.email }}</p>
      <p>{{ user.company.name }}</p>
    </div>
  </RouterLink>
</template>

<style scoped>
.user-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  transition:
    background-color 0.2s ease,
    box-shadow 0.2s ease;
}
.user-card:hover {
  background-color: #f0f0f0;
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(100, 100, 100, 0.3);
}
.user-link {
  text-decoration: none;
  color: #2c3e50;
}
</style>
