<script setup lang="ts">
import { toRefs } from 'vue'
import { type User } from '@/types'

const props = defineProps<{
  user: User
}>()

const { user } = toRefs(props)

const update = () => {
  console.log('update clicked')
}
</script>

<template>
  <p>Name: {{ user.name }}</p>
  <p>Email: {{ user.email }}</p>
  <p>Phone: {{ user.phone }}</p>
  <button @click="update">Update</button>
</template>