import {defineStore} from "pinia";
import { baseUrl } from "~/utils/variable.js";
import { useAuthStore } from "./auth";

export const useAdminStore = defineStore("admin", {
  state: () => ({
    users: [],
    loading : false,
    errors  : [],
    user: null
  }),
  actions: {
    async getUsers() {
      try {
        this.loading = true
        const users = await useFetchApi(`${baseUrl}/users`)
        this.users = users.data
        this.loading = false
      } catch (error) {
        this.loading = false
        if (error.status == 401) {
          useAuthStore().deleteCredentials()
        }
      }
    },
    async deleteUser(id) {
      try {
        this.loading = true
        await useFetchApi(`${baseUrl}/users/${id}`, {
          method: 'DELETE'
        })
        this.getUsers()
        this.loading = false
      } catch (error) {
        this.loading = false
        if (error.status == 401) {
          useAuthStore().deleteCredentials()
        }
      }
    },
    async updateUser(id, data) {
      try {
        this.loading = true
        await useFetchApi(`${baseUrl}/users/${id}`, {
          method: 'PUT',
          body: data
        })
        this.getUsers()
        this.loading = false
      } catch (error) {
        this.errors = error.data.message
        this.loading = false
        if (error.status == 401) {
          useAuthStore().deleteCredentials()
        }
      }
    },
    async storeUser(data) {
      try {
        this.loading = true
        await useFetchApi(`${baseUrl}/users`, {
          method: 'POST',
          body: data
        })
        this.getUsers()
        this.loading = false
      } catch (error) {
        this.errors = error.data.data
        this.loading = false
        if (error.status == 401) {
          useAuthStore().deleteCredentials()
        }
      }
    },
    async findUser(id) {
      try {
        const user = await useFetchApi(`${baseUrl}/users/${id}`)
        this.user = user.data
        this.loading = false
      } catch (error) {
        this.loading = false
        if (error.status == 401) {
          useAuthStore().deleteCredentials()
        }
      }
    }
  }
});