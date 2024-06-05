<script setup>
  import Admin from '~/layouts/admin.vue'
  import { useAdminStore } from '~/store/admin';
  import { useUserStore } from '~/store/user';

  definePageMeta({
    middleware: ['auth']
  })

  const initState = {
    "name": "",
    "email": "",
    "password": "",
  }

  const data   = reactive({...initState});
  const errors = reactive({});
  
  const adminStore = useAdminStore();
  const userStore  = useUserStore();
  
  const isLoading = computed(() => adminStore.loading);
  const user      = computed(() => adminStore.user);

  onMounted(() => {
    adminStore.findUser(userStore.user.id)
    Object.assign(data, user.value)
  });

  async function handleUpdate() {
    await adminStore.updateUser(data.id, data)
    await adminStore.findUser(userStore.user.id)
    Object.assign(data, user.value)
    if (Object.keys(errors.value).length <= 0) {
      notif.value = "Berhasil mengupdate user";
      setTimeout(() => {
        notif.value = ''
      }, 1200)
    }
  }
</script>

<template>
  <Admin>
    <Card title="Setting">
      <UIInput title="Nama" type="text" v-model="data.name" :error="errors?.name"/>
      <UIInput title="Email" type="text" v-model="data.email" :error="errors?.email"/>
      <UIInput title="Password" type="text" v-model="data.password" :error="errors?.password"/>

      <UIButton :loading="isLoading" type="button" @click="handleUpdate" title="Simpan" />
    </Card>
  </Admin>
</template>
