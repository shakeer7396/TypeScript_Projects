import {render, screen} from "@testing-library/react";
import App from "./App";

test("Test First React Test Case", ()=>{
  render(<App />)
  const text = screen.getByText(/First React Test Case/i); //Its a case sensitive but using /i acpt C&c
const title = screen.getByTitle("GoogleImage");
const text2 = screen.getByText(/Software Testing/i);
  expect(text).toBeInTheDocument();
  expect (title).toBeInTheDocument();
  expect (text2).toBeInTheDocument();

});