<script setup>
import Admin from '~/layouts/admin.vue'

  definePageMeta({
    middleware: ['auth']
  })

  const config = useRuntimeConfig()
  const notif  = ref('')
  const categories = ref([])
  const categoryId = ref('')


  const isOpen = ref(false)
  const data = reactive({
    name: ''
  })

  const errors = reactive({})

  async function handleStore() {
    try {
      const response = await useFetchApi(`${config.public.apiBase}/categories`, {
        method: 'POST',
        body: data
      })

      await getData()

      data.name = ''
      notif.value = "Berhasil menambah category";
      setTimeout(() => {
        notif.value = ''
      }, 1200)
      isOpen.value = false
    } catch (error) {
      errors.value = error.data.message
    }
  }

  async function handleUpdate() {
    try {
      const response = await useFetchApi(`${config.public.apiBase}/categories/${categoryId.value}`, {
        method: 'PUT',
        body: data
      })

      await getData()
      isOpen.value = false
      notif.value = "Berhasil mengupdate category";
      setTimeout(() => {
        notif.value = ''
      }, 1200)
    } catch (error) {
    }
  }

  async function handleDelete(id) {
    try {
      const response = await useFetchApi(`${config.public.apiBase}/categories/${id}`, {
        method: 'DELETE'
      })
      await getData()
      notif.value = "Berhasil menghapus category";
      setTimeout(() => {
        notif.value = ''
      }, 1200)
    } catch (error) {
      // return error
    }
  }

  async function getData() {
    try {
      const response = await useFetchApi(`${config.public.apiBase}/categories`)
      categories.value = response.data
    } catch (error) {
      // return error
    }
  }

  function closeModal() {
    errors.value = {}
    isOpen.value = false
    data.name = ''
  }

  function openModal(item = null) {
    isOpen.value = true
    if (item) {
      data.name = item.name
      categoryId.value   = item.id
    }
  }

  function closeNotif() {
    notif.value = ''
  }

  onBeforeMount( () => {
    getData()
  });

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

    <Card title="Category">
      <template #action>
        <UIButton title="Tambah Category" @click="openModal"/>
      </template>

      <div>
        <table class="w-full divide-y-2 divide-gray-200">
          <tr class="bg-gray-200">
            <td class="p-2">No</td>
            <td class="p-2">Name</td>
            <td class="p-2">Tanggal Pembuatan</td>
            <td class="p-2">Action</td>
          </tr>
          <tr v-for="(item, index) in categories" :key="index">
            <td class="p-2">
              {{ index + 1 }}
            </td>
            <td class="p-2">
              {{ item.name }}
            </td>
            <td>
              {{ dateParser(item.created_at) }}
            </td>
            <td class="p-2">
              <button @click="openModal(item)" class="text-white bg-sky-400 p-1 rounded-lg mr-2"><Icon name="mdi:edit" /></button>
              <button @click="handleDelete(item.id)" class="text-white bg-red-400 p-1 rounded-lg "><icon name="mdi:delete"/></button>
            </td>
          </tr>
        </table>
      </div>

    </Card>


    <!-- create category -->
    <UIModal title="Tambah Category" :isOpen="isOpen" @closeModal="closeModal" action="Simpan Data" @actionModal="handleStore" >
      <UIInput title="name" v-model="data.name"  :error="errors?.value?.name"/>

      <template #action>
        <button
            v-if="!categoryId"
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
