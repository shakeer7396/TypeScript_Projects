import {render, screen} from "@testing-library/react";
import App from "./App";

{/*Checking with screen Reading text */}
test("Test First React Test Case", ()=>{
  render(<App />)
  const text = screen.getByText(/First React Test Case/i); //Its a case sensitive but using /i acpt C&c
const title = screen.getByTitle("GoogleImage");
const text2 = screen.getByText(/Software Testing/i);
  expect(text).toBeInTheDocument();
  expect (title).toBeInTheDocument();
  expect (text2).toBeInTheDocument();

});

{/*Checking with the input box Testing*/}
test("Testing input box", ()=>{
  render(<App />)
  let checkInput = screen.getByRole("textbox"); //input is showing or not checking
  let checkInputPlaceHolder=screen.getByPlaceholderText("Enter User Name")

  expect(checkInput).toBeInTheDocument();
  expect(checkInputPlaceHolder).toBeInTheDocument();
  expect(checkInput).toHaveAttribute("name","username");
  expect(checkInput).toHaveAttribute("id","userId");
  expect(checkInput).toHaveAttribute("type","text");
  expect(checkInput).toHaveAttribute("value","Shaik Shafi");
})