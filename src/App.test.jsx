import { rest } from "msw";
import { screen, render } from "@testing-library/react";

import App from "./App";
import Pokemon from "./components/Pokemon";
import IkeaGetData from "./components/Ikea";
import { server } from "./test/server";
import { renderWithProviders } from "./test/test-utils.copy";

describe("App with js", () => {
  it('Reecive data from ikea', async () => {
    renderWithProviders(<IkeaGetData/>);
    screen.getByText("Loading IKEA");

    await screen.findByText('Arrives data');
  })
  
  it.skip("handles good response for Pokemon", async () => {
    renderWithProviders(<Pokemon/>);

    screen.getByText("Loading...");

    await screen.findByText("ivysaur");
    screen.getByText("Pokemon API");
    
    const img = screen.getByRole("img", {
      name: /ivysaur/i,
    });

    expect(img.src).toBe(
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png"
    );
  });

  it.skip("handles error response for Pokemon", async () => {
    // force msw to return error response
    server.use(
      rest.get("https://pokeapi.co/api/v2/pokemon/ivysaur", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    renderWithProviders(<App />);

    screen.getByText("Loading...");

    await screen.findByText("Oh no, there was an error");
  });
});
