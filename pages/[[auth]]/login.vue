<script setup>
import { useAuthStore } from '~/store/auth';
import { useUserStore } from '~/store/user';

definePageMeta({
  middleware: ['guest'],
})

const config = useRuntimeConfig()

const isLoading = ref(false);
const authStore = useAuthStore()
const userStore = useUserStore()

const email = ref('')
const password = ref('')
const errors = ref({})
const globalError = ref()



// const {data, error} = await useFetch('http://cms.test/api/users',{
//   pick: ['data'],
//   onResponse({ request, response, options }) {
//     console.log(response._data.data)
//   },
//   onResponseError({ request, response, error }) {
//     console.log(response.status);
//   },
//   headers: {
//     'Accept' : 'application/json',
//   }
// })

const login = async () => {
  isLoading.value = true
  
  await $fetch(`${config.public.apiBase}/login`, {
    method: 'POST',
    body: {
      email: email.value,
      password: password.value
    },
    onResponse({ request, response, options }) {
      isLoading.value = false
      if (response.status == 200){
        authStore.token = response._data.data.token
        userStore.user = response._data.data.user  
        navigateTo('/admin/dashboard')
      }
    },
    onResponseError({ request, response, error }) {
      if (response.status == 422){
        errors.value = response._data.message
      }else{
        console.log(response._data?.message);
        globalError.value = response._data?.message
        isLoading.value = false
      }
    },
    headers: {
      'Accept' : 'application/json',
    }
  })
}

const dismisAlert = () => {
  globalError.value = ''
};

</script>

<template>
  <NuxtLayout name="auth">
    <div  class="bg-[#F7F7F7] flex items-center h-[100vh]">
      <div class="min-w-[350px] bg-white rounded-lg mx-auto p-4">
        <div class="my-4 p-3 bg-red-500 rounded-xl flex justify-between" v-if="globalError">
          <p class="text-white font-normal"> {{ globalError }} </p>
          <button class="max-w-[20px]" v-on:click="dismisAlert">
            <icon name="mdi:times" class="text-white"/>
          </button>
        </div>
        <div class="text-sm text-center mb-4">
          <p class="text-xl font-bold text-gray-600 mb-2">Login</p>
          <p class="text-gray-500 text-xs">Selamat datang kembali, silahkan masukkan <br> username dan password anda</p>
        </div>
        <div>
  
          <div class="mb-3">
            <label for="" class="text-sm text-gray-500 ">Email</label>
            <div class="p-2 border mt-2 rounded-lg" :class="errors.email ? 'border-red-500' : 'border-sky-400'">
              <input v-model="email" class="w-full focus:outline-none" type="text">
            </div>
            <div class="mt-1" v-if="errors.email">
              <p class="text-red-500 text-xs italic">{{ errors.email[0] }}</p>
            </div>
          </div>
  
          <div class="mb-3">
            <label for="" class="text-sm text-gray-500 ">Password</label>
            <div class="p-2 border mt-2 rounded-lg" :class="errors.password ? 'border-red-500' : 'border-sky-400'">
              <input v-model="password" class="w-full focus:outline-none" type="password">
            </div>
            <div class="mt-1" v-if="errors.email">
              <p class="text-red-500 text-xs italic">{{ errors.email[0] }}</p>
            </div>
            <div>
              <a href="#" class="text-sm text-sky-500">Lupa password?</a>
            </div>
          </div>
  
          <div class="mb-3 flex items-center">
              <input id="remember" type="checkbox" class="mr-4 checked:ring-sky-500">
              <label for="remember" class="text-sm text-gray-500 ">Ingat saya</label>
          </div>
          <div class="mb-3">
            <button @click="login" class="w-full bg-sky-500 text-white p-2 rounded-lg hover:bg-sky-300 transition duration-300">Masuk</button>
          </div>
          <div class="text-center text-sm">
            <p class="text-gray-500">Belum punya akun? <NuxtLink to="/auth/register" class="text-sky-500">Daftar</NuxtLink></p>
          </div>
        </div>
      </div>
    </div>
    <Loading v-if="isLoading" />
  </NuxtLayout>
</template>
