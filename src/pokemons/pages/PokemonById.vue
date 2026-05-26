<script setup lang="ts">
import { useRoute } from 'vue-router'
import { usePokemonsCard } from '../composables/usePokemons.card.ts'
// import { computed } from 'vue'

const route = useRoute()

const { id } = route.params
// const pokemonId = computed(() => route.params.id as string)

const { pokemon, isLoading, isError, errorMessage } = usePokemonsCard(id.toString())
</script>

<template>
  <h1 v-if="isLoading">Loading</h1>

  <div v-else-if="isError">
    {{ errorMessage }}
  </div>

  <div v-else-if="pokemon">
    <h1>{{ pokemon.name }}</h1>

    <div class="character-container">
      <img :src="pokemon.frontSprite" :alt="pokemon.name" />
    </div>
  </div>
</template>

<style scoped>
.character-container {
  display: flex;
  flex-direction: row;
}

img {
  width: 150px;
  border-radius: 5px;
}
</style>
