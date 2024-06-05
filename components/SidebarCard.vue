<script setup>
const {item} = defineProps({
  item: {
    type: Array,
    default: () => []
  }
});

const url = `/news/${item.id}`;
const title = item.title.substring(0, 50);
</script>

<template>
  <NuxtLink :to="url" class="mouse-pointer">
    <div class="bg-white rounded-md mb-4">
      <div>
        <img class="w-full rounded-lg" :src="item.image_url" alt="">
      </div>
      <div class="p-3">
        <p class="text-sm text-gray-500 mb-2">{{ title }}</p>
        <p class="text-sm text-gray-400"><i>{{ dateParser(item.created_at) }}</i></p>
      </div>
    </div>
  </NuxtLink>
</template>