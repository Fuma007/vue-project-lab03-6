import type { User, UserState } from '@/types'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    user: null
  }),
  actions: {
    setUser(user: User) {
      this.user = user
    }
  }
})