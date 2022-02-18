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
  rest.get("https://isx-customer-services-pages-dppgxr4krq-ey.a.run.app/app-data?market=netherlands&environment=master", (req, res, ctx) => {
    const query = req.url.searchParams;
    const market = query.get("market");
    const environment = query.get("environment") ; 
    const mockApiResponse = {
      pages : "https://isx-customer-services-pages-dppgxr4krq-ey.a.run.app/app-data?market=netherlands&environment=master"
    }
    return res(ctx.json(mockApiResponse))
  })
]

export { handlers }
