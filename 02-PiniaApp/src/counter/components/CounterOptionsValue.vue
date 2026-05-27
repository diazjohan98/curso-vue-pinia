<script setup lang="ts">
import { useCounterOptionsStore } from '@/store/counter.options';



const counter = useCounterOptionsStore()

</script>

<template>
  <h1>El valor del {{ counter.count }}</h1>
  <h4>Ultimo cambio: {{ counter.lastChange }}</h4>
</template>

<style scoped>

</style>