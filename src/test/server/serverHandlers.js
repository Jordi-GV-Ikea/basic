import { rest } from 'msw'

const handlers = [
  rest.get("https://isx-customer-services-pages-dppgxr4krq-ey.a.run.app/app-data?market=netherlands&environment=master", (req, res, ctx) => {
    const query = req.url.searchParams;
    const market = query.get("market");
    const environment = query.get("environment") ; 
    // TODO fix this configuration
    const mockApiResponse = {
      pages : "https://isx-customer-services-pages-dppgxr4krq-ey.a.run.app/app-data?market=netherlands&environment=master"
    }
    return res(ctx.json(mockApiResponse))
  })
]

export { handlers }
