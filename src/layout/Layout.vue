<template>
<div class="full-container">
    <Navbar></Navbar>
    <div class="main">
         <RouterView></RouterView>
    </div>
</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
// @ts-ignore
import Navbar from '../components/NavMenu.vue';
onMounted(() => { 

})
</script>