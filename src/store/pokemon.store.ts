import type { Pokemon } from '@/pokemons/interfaces'

interface store {
  // State
  pokemons: {
    list: Pokemon[]
    count: number
    isLoading: boolean
    hasError: boolean
    errorMessage: string
  }

  //Actions / Methods

  startLoadingPokemons: () => void
  loadedPokemons: (data: Pokemon[]) => void
  loadPokemonsFailed: (error: string) => void
}
