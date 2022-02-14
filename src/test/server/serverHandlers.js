import { rest } from 'msw'

const handlers = [
  rest.get('https://pokeapi.co/api/v2/pokemon/ivysaur', (req, res, ctx) => {
    const mockApiResponse = {
      species: {
        name: 'ivysaur',
      },
      sprites: {
        front_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png',
      },
    }
    return res(ctx.json(mockApiResponse))
  }),
]

export { handlers }
