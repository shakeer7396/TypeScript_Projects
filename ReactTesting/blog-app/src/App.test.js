import App from "./App";
import { fireEvent, render, screen } from "@testing-library/react";

it("Input onChange event testing", () => {
  render(<App />);
  let InpuOnChangetest = screen.getByRole("textbox");
  // fireEvent will help to changing the value 
  fireEvent.change(InpuOnChangetest, { target: { value: "a" } }); // Targetting the value
  expect(InpuOnChangetest.value).toBe("a");
});
