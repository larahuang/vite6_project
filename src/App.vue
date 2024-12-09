<script setup lang="ts">
import { onMounted } from 'vue'
onMounted(() => {
  console.log('頁面使用:',import.meta.env.VITE_API_BASIC_URL)
})
</script>

<template>
  <div>
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
