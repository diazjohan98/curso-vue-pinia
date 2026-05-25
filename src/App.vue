<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/shared/components/NavBar.vue'
import { routerLinks } from '@/router/list-routes'
</script>

<template>
  <header>
    <NavBar title="PokemonApp" :links="routerLinks" />
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  width: 100%;
}
</style>
