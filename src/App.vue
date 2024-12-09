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


