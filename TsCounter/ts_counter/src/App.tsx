import React, { useState } from "react";
import Counter from "./Components/Counter";
import Todo_Add_Delete from "./Components/Todo_Add_Delete";
import Todo_Crud from "./Components/Todo_Crud";
import TodoCrudNewInput from "./Components/TodoCrudNewInput";
const App = () => {
  return (
    <div>
      {/* <Counter /> */}
      <Todo_Add_Delete />
      {/* <Todo_Crud /> */}
      {/* <TodoCrudNewInput /> */}
    </div>
  );
};

export default App;
