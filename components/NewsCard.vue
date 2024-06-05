<script setup>
  const {item} = defineProps({
    item: {
      type: Array,
      default: () => []
    }
  });

  const url = `/news/${item.id}`;

</script>

<template>
  <NuxtLink :to="url" class="md:flex md:gap-6 mb-8 mouse-pointer">
    <img class="md:w-[260px] rounded-xl" :src="item.image_url" alt="">
    <div class="pt-2 md:mb-0 mb-12">
      <div class="font-bold text-[16px] text-sky-600 mb-2">{{ item.title }}</div>
      <div class="text-xs text-gray-700 mb-2">{{ item.content.substring(0, 200) }}</div>
      <div class="text-sm text-gray-500 font-semibold">{{ dateParser(item.created_at) }}</div>
    </div>
  </NuxtLink>
</template>