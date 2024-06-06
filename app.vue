<script setup>
  provideHeadlessUseId(() => useId());
</script>
<template>
  <NuxtLoadingIndicator height="10" throttle="500"/>
  <NuxtPage/>
</template>
