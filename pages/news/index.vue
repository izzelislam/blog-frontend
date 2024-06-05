<script setup>

  import { useHomeStore } from '~/store/home';

  const homeStore = useHomeStore();
  const route     = useRoute();

  const articles    = computed(() => homeStore.articles);
  const isLoading   = computed(() => homeStore.loading);
  const currentPage = computed(() => homeStore.current_page);
  const totalPage   = computed(() => homeStore.totalPage);
  

  onMounted(() => {
    homeStore.getArticle()
    // totalPage.value = articles.value.last_page
  });
  
  onBeforeUpdate(() => {
    homeStore.getArticle()
    homeStore.current_page = 1
  });

  async function handleLoadMore() {
    await homeStore.loadmoreArticle()
  }


</script>

<template>
  <NuxtLayout>
    <div id="breadcrump">
      <div class="container text-lg mb-8">
        <b class="mr-1 text-sky-400">Home /</b>flash-news
      </div>

      <div class="bg-white p-4 mb-10">
        <div class="mb-8">
          <news-card v-for="(item, index) in articles" :key="index.id" :item="item"/>
        </div>

        <div class="text-center mb-2" v-if="totalPage > currentPage">
          <button @click="handleLoadMore" class="bg-sky-500 text-white rounded-lg px-4 py-2">
            <Icon v-if="isLoading" name="eos-icons:loading" size="20" class="mr-2"/>
            load more
          </button>
        </div>
      </div>

    </div>
    <Loading v-if="isLoading" />
  </NuxtLayout>
</template>