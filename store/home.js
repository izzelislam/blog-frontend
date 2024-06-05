import { defineStore } from "pinia";
import { baseUrl } from "~/utils/variable.js";

export const useHomeStore = defineStore("home", {
  state: () => ({
    articles: [],
    article: {},
    loading: false,
    categories: [],
    articlePaged: [],
    errors: null,
    totalPage: 0,
    current_page: 1
  }),
  getters: {
    isArticleMore() {
      return this.current_page < this.totalPage
    }
  },
  actions: {
    async getArticle(paging = 8) {
      try {
        this.loading = true
        const articles = await useFetchApi(`${baseUrl}/home/get-articles?paging=${paging}`)
        this.articles = articles.data.data
        this.totalPage = articles.data.last_page
        this.loading = false
      } catch (error) {
      }
    },
    async getArticlePaged(paging = 8) {
      try {
        this.loading = true
        const articles = await useFetchApi(`${baseUrl}/home/get-articles?paging=${paging}`)
        this.articlePaged = articles.data.data
        this.loading = false
      } catch (error) {
      }
    },

    async getArticleById(id) {
      try {
        this.loading = true
        const article = await useFetchApi(`${baseUrl}/home/find-articles/${id}`)
        this.article = article.data
        this.loading = false
      } catch (error) {
      }
    },

    async storeComment(data) {
      try {
        this.loading = true
        await useFetchApi(`${baseUrl}/home/comments`, {
          method: 'POST',
          body: data
        })
        this.getArticleById(data.article_id)
        this.loading = false
      } catch (error) {
        this.loading = false
        this.errors = error.data.message
      }
    },
    async getCategories(){
      try {
        const data = await useFetchApi(`${baseUrl}/home/get-category`)
        this.categories = data.data
      } catch (error) {
      }
    },
    async articleByCategory(id){
      try {
        const data = await useFetchApi(`${baseUrl}/home/article-by-category?category=${id}`)
        this.articles = data.data
        this.totalPage = 1
      } catch (error) {
      }
    },
    async loadmoreArticle(paging = 8){
      try {
          const res = await useFetchApi(`${baseUrl}/home/get-articles?page=${this.current_page+1}&paging=${paging}`)
          console.log(res.data.data)
          this.current_page += 1
          this.articles = [...this.articles, ...res.data.data]
      } catch (error) {
        console.log(error)
      }
    }
  }
})