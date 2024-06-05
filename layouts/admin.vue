<script setup>
import { useAuthStore } from "~/store/auth"
import { useUserStore } from "~/store/user"

  const isSidebar = ref(false)
  const isLoading = ref(false)
  const route = useRoute()

  const {user} = useUserStore()

  const activeUrl = computed(() => route.path)

  const handleLogout = () => {
    isLoading.value = true

    const isAuthenticated = useAuthStore()
    isAuthenticated.token = null
    useUserStore().user = null

    setTimeout(() => {
      isLoading.value = false
      navigateTo('/')
    }, 3000)
  };

</script>

<template>
  <div class="flex">
    
    <div class="w-60 bg-white h-screen md:block" :class="{ 'block': !isSidebar }">
      <NuxtLink to="/" class="p-4 mb-16">
        <img class="w-[100px] h-[100px] rounded-full m-auto" src="/assets/logo.jpeg" alt="">
      </NuxtLink>
      <div class="p-4 text-gray-500 text-md">
        
        <NuxtLink to="/admin/dashboard"  class="p-2 rounded-lg flex items-center mouse-pointer mb-2 hover:bg-sky-300 hover:text-white">
          <Icon name="mdi:home" size="18" class="mr-2"/>
          <span>Dashboard</span>
        </NuxtLink>

        <NuxtLink to="/admin/category" class="p-2 rounded-lg flex items-center mouse-pointer mb-2 hover:bg-sky-300 hover:text-white">
          <Icon name="mdi:tag" size="18" class="mr-2"/>
          <span>Category</span>
        </NuxtLink>

        <NuxtLink to="/admin/article" class="p-2 rounded-lg flex items-center mouse-pointer mb-2 hover:bg-sky-300 hover:text-white">
          <Icon name="mdi:newspaper" size="18" class="mr-2"/>
          <span>Article</span>
        </NuxtLink>

        <NuxtLink to="/admin/comment" class="p-2 rounded-lg flex items-center mouse-pointer mb-2 hover:bg-sky-300 hover:text-white">
          <Icon name="mdi:comment" size="18" class="mr-2"/>
          <span>Comment</span>
        </NuxtLink>
        
        <NuxtLink to="/admin/user" class="p-2 rounded-lg flex items-center mouse-pointer mb-2 hover:bg-sky-300 hover:text-white">
          <Icon name="mdi:account" size="18" class="mr-2"/>
          <span>User</span>
        </NuxtLink>

        <NuxtLink to="/admin/setting" class="p-2 rounded-lg flex items-center mouse-pointer mb-2 hover:bg-sky-300 hover:text-white">
          <Icon name="mdi:settings" size="18" class="mr-2"/>
          <span>Setting</span>
        </NuxtLink>
        
      </div>
    </div>

    <div class="flex-1 h-auto pb-8 bg-[#F7F7F7]">
      <div class="h-[50px] bg-white flex flex-row-reverse items-center justify-between p-4">
        <div class="flex items-center">
          <div class="mr-3 text-sm text-sky-600">{{ user.name }} | {{ user.email }}</div>
          <button @click="handleLogout" class="flex items-center text-sky-500 border-2 border-sky-500 rounded-lg px-3 py-1">
            <Icon name="mdi:logout" size="18" class="mr-2"/>
            Logout
          </button>
        </div>

        <button class="md:hidden block" @click="isSidebar = true">
          <Icon class="text-sky-500" name="mdi:menu" size="28"/>
        </button>
      </div>
      
      <div class="p-4">
        <slot/>
      </div>
    </div>
  </div>
  <Loading v-if="isLoading" />
</template>
