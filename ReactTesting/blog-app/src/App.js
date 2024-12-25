import React from "react";
import "./App.css";
function App() {
  return (
    <div className="App">
      <h1> Query With getByTestId</h1>
      {/* Every element have unique id its first priority means id="divTag" but adding another attribute id for any other purpose like (data-testid="Anything add") you Over ride this like (element-testid="div-test-id") then use configure in testing file then only it will work */}
      <div id="divTag" element-testid="div-test-id" >Div Testing With TestId</div>
         
    </div>
  );
}
export default App;
