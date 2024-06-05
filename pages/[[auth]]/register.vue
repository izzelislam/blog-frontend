<script setup>

const isLoading = ref(false);

definePageMeta({
  middleware: ['guest'],
})

const register = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 3000)
};

</script>

<template>
  <NuxtLayout name="auth">
    <div  class="bg-[#F7F7F7] flex items-center h-[100vh]">
      <div class="min-w-[350px] bg-white rounded-lg mx-auto p-4">
        <div class="text-sm text-center mb-4">
          <p class="text-xl font-bold text-gray-600 mb-2">Daftar</p>
          <p class="text-gray-500 text-xs">Selamat datang , silahkan masukkan <br> data anda untuk melakukan pendaftaran</p>
        </div>
        <div>
          <div class="mb-3">
            <label for="" class="text-sm text-gray-500 ">Username</label>
            <div class="p-2 border border-sky-400 mt-2 rounded-lg">
              <input class="w-full focus:outline-none" type="text">
            </div>
          </div>
          <div class="mb-3">
            <label for="" class="text-sm text-gray-500 ">Email</label>
            <div class="p-2 border border-sky-400 mt-2 rounded-lg">
              <input class="w-full focus:outline-none" type="text">
            </div>
          </div>
          <div class="mb-3">
            <label for="" class="text-sm text-gray-500 ">Password</label>
            <div class="p-2 border border-sky-400 mt-2 rounded-lg">
              <input class="w-full focus:outline-none" type="text">
            </div>
          </div>
          <div class="mb-3">
            <button @click="register" class="w-full bg-sky-500 text-white p-2 rounded-lg hover:bg-sky-300 transition duration-300">Daftar</button>
          </div>
          <div class="text-center text-sm">
            <p class="text-gray-500">Sudah punya akun? <NuxtLink to="/auth/login" class="text-sky-500">Login</NuxtLink></p>
          </div>
        </div>
      </div>
    </div>

    <Loading v-if="isLoading" />
  </NuxtLayout>
</template>
