<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { type User, type Post } from '@/types'
import UserService from '@/services/UserService'

const props = defineProps<{
  user: User
}>()

const posts = ref<Post[] | null>(null)

onMounted(() => {
  UserService.getUserPosts(props.user.id)
    .then((response) => {
      posts.value = response.data
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })
})
</script>

<template>
  <div v-for="post in posts" :key="post.id" class="post">
    <h3>{{ post.title }}</h3>
    <p>{{ post.body }}</p>
  </div>
</template>
