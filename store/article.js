import { defineStore } from "pinia";
import { baseUrl } from "~/utils/variable.js";
import { useAuthStore } from "./auth";

// const baseUrl = baseUrl;

export const useArticleStore = defineStore("article", {
  state: () => ({
    articles: [],
    loading : false,
    errors  : []
  }), 

  actions: {
    async getArticles() {
      try {
        this.loading = true
        const articles = await useFetchApi(`${baseUrl}/articles`)
        this.articles = articles.data
        this.loading = false
      } catch (error) {
        this.loading = false
        if (error.status == 401) {
          useAuthStore().deleteCredentials()
        }
      }
    },
    async storeArticle(data) {
      try {
        this.loading = true
        let payload = new FormData()

        payload.append('image_cover', data.image_cover)
        payload.append('title', data.title)
        payload.append('content', data.content)
        payload.append('category_id', data.category_id)

        await useFetchApi(`${baseUrl}/articles`, {
          method: 'POST',
          body: payload
        })

        this.getArticles()
        this.loading = false
        return "berhasil menambahkan article"
      } catch (error) {
        this.errors = error.data.message
        this.loading = false
        if (error.status == 401) {
          useAuthStore().deleteCredentials()
        }
      }
    },

    async updateArticle(id, data) {
      try {
        this.loading = true
        let payload = new FormData()
  
        payload.append('image_cover', data.image_cover)
        payload.append('title', data.title)
        payload.append('content', data.content)
        payload.append('category_id', data.category_id) 
  
        await useFetchApi(`${baseUrl}/articles/${id}?_method=PUT`, {
          method: 'POST',
          body: payload
        })
        this.getArticles()
        this.loading = false
        
      } catch (error) {
        this.errors = error.data.message
        this.loading = false
        if (error.status == 401) {
          useAuthStore().deleteCredentials()
        }
      }
    },

    async deleteArticle(id) {
      try {
        this.loading = true
        await useFetchApi(`${baseUrl}/articles/${id}`, {
          method: 'DELETE'
        })
        this.getArticles()
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