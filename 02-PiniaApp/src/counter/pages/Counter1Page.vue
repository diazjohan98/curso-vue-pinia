<script setup lang="ts">
import { useCounterOptionsStore } from '@/store/counter.options.ts' 
import { storeToRefs } from 'pinia';
import CounterOptionsValue from '../components/CounterOptionsValue.vue';

  const counterStore = useCounterOptionsStore();
  const { count, squareCount} = storeToRefs( counterStore )
  const { increment, incrementBy } = counterStore;
  const resetStore = () => counterStore.$reset();
</script>
<template>
  <h1>Pinia options</h1>
  <h4>Counter: {{ count }}</h4>
  <h4>Square: {{ squareCount }}</h4>
  
  <br />
  <button @click="increment()">+1</button>
  <button @click="incrementBy(2)">+2</button>
  <button @click="incrementBy(5)">+5</button>
  <button @click="resetStore()">Reset</button>

  <br>
  <CounterOptionsValue />
  
</template>

<style scoped>
button {
  margin-left: 5px;
}

</style>