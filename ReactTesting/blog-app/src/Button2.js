import React, { useState } from "react";
function Button2() {
  const [add, setAdd] = useState("");
  return (
    <div className="Button">
      <h1>Click Event Checking With Button - 2</h1>
      <button type="submit" onClick={()=>setAdd("ClickEvent Checking With Another Functions")} >Button - 2</button>
      <h2>{add}</h2>
    </div>
  );
}
export default Button2;