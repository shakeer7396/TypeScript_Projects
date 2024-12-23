import React from "react";
import "./App.css";
function App() {
  return (
    <div className="App">
      <h1> Query With getByText</h1>
      <button>Click Me</button>
      <h1 id="h1_tag">Get By Text</h1>
      <p className="ptag" id="p_tag">
        Testing
      </p>

      {/* <h1> Query getAllByText</h1>
      <button>Click Me</button>
      <h1>Get By Text</h1>
      <p>Testing</p>

      <button>Click Me</button>
      <h1>Get By Text</h1>
      <p>Testing</p> */}
    </div>
  );
}
export default App;
