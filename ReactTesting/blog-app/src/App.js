import React,{useState} from "react";
import "./App.css";
import handleOtherMethod from "./OtherFunMethod";


function App() {
  const [data,setData] = useState("");

  //First Method for testing functional components in same application
  const handleData =()=>{
    setData("Hello");
  }
  //You use another function its difficult to write test case so keep outside another file and import it
  //creating new file OtherFunMethod then import it
  // Another method is use Class Components

  return (
    <div className="App">
    <h1>Functional Compnents Testing</h1>
    <button data-testid="btn1" onClick={handleData}>Update</button>
    <button onClick={handleOtherMethod}>Print</button>
    <h2>{data}</h2>
    </div>
  );
}

export default App;
