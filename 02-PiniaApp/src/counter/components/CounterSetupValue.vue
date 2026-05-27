<script setup lang="ts">
import { useCounterSetupStore } from '@/store/counter-setup';



const counter = useCounterSetupStore()

</script>

<template>
  <h1>El valor del {{ counter.count }}</h1>
  <h4>Ultimo cambio: {{ counter.lastChange }}</h4>
</template>

<style scoped>

</style>