<script setup lang="ts">
import { toRefs } from 'vue'
import { type User } from '@/types'

const props = defineProps<{
  user: User
}>()

const { user } = toRefs(props)
</script>

<template>
  <p>
    {{ user.address.street }}, {{ user.address.suite }}, {{ user.address.city }}
    {{ user.address.zipcode }}
  </p>
  <p>{{ user.phone }}</p>
</template>
