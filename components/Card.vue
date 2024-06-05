<script setup>
  defineProps({
    title: {
      type: String,
      default: 'Title'
    },
  });
</script>

<template>
  <div class="p-4 bg-white rounded-lg">
    <div class="flex justify-between mb-4 border-b pb-3">
      <div>
        <p class="text-md font-semibold text-gray-600">{{ title }}</p>
      </div>
      <div>
        <slot name="action" />
      </div>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>
