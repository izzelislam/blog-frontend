import { defineStore } from "pinia";
import { baseUrl } from "~/utils/variable.js";
import { useAuthStore } from "./auth";  

export const useCommentStore = defineStore("comment", {
  state: () => ({
    comments: [],
    loading : false,
    errors  : [],
    comment: {}
  }),
  actions: {
    async getComments() {
      try {
        this.loading = true
        const response = await useFetchApi(`${baseUrl}/comments`)
        this.comments = response.data
        this.loading = false
      } catch (error) {
        this.loading = false
        if (error.status == 401) {
          useAuthStore().deleteCredentials()
        }
      }
    },

    async deleteComment(id) {
      try {
        this.loading = true
        await useFetchApi(`${baseUrl}/comments/${id}`, {
          method: 'DELETE'
        })
        this.getComments()
        this.loading = false
      } catch (error) {
        this.loading = false
        if (error.status == 401) {
          useAuthStore().deleteCredentials()
        }
      }
    },
    
    async findComment(id) {
      try {
        const comment = await useFetchApi(`${baseUrl}/comments/${id}`)
        this.comment = comment.data
        this.loading = false
      } catch (error) {
        this.loading = false
        if (error.status == 401) {
          useAuthStore().deleteCredentials()
        }
      }
    }
  }
})
