import{fireEvent, render,screen} from "@testing-library/react";
import App from "./App"
import { cleanDb } from "./server";

// Using before & after hooks using with examples


  // calling the function once before running the all test case
// beforeAll(()=>{
//   console.log("** Before all hooks ** ")
// })

// calling the function once before running the Each test case
// beforeEach(()=>{
//   console.log("## Before Each hooks ## ")
// })

//Cleaning the database using with simple logic for beforeEach test case
beforeEach(()=>{
  cleanDb()
})

// Checking while clicking the button data is showing in the dom or not
it("Click event test case",()=>{
  console.log("TestCase-1");
  render(<App />);
  const btn=screen.getByRole("button");
  fireEvent.click(btn);
  expect(screen.getByText("Updated Data showing in the Dom")).toBeInTheDocument();

})
// Checking while clicking the button data is showing in the dom or not
it("Click event test case-2",()=>{
  console.log("TestCase-2");
  render(<App />);
  const btn=screen.getByRole("button");
  fireEvent.click(btn);
  expect(screen.getByText("Updated Data showing in the Dom")).toBeInTheDocument();

})
// Checking while clicking the button data is showing in the dom or not
it("Click event test case-3",()=>{
  console.log("TestCase-3");
  render(<App />);
  const btn=screen.getByRole("button");
  fireEvent.click(btn);
  expect(screen.getByText("Updated Data showing in the Dom")).toBeInTheDocument();

})

// calling the function once after running the all test case
// afterAll(()=>{
//   console.log("afterAll Hooks running")
// })

// calling the function once after running the Each test case
// afterEach(()=>{
//   console.log("afterEach Hook Running Every TestCase")
// });