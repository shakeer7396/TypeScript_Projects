import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";
import Button2 from "./Button2";

//Button Created in Other seperate Component
test("Button OnClick Event Checking", () => {
  render(<Button />);
  let btnClickEvent = screen.getByRole("button");
  fireEvent.click(btnClickEvent);
  expect(
    screen.getByText("Updated Data Showing In The Screen")
  ).toBeInTheDocument();
});

//Button -2 Created in Other Seperate Component
test("Button OnClick Event Checking With Seperate Component", () => {
  render(<Button2 />);
  let ClickEvent = screen.getByRole("button");
  fireEvent.click(ClickEvent);
  expect(
    screen.getByText("ClickEvent Checking With Another Functions")
  ).toBeInTheDocument();
});
