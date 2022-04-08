<script setup lang="ts">
import { storeKey } from '@/store/storeProvider';
import { inject } from 'vue';

const store = inject(storeKey);
if(!store){
  throw new Error("");
}

</script>

<template>
<button @click="store.decrement">-</button><span>カウント値：{{store.count}}</span><button @click="store.increment">+</button>
</template>

<style scoped></style>
