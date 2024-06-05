import { defineStore } from "pinia";
import { useUserStore } from "./user";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: null,
  }),
  actions: {
    async deleteCredentials() {
      this.token = null
      useUserStore().user = null
      navigateTo('/login')
    }
  },
  persist: true,
});