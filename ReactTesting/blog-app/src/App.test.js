import { render, screen } from "@testing-library/react";
import App from "./App";

test("getAllByRole Testing With Buttons", () => {
  render(<App />);
  const btn1 = screen.getAllByRole("button");
  for(let i=0;i<btn1.length;i++){
    expect(btn1[i]).toBeInTheDocument(); // you can do (btn1[0]) like that or run a for loop and get n number of outputs with using btn1[i]
  } 
});

test("getAllByRole Testing With Select",()=>{
  render(<App />);
  const options= screen.getAllByRole("option");
  for(let i=0;i<options.length;i++){
    expect(options[i]).toBeInTheDocument();
  }
})
