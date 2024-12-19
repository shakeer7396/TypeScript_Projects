import { fireEvent, render,screen } from "@testing-library/react";
import App from "./App";
import handleOtherMethod from "./OtherFunMethod";

test("Functional Components Testcase-1", () => {
  render(<App />);
  const btn = screen.getByTestId("btn1");
  fireEvent.click(btn);
  expect(screen.getByText("Hello")).toBeInTheDocument();
});

test("Function Component Test OtherMethod",()=>{
  expect(handleOtherMethod()).toMatch("Hi");
})