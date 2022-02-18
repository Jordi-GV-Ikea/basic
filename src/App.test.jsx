import { screen} from "@testing-library/react";

import App from "./App";
import { renderWithProviders } from "./test/test-utils";

describe("APP", () => {
  it('Reecive data from ikea', async () => {
    renderWithProviders(<App/>);
    screen.getByText("Loading IKEA...");

    await screen.findByText('Arrives data');
  })
  
});
