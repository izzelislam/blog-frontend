<script setup>

const emit = defineEmits(['click']);

const {loading, title} = defineProps({
  loading: {
    type: Boolean,
    default: false
  },
  title : {
    type: String,
    default: 'Load More'
  },
  icon : {
    type: String
  },
  onclick: {
    type: Function
  }
});
</script>

<template>
  <button @click="emit('click')" class="rounded-md border border-transparent bg-sky-400 px-4 py-2 text-sm font-medium text-white hover:bg-sky-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2">
    <Icon v-if="loading" name="eos-icons:loading" size="20" class="mr-2"/>
    <Icon v-if="!loading && icon" :name="icon" size="20" class="mr-2"/>
    <span v-if="title">{{ title }}</span>
  </button>  
</template>