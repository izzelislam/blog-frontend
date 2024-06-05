<script setup>
  const {isAuthenticated} =  useAuth();
</script>

<template>
  <!-- navbar -->'
  <nav class="bg-white p-2 pb-4 sticky top-0 z-10 transition-all duration-900">
    <div class="max-w-[1100px] flex items-center mx-auto gap-5">
      <div class="max-w-[190]">
        <NuxtLink to="/" class="font-semibold">
          <img class="w-[140px]" src="/sinau-dev.png" alt="">
        </NuxtLink>
      </div>
      <div class="md:block hidden">
        <ul class="flex gap-5 font-semibold text-[#1f1f1f] items-center">
          <li><Icon name="mdi:search" size="24"/></li>
          <li class="h-full py-2 hover:border-b-2 hover:border-[#0399DC]">
            <NuxtLink to="/news">Tutorial</NuxtLink>
          </li>
          <li class="h-full py-2 hover:border-b-2 hover:border-[#0399DC]">Ebook</li>
          <li class="h-full py-2 hover:border-b-2 hover:border-[#0399DC]">Video</li>
          <li class="h-full py-2 hover:border-b-2 hover:border-[#0399DC]">About</li>
        </ul>
      </div>
  
      <div class="hidden md:flex flex-1 justify-end">
        <div v-if="!isAuthenticated">
          <NuxtLink to="/login" class="bg-[#1f1f1f] text-white p-2 rounded-lg">Login</NuxtLink>
        </div>
        <div v-if="isAuthenticated">
          <NuxtLink to="/admin/dashboard" class="bg-[#1f1f1f] text-white p-2 rounded-lg">Dashboard</NuxtLink>
        </div>
      </div>
      <div class="md:hidden min-w-[250px] flex justify-end">
        <div>
          <Icon class="bg-white self-end" name="mdi:menu" size="28"/>
        </div>
      </div>
    </div>
  </nav>
  <!-- end navbar -->

  <div class="bg-[#F7F7F7]">
    <div class="max-w-[1100px] mx-auto pt-[40px] p-2">
      <slot/>
    </div>
  </div>

  <div class="bg-[#1A1A1A]">
    <div class="max-w-[1100px] mx-auto p-6">
      <ul class="md:flex md:justify-around py-4 text-white mb-6">
        <li class="mb-3">Tentang Kami</li>
        <li class="mb-3">Redaksi</li>
        <li class="mb-3">Kebijakan Iklan</li>
        <li class="mb-3">Pemdoman Media Siber</li>
        <li class="mb-3">Kontak Kami</li>
        <li class="mb-3">Metodologi Riset</li>
        <li class="mb-3">FAQ</li>
      </ul>
      <div class="text-center text-white text-xs">
        <p>© 2024 tirto.id. All rights reserved </p>
      </div>
    </div>
  </div>
</template>
