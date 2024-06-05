<script setup>
  defineProps({
    items: {
      type: Array,
      default: () => {
        return [];
      }
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
      <div class="p-2 border border-gray-400 mt-2 rounded-lg" :class="{ 'border-red-500': error }">
        <select 
          class="w-full focus:outline-none bg-white" 
          :type="type"
          :value="modelValue"
          @change="$emit('update:modelValue', $event.target.value)"
        >
          <option class="text-gray-500 bg-white">Pilih</option>
          <option v-for="(item, index) in items" :key="index" :value="item.id" class="text-gray-500 bg-white">{{ item.name }}</option>
        </select>
      </div>
      <div v-if="error">
        <p class="text-red-500 text-xs" v-if="error">{{ error[0] }}</p>
      </div>
    </div>
</template>
