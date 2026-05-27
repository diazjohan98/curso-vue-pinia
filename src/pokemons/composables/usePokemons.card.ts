import { useQuery } from '@tanstack/vue-query'
import { getPokemonsById } from '../helpers/get-pokemons-by-id'

export const usePokemonsCard = (id: string) => {
  const {
    isLoading,
    data: pokemon,
    isError,
    error,
  } = useQuery({
    queryKey: ['pokemon', id],
    queryFn: () => getPokemonsById(id),
  })

  return {
    isLoading,
    pokemon,
    isError,
    errorMessage: error,
  }
}
