import { render, screen } from "@testing-library/react";
import App from "./App";

// ONLY ONE TYPE OF TEST CASE WILL WORK AT A BOTH ARE NOT WORKING
//Single Input Placeholder 
// test("getByPlaceholder Text Testing",()=>{
//   render(<App />)
//   const input=screen.getByPlaceholderText("Enter User Name")
//     expect(input).toBeInTheDocument();
//     expect(input).toHaveValue("Shakeer")
// })

// Multiple Input Placeholder
test("getAllByPlaceholder Text Testing",()=>{
  render(<App />)
  const input2=screen.getAllByPlaceholderText("Enter User Name")
  for(let i=0;i<input2.length;i++){
    expect(input2[i]).toBeInTheDocument();
    expect(input2[i]).toHaveValue("Shakeer")
  }
})
