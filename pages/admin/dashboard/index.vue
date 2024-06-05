<script setup>
import Admin from '~/layouts/admin.vue'
import { useAdminStore } from '~/store/admin';
import { useArticleStore } from '~/store/article';
import { useCategoryStore } from '~/store/category';
import { useCommentStore } from '~/store/comment';

definePageMeta({
  middleware: ['auth']
});

const categoryStore = useCategoryStore();
const articleStore  = useArticleStore();
const adminStore    = useAdminStore();
const commentStore  = useCommentStore();

const categories = computed(() => categoryStore.categories);
const articles   = computed(() => articleStore.articles);
const comments   = computed(() => commentStore.comments);
const users      = computed(() => adminStore.users);

const isLoading = computed(() => categoryStore.loading || articleStore.loading || commentStore.loading || adminStore.loading);

onMounted(() => {
  categoryStore.getCategories()
  articleStore.getArticles()
  commentStore.getComments()
  adminStore.getUsers()
});

</script>

<template>
  <Admin>
    <Card title="">
      <div class="text-3xl text-sky-500">Selamat Datang</div>
      <div class="text-sm text-gray-500">Selamat datang di dashboard</div>
    </Card>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
      
      <div class="bg-white rounded-lg p-4">
        <div class="text-sm  mb-4">
          <p class="text-xl font-bold text-gray-600 mb-2">Jumlah Artikel</p>
          <div class="flex justify-between align-middle">
            <div class="flex align-middle">
              <div class="mr-2">
                <p class="text-gray-500 text-3xl font-bold">{{ Object.keys(articles).length }}</p>
              </div>
              <div class="flex">
                <p class="text-gray-500 text-xs self-center">Artikel</p>
              </div>
            </div>
            <div>
              <icon size="30"  name="mdi:book" class="text-sky-500" />
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg p-4">
        <div class="text-sm  mb-4">
          <p class="text-xl font-bold text-gray-600 mb-2">Jumlah Kategori</p>
          <div class="flex justify-between align-middle">
            <div class="flex align-middle">
              <div class="mr-2">
                <p class="text-gray-500 text-3xl font-bold">{{ Object.keys(categories).length }}</p>
              </div>
              <div class="flex">
                <p class="text-gray-500 text-xs self-center">kategori</p>
              </div>
            </div>
            <div>
              <icon size="30"  name="mdi:car" class="text-gray-700" />
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg p-4">
        <div class="text-sm  mb-4">
          <p class="text-xl font-bold text-gray-600 mb-2">Jumlah Komentar</p>
          <div class="flex justify-between align-middle">
            <div class="flex align-middle">
              <div class="mr-2">
                <p class="text-gray-500 text-3xl font-bold">{{ Object.keys(comments).length }}</p>
              </div>
              <div class="flex">
                <p class="text-gray-500 text-xs self-center">komentar</p>
              </div>
            </div>
            <div>
              <icon size="30"  name="mdi:comment" class="text-green-500" />
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg p-4">
        <div class="text-sm  mb-4">
          <p class="text-xl font-bold text-gray-600 mb-2">Jumlah Penguna</p>
          <div class="flex justify-between align-middle">
            <div class="flex align-middle">
              <div class="mr-2">
                <p class="text-gray-500 text-3xl font-bold">{{ Object.keys(users).length }}</p>
              </div>
              <div class="flex">
                <p class="text-gray-500 text-xs self-center">user</p>
              </div>
            </div>
            <div>
              <icon size="30"  name="mdi:account" class="text-red-500" />
            </div>
          </div>
        </div>
      </div>

    
    </div>
    <Loading v-if="isLoading" />
  </Admin>
</template>
