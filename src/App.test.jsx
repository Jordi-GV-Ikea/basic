import { rest } from "msw";
import { screen, render } from "@testing-library/react";

import App from "./App";
import IkeaGetData from "./components/Ikea";
import { server } from "./test/server";
import { renderWithProviders } from "./test/test-utils.copy";

describe("APP", () => {
  it('Reecive data from ikea', async () => {
    renderWithProviders(<App/>);
    screen.getByText("Loading IKEA...");
    // screen.getByText("Loading Pokemon...");

    await screen.findByText('Arrives data');
   //  await screen.findByText("ivysaur");
  })
  
});
