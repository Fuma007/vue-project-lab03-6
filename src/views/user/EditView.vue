<script setup lang="ts">
import { toRefs } from 'vue'
import { type User } from '@/types'
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message'

const props = defineProps<{
  user: User
}>()

const { user } = toRefs(props)
const router = useRouter()
const store = useMessageStore()

const update = () => {
  store.updateMessage(`The update for "${props.user.name}" is updated`)
  setTimeout(() => {
    store.resetMessage()
  }, 5000)
  router.push({ name: 'home' })
}
</script>

<template>
  <p>Name: {{ user.name }}</p>
  <p>Email: {{ user.email }}</p>
  <p>Phone: {{ user.phone }}</p>
  <button @click="update">Update</button>
</template>