import {render} from "@testing-library/react";
import App from "./App";
test("Snapshot Tesing",()=>{
  const container = render(<App />)
  expect(container).toMatchSnapshot();
})