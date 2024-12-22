import React from "react";
import "./App.css";
function App() {
  return (
    <div className="App">
      <h1> Query With getByPlaceholderText & getAllByPlaceholderText</h1>
      <label htmlFor="user-text-1">User Name-1</label>
      <input type="text" id="user-text-1" placeholder="Enter User Name"  defaultValue={"Shakeer"} /> {/*Previously we know input text will test only with the help of label*/}
      
      {/* ONLY ONE TYPE OF TEST CASE WILL WORK AT A BOTH ARE NOT WORKING */}

       <label htmlFor="user-text-2">User Name-2</label>
      <input type="text" id="user-text-2" placeholder="Enter User Name" defaultValue={"Shakeer"} />
      <label htmlFor="user-text-3">User Name-3</label>
      <input type="text" id="user-text-3" placeholder="Enter User Name" defaultValue={"Shakeer"} />
      
    </div>
  );
}
export default App;
