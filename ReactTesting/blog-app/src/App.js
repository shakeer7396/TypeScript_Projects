import React, { useState } from "react";
import "./App.css";

function App() {
  const [add, setAdd] = useState("");
  return (
    <div className="App">
      {/*Changing the Event with the help of clicking event */}
      <h1>SnapShot Testing</h1>
      <button onClick={()=>setAdd("Updated Data showing in the Dom")}>Update Data</button>
      <h2>{add}</h2>
    </div>
  );
}

export default App;
