import { render, screen, configure } from "@testing-library/react";
import App from "./App";

configure({testIdAttribute:"element-testid"}); // App custom id use karna haito ya ha configure karna jaroori hai

test("getByTestId testing with id in div",()=>{
  render(<App />)
  const div1 = screen.getByTestId("div-test-id");
  expect(div1).toBeInTheDocument();
})

