import { rest } from "msw";
import { screen, render } from "@testing-library/react";

import App from "./App";
import { server } from "./test/server";
import { renderWithProviders } from "./test/test-utils.copy";

describe("App with js", () => {
  it.skip('Reecive data from ikea', async () => {
    renderWithProviders(<App />);
    screen.getByText("Loading IKEA");

    await screen.findByText('Arrives data');
  })
  
  it("handles good response", async () => {
    renderWithProviders(<App />);

    screen.getByText("Loading...");

    await screen.findByText("ivysaur");
    screen.getByText("pokemon");
    
    const img = screen.getByRole("img", {
      name: /ivysaur/i,
    });

    expect(img.src).toBe(
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png"
    );
  });

  it.skip("handles error response", async () => {
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
