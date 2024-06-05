<script setup>

const emit = defineEmits(['closeModal', 'actionModal'])

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  action: {
    type: String,
    default: null
  },
  title: {
    type: String,
    default: 'Title'
  },
  isfull: {
    type: Boolean,
    default: false
  }
});

</script>

<template>
  <HeadlessTransitionRoot appear :show="isOpen" as="template">
    <HeadlessDialog as="div" @close="emit('closeModal', false)" class="relative z-10">
      <HeadlessTransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </HeadlessTransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-start justify-center p-4 text-center"
        >
          <HeadlessTransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <HeadlessDialogPanel
              class="w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
              :class="isfull ? 'w-full' : 'max-w-xl'"
            >
              <HeadlessDialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
              >
                {{ title }}
              </HeadlessDialogTitle>
              <div class="mt-4">
                <slot/>
              </div>

              <div class="flex justify-end  mt-6">
                <button  @click="emit('closeModal', false)" class="rounded-md bg-white border-sky-400 border-2
                 px-4 py-2 text-sm font-medium text-sky-400 mr-5">
                  <Icon  name="mdi:close" size="20" class="mr-2"/>
                  <span >Tutup</span>
                </button>  

                <slot name="action"/>
              </div>
            </HeadlessDialogPanel>
          </HeadlessTransitionChild>
        </div>
      </div>
    </HeadlessDialog>
  </HeadlessTransitionRoot>
</template>