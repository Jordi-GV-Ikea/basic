import { rest } from 'msw'
import { screen, render } from '@testing-library/react'

import App from './App'
import { server } from './test/server'
import { renderWithProviders } from './test/test-utils.copy'

describe('App with js', () => {
  it('handles good response', async () => {
    renderWithProviders(<App />)

    screen.getByText('Loading...')

    await screen.findByText('bulbasaur')
expect(true).toBe(true);
    const img = screen.getByRole('img', {
      name: /bulbasaur/i,
    }) 

    expect(img.src).toBe(
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png'
    )
  })

  it('handles error response', async () => {
    // force msw to return error response
    server.use(
      rest.get(
        'https://pokeapi.co/api/v2/pokemon/bulbasaur',
        (req, res, ctx) => {
          return res(ctx.status(500))
        }
      )
    )

    renderWithProviders(<App />)

    screen.getByText('Loading...')

    await screen.findByText('Oh no, there was an error')
  })
})
