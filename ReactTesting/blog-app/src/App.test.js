import { render, screen } from "@testing-library/react";
import App from "./App";

test("Testing with getByText for single element", () => {
  render(<App />);
  const text = screen.getByText("Click Me");
  const h1 = screen.getByText("Get By Text");
  const p = screen.getByText("Testing");
  expect(text).toBeInTheDocument();
  expect(h1).toBeInTheDocument();
  expect(p).toBeInTheDocument();
  expect(p).toHaveClass("ptag");
  expect(h1).toHaveAttribute("id");
  expect(p).toHaveAttribute("id","p_tag");
});

// If you want write seperate test cases for h1 & p
// test("Testing with getAllByText for multiple element",()=>{
//   render(<App />)
//   const text=screen.getAllByText("Click Me");
//   const h1 =screen.getAllByText("Get By Text")
//   const p =screen.getAllByText("Testing")
//   for(let i=0;i<text.length;i++){
//     expect(text[i]).toBeInTheDocument();
//     expect(h1[i]).toBeInTheDocument();
//     expect(p[i]).toBeInTheDocument();
//   }

// })
