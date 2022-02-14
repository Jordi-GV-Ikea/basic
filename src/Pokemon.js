import { useGetPokemonByNameQuery } from './services/pokemon'

export default function Pokemon() {
  const { data, error, isLoading } = useGetPokemonByNameQuery('ivysaur')
  if (data) console.log('id',data.id)
  return (
    < >
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
          <p>pokemon</p>
        </>
      ) : null}
    </>
  )
}

/* 
{
"name": "bulbasaur",
"url": "https://pokeapi.co/api/v2/pokemon/1/"
},
{
"name": "ivysaur",
"url": "https://pokeapi.co/api/v2/pokemon/2/"
},
{
"name": "venusaur",
"url": "https://pokeapi.co/api/v2/pokemon/3/"
},
*/