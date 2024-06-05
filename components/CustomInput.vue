<script setup>
  defineProps({
    type: {
      type: String,
      default: 'text'
    },
    title: {
      type: String,
      default: 'Title'
    },
    modelValue: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      default: ''
    }
  });
</script>

<template>
  <div class="mb-3">
      <label for="" class="text-sm text-gray-500 ">{{ title }}</label>
      <div class="p-2 border border-sky-400 mt-2 rounded-lg" :class="{ 'border-red-500': error }">
        <input 
          class="w-full focus:outline-none" 
          :type="type"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
        >
      </div>
      <div v-if="error">
        <p class="text-red-500 text-xs" v-if="error">{{ error }}</p>
      </div>
    </div>
</template>
