<script setup>
  import Admin from '~/layouts/admin.vue'
  import { useCommentStore } from '~/store/comment';
  

  definePageMeta({
    middleware: ['auth']
  });

  const commnetStore = useCommentStore();
  const isOpen = ref(false);

  const isLoading = computed(() => commnetStore.loading);
  const comments  = computed(() => commnetStore.comments);
  const comment   = computed(() => commnetStore.comment);

  onMounted(() => {
    commnetStore.getComments()
  });

  async function handleDelete(id) {
    await commnetStore.deleteComment(id)
    await commnetStore.getComments()
  }

  function closeModal() {
    isOpen.value = false
  }

  async function openModal(item) {
    isOpen.value = true
    await commnetStore.findComment(item.id)
  }

</script>

<template>
  <Admin>
    <Card title="Comment">
      <table class="w-full divide-y-2 divide-gray-200">
          <tr class="bg-gray-200">
            <td class="p-2">No</td>
            <td class="p-2">Nama</td>
            <td class="p-2">Email</td>
            <td class="p-2">Komentar</td>
            <td class="p-2">Tanggal</td>
            <td class="p-2">Action</td>
          </tr>
          <tr v-for="(item, index) in comments" :key="index">
            <td class="p-2">
              {{ index + 1 }}
            </td>
            <td class="p-2">
              {{ item.name }}
            </td>
            <td class="p-2">
              {{ item.email }}
            </td>
            <td class="p-2">
              {{ item.content.substring(0, 80) }}
            </td>
            <td>
              {{ dateParser(item.created_at) }}
            </td>
            <td class="p-2">
              <button @click="openModal(item)" class="text-white bg-green-400 p-1 rounded-lg mr-2"><Icon name="mdi:eye" /></button>
              <button @click="handleDelete(item.id)" class="text-white bg-red-400 p-1 rounded-lg "><icon name="mdi:delete"/></button>
            </td>
          </tr>
        </table>
    </Card>
    <Loading v-if="isLoading" />
    
    <!-- detail modal -->
    <UIModal title="Detail Komen" :isOpen="isOpen" @closeModal="closeModal" action="Simpan Data">
        <div class="grid grid-cols-12 mb-3">
          <div class="col-span-2">Nama User </div>
          <div class="col-span-1 text-center">:</div>
          <div class="col-span-8"> {{ comment.name }} </div>
        </div>
        <div class="grid grid-cols-12 mb-3">
          <div class="col-span-2">Email </div>
          <div class="col-span-1 text-center">:</div>
          <div class="col-span-8"> {{ comment.email }} </div>
        </div>
        <div class="grid grid-cols-12 mb-3">
          <div class="col-span-2">Tgl </div>
          <div class="col-span-1 text-center">:</div>
          <div class="col-span-8"> {{ dateParser(comment.created_at) }} </div>
        </div>
        <div class="grid grid-cols-12 mb-3">
          <div class="col-span-2">Komentar </div>
          <div class="col-span-1 text-center">:</div>
          <div class="col-span-8"> {{ comment.content }} </div>
        </div>
      
    </UIModal>
  </Admin>
</template>
