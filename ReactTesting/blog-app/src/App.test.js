import {render,screen} from "@testing-library/react"
import App from "./App"

test("First Text Testing",()=>{
  render(<App />)
  let InputCheck =screen.getByRole("textbox");
  let InputPlaceholder = screen.getByPlaceholderText("Enter User Name");

  expect(InputCheck).toBeInTheDocument();
  expect(InputPlaceholder).toBeInTheDocument();
  
})

it("Second Test Case Checking",()=>{
  render(<App />)
  let InputCheck =screen.getByRole("textbox");
  expect(InputCheck).toHaveAttribute("name","UserName");
  expect(InputCheck).toHaveAttribute("id","UserId");
  expect(InputCheck).toHaveAttribute("value","test");

})