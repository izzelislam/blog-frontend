<script setup>
  defineProps({
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
    },
    row:{
      type: Number,
      default: 3
    },
    col:{
      type: Number,
      default: 10
    }
  });
</script>

<template>
  <label for="" class="text-sm text-gray-500 ">{{ title }}</label>
  <div class="p-2 border border-gray-400 mt-2 rounded-lg" :class="{ 'border-red-500': error }">
    <textarea :cols="col" :rows="row" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"  class="w-full focus:outline-none" >
    </textarea>
  </div>
  <div v-if="error">
    <p class="text-red-500 text-xs" v-if="error">{{ error[0] }}</p>
  </div>
</template>