<script setup lang="ts">
import { provide } from "vue";
import { storeKey, useStore } from "./storeProvider";
//親コンポーネントで必要。第一引数はkey, 第二引数はStore。
provide(storeKey, useStore());
</script>

<template>
  <div>
    <slot></slot>
  </div>
</template>

<style scoped></style>
