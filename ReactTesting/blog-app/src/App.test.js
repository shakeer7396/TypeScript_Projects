import{fireEvent, render,screen} from "@testing-library/react";
import App from "./App"
// Checking while clicking the button data is showing in the dom or not
it("Click event test case",()=>{
  render(<App />);
  const btn=screen.getByRole("button");
  fireEvent.click(btn);
  expect(screen.getByText("Updated Data showing in the Dom")).toBeInTheDocument();

})