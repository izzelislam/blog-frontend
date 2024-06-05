import { defineStore } from "pinia";
import { baseUrl } from "~/utils/variable.js";

export const useCategoryStore = defineStore("category", {
  state: () => ({
    categories: [],
  }),
  actions: {
    async getCategories() {
      const categories = await useFetchApi(`${baseUrl}/categories`)
      this.categories = categories.data
    }
  }
})