import { rest } from "msw";
import { screen, render } from "@testing-library/react";
import App from "../App";
import Pokemon from "./Pokemon";
import { server }from "../test/server";
import { renderWithProviders } from "../test/test-utils.copy";

describe("POKEMON", () => {
  it("handles good response for Pokemon", async () => {
    renderWithProviders(<Pokemon />);

    screen.getByText("Loading Pokemon...");

    await screen.findByText("ivysaur");
    screen.getByText("Pokemon API");

    const img = screen.getByRole("img", {
      name: /ivysaur/i,
    });

    expect(img.src).toBe(
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png"
    );
  });

  it("handles error response for Pokemon", async () => {
    // force msw to return error response
    server.use(
      rest.get("https://pokeapi.co/api/v2/pokemon/ivysaur", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    renderWithProviders(<Pokemon />);

    screen.getByText("Loading Pokemon...");

    await screen.findByText("Oh no, there was an error");
  });
});
