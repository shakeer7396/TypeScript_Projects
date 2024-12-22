import React, { useState } from "react";

function Button() {
  const [add, setAdd] = useState("");
  return (
    <div className="Button">
      <h1>Click Event Checking With Button - 1</h1>
      <button type="submit" onClick={()=>setAdd("Updated Data Showing In The Screen")} >Button - 1</button>
      <h2>{add}</h2>
    </div>
  );
}

export default Button;