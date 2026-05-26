<script setup lang="ts">
import type { RouterLink } from '../../router/list-routes'
import { computed } from 'vue'
interface Props {
  title?: string
  links: RouterLink[]
  isSecondary?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: 'ComboApp',
  isSecondary: false,
})

const links = computed(() => props.links.filter((link) => link.visible))
</script>

<template>
  <nav>
    <template v-if="!$props.isSecondary">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" height="25" />
      <!-- <span v-if="$props.title"> {{ $props.title }}</span> -->
      <span> {{ $props.title }}</span>
    </template>

    <RouterLink v-for="link of links" :key="link.path" :to="link.path">
      {{ link.title }}
    </RouterLink>
  </nav>
</template>

<style scoped>
nav {
  aling-items: flex-start;
  display: flex;
  font-size: 12px;
  margin-top: 10px;
  text-aling: center;
  witdh: 100%;
}

img {
  margin-right: 5px;
}
span {
  margin-right: 10px;
}
a {
  margin-right: 5px;
}

nav a.router-link-active {
  color: var(--color-text);
}

nav a.router-link-exac-active:hover {
  background-color: transparent;
}
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}
nav a:firt-of-type {
  border: 0;
}
</style>
