<script setup lang="ts">
import { useCounterOptionsStore } from '@/store/counter.options.ts' 
import { storeToRefs } from 'pinia';

  const counterStore = useCounterOptionsStore();
  const { count, squareCount} = storeToRefs( counterStore )
</script>
<template>
  <h1>Pinia options</h1>
  <h4>Counter: {{ count }}</h4>
  <h4>Square: {{ squareCount }}</h4>
  
  
  
</template>

<style scoped></style>