<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/shared/components/NavBar.vue'
import { RouterLink } from '@/router/list-routes'

import { pokemonsRoute } from '../router'

const routerLinks: RouterLink[] =
  pokemonsRoute.children?.map(({ name, path, props }) => {
    const { title, visible } = props as { title: string; visible: boolean }

    return {
      name: name?.toString ?? '',
      path: path,
      title: title,
      visible: visible,
    }
  }) || []
</script>

<template>
  <NavBar :links="routerLinks" is-secondary />
  <div>
    <!-- <h4>Pokemon Layout</h4> -->
    <!-- <suspense> -->
    <RouterView />
    <!--
      <template #fallback> Loading... </template>
    </suspense> -->
  </div>
</template>
