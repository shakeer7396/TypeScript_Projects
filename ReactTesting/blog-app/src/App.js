import React, { useState } from "react";
import "./App.css";

function App() {
  const [add, setAdd] = useState("");
  return (
    <div className="App">
      {/*Changing the value with the input box using onChange */}
      <input type="text" value={add} onChange={(e) => setAdd(e.target.value)} />
    </div>
  );
}

export default App;
