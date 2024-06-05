<script setup>
  import Admin from '~/layouts/admin.vue'
  import { useAdminStore } from '~/store/admin';

  definePageMeta({
    middleware: ['auth']
  });

  const initState = {
    "name": "",
    "email": "",
    "password": ""
  }

  const isOpen = ref(false)
  const userId  = ref('')
  const data   = reactive({...initState})

  const adminStore = useAdminStore();

  const isLoading = computed(() => adminStore.loading);
  const users     = computed(() => adminStore.users);
  const errors    = computed(() => adminStore.errors);

  onMounted(() => {
    adminStore.getUsers()
  });

  async function handleStore() {
    await adminStore.storeUser(data)
    Object.assign(data, initState)
    if (Object.keys(errors.value).length <= 0) {
      isOpen.value = false
      notif.value = "Berhasil menambah user";
      setTimeout(() => {
        notif.value = ''
      }, 1200)
    }
  }

  async function handleDelete(id) {
    await adminStore.deleteUser(id)
    await adminStore.getUsers()
  }

  async function handleUpdate() {
    await adminStore.updateUser(userId.value, data)
    Object.assign(data, initState)
    if (Object.keys(errors.value).length <= 0) {
      isOpen.value = false
      notif.value = "Berhasil mengupdate user";
      setTimeout(() => {
        notif.value = ''
      }, 1200)
    }
  }

  function closeModal() {
    isOpen.value = false
    Object.assign(data, initState)
    adminStore.errors = {}
    userId.value = ''
  }

  function openModal(item = null) {
    isOpen.value = true

    if (item) {
      userId.value = item.id
      Object.assign(data, item)
    }
  }

</script>

<template>
  <Admin>
    <Card title="User">
      <template #action>
        <UIButton title="Tambah User" @click="openModal"/>
      </template>
      <table class="w-full divide-y-2 divide-gray-200">
          <tr class="bg-gray-200">
            <td class="p-2">No</td>
            <td class="p-2">Nama</td>
            <td class="p-2">Email</td>
            <td class="p-2">Tanggal Pembuatan</td>
            <td class="p-2">Action</td>
          </tr>
          <tr v-for="(item, index) in users" :key="index">
            <td class="p-2">
              {{ index + 1 }}
            </td>
            <td class="p-2">
              {{ item.name }}
            </td>
            <td class="p-2">
              {{ item.email }}
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
    </Card>
    <Loading v-if="isLoading" />

    <!-- modal create data -->
    <UIModal title="Tambah Artikel" :isOpen="isOpen" @closeModal="closeModal" action="Simpan Data">
      <UIInput title="Nama User" type="text" v-model="data.name" :error="errors?.name"/>
      <UIInput title="Email" type="email" v-model="data.email" :error="errors?.email"/>
      <UIInput title="Password" type="password" v-model="data.password" :error="errors?.password"/>

      <template #action>
        <button
            v-if="!userId"
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
