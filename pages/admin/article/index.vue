<script setup>
  import Admin from '~/layouts/admin.vue'
  import { useArticleStore } from '~/store/article'
  import { useAuthStore } from '~/store/auth';
  import { useCategoryStore } from '~/store/category'
  import { ref } from 'vue';
  import { MdEditor } from 'md-editor-v3';
  import 'md-editor-v3/lib/style.css';

  const text = ref('# Hello Editor');

  definePageMeta({
    middleware: ['auth']
  })

  const initState = {
    "category_id": "",
    "title": "",
    "content": ""
  };

  const isOpen = ref(false)
  const data   = reactive({...initState}) 
  const image_cover = ref('')
  const articleId = ref('')
  const notif = ref('')
  const config = useRuntimeConfig()

  const articleStore = useArticleStore()
  const categoryStore = useCategoryStore()
  const authStore = useAuthStore()

  const articles   = computed(()  => articleStore.articles);
  const isLoading  = computed(() => articleStore.loading);
  const categories = computed(() => categoryStore.categories);
  const errors     = computed(() => articleStore.errors);
  

  onMounted( () => {
    articleStore.getArticles()
  })
  

  const handleImage = (event) => {
    image_cover.value = event.target.files[0]
  }

  async function handleStore(){
    const er =  await articleStore.storeArticle({...data, image_cover: image_cover.value})
    
    if (Object.keys(errors.value).length <= 0){
      Object.assign(data, initState)
      image_cover.value = ''
      isOpen.value = false
      notif.value = er
      setTimeout(() => {
        notif.value = ''
      }, 1200)
    }

  }

  async function handleDelete(id){
    await articleStore.deleteArticle(id)
    await articleStore.getArticles()
  }

  async function handleUpdate(){
    await articleStore.updateArticle(articleId.value, {...data, image_cover: image_cover.value})
    
    if (Object.keys(errors.value).length <= 0){
      Object.assign(data, initState)
      image_cover.value = ''
      isOpen.value = false
      notif.value = "Berhasil mengupdate artikel";
      setTimeout(() => {
        notif.value = ''
      }, 1200)
    }
  }

  function closeModal() {
    isOpen.value = false
    articleStore.errors = {}
    articleId.value = ''
    Object.assign(data, initState)
  }

  function openModal(item = null) {
    categoryStore.getCategories()
    isOpen.value = true

    if (item) {
      articleId.value = item.id
      Object.assign(data, item)
    }
  }

</script>

<template>
  <Admin>

    <div v-if="!!notif" class="bg-green-300 p-4 rounded-lg mb-2 ">
      <div class="flex justify-between align-middle mb-2">
        <div>
          Sukses
        </div>
        <div>
          <button @click="closeNotif"><Icon name="mdi:close" /></button>
        </div>
      </div>
      {{ notif }}
    </div>

    <Card title="Artikel">
      <template #action>
        <UIButton title="Tambah Article" @click="openModal"/>
      </template>
      <div>
        <table class="w-full divide-y-2 divide-gray-200">
          <tr class="bg-gray-200">
            <td class="p-2">No</td>
            <td class="p-2">Judul</td>
            <td class="p-2">Gambar</td>
            <td class="p-2">Tanggal Pembuatan</td>
            <td class="p-2">Action</td>
          </tr>
          <tr v-for="(item, index) in articles" :key="index">
            <td class="p-2">
              {{ index + 1 }}
            </td>
            <td class="p-2">
              {{ item.title }}
            </td>
            <td class="p-2">
              <img :src="item.image_url" alt="" class="w-28 h-18 rounded-lg">
            </td>
            <td>
              {{ dateParser(item.created_at) }}
            </td>
            <td class="p-2">
              <button @click="openModal(item)" class="text-white bg-green-400 p-1 rounded-lg mr-2"><Icon name="mdi:eye" /></button>
              <button @click="openModal(item)" class="text-white bg-sky-400 p-1 rounded-lg mr-2"><Icon name="mdi:edit" /></button>
              <button @click="handleDelete(item.id)" class="text-white bg-red-400 p-1 rounded-lg "><icon name="mdi:delete"/></button>
            </td>
          </tr>
        </table>
      </div>
    </Card>
    <Loading v-if="isLoading" />

    <!-- create category -->
    <UIModal :isfull="true" title="Tambah Artikel" :isOpen="isOpen" @closeModal="closeModal" action="Simpan Data">
      <UISelect title="Pilih Kategori" :items="categories" v-model="data.category_id" :error="errors?.category_id"/>
      <UIInput title="Judul Artikel" type="text" v-model="data.title" :error="errors?.title"/>
      
      <div class="mb-3">
        <label for="" class="text-sm text-gray-500 ">Gambar</label>
        <div class="p-2 border border-gray-400 mt-2 rounded-lg" :class="{ 'border-red-500': errors?.image_cover }">
          <input 
            class="w-full focus:outline-none" 
            type="file"
            @change="handleImage($event)"
          >
        </div>
        <div v-if="false">
          <p class="text-red-500 text-xs" v-if="false">tes</p>
        </div>
      </div>

      <!-- <UITextArea title="Konten" type="text" :row="10" v-model="data.content" :error="errors?.content"/> -->

      <MdEditor v-model="data.content" language="en-US"/>

      <template #action>
        <button
            v-if="!articleId"
            type="button"
            class="rounded-md border border-transparent bg-sky-400 px-4 py-2 text-sm font-medium text-white hover:bg-sky-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
            @click="handleStore"
          >
          simpan Data
        </button>
        <button
            v-else
            type="button"
            class="rounded-md border border-transparent bg-sky-400 px-4 py-2 text-sm font-medium text-white hover:bg-sky-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
            @click="handleUpdate"
          >
          simpan Data
        </button>
      </template>
    </UIModal>

  </Admin>
</template>
