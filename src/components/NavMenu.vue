<template>
 <ul>
    <li 
        v-for="(item,id) in menus"    
        :key="id"
        :class="menuActive == item.id ? 'isActive' : ''"
         @click="menuClickActive(item)"
        >
      {{ item.title }}
    </li>
  </ul>
</template>


<script setup lang="ts">
import {ref,onMounted} from 'vue';
import { menuType } from '../types/main';
    const menus =ref<menuType[]>([
        { id:'01',title: '首頁' },
        { id:'03',title: '關於我們' },
        { id:'02',title: '聯絡我們' }
    ])
    const menuActive =ref<string |any>('01')
    const menuClickActive =(item:menuType)=>{
        menuActive.value=item.id;
    }

</script>


<style lang="scss">
ul{
  display:flex;
  li{
    display:flex;
    margin:auto 10px;
    &.isActive{
      border-bottom:1px solid #333;
    }
  }
}
</style>