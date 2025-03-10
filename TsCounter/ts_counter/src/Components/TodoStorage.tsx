// import React, { useState } from "react";

// interface ITodo {
//   id: number;
//   text: string;
//   completed: boolean;
// }

// const TodoStorage = () => {
//   const [todos, setTodos] = useState<ITodo[]>([]);
//   const [input, setInput] = useState<string>("");

//   const handleAddTodo = () => {
//     if (input.trim()) {
//       const newTodo: ITodo = { id: Date.now(), text: input, completed: false };
//       setTodos([...todos, newTodo]);
//       setInput("");
//     }
//   };

//   const handleDeleteTodo = (id: number) => {
//     setTodos(todos.filter((todo) => todo.id !== id));
//   };

//   const handleToggleComplete = (id: number) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   return (
//     <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
//       <h1 className="text-3xl font-bold mb-6">To-Do App</h1>

//       <div className="flex mb-4">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Add a new task..."
//           className="border rounded-l px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <button
//           onClick={handleAddTodo}
//           className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-r"
//         >
//           Add
//         </button>
//       </div>

//       <ul className="w-full max-w-md">
//         {todos.map((todo) => (
//           <li
//             key={todo.id}
//             className={`flex justify-between items-center bg-white p-4 mb-2 rounded shadow ${todo.completed ? 'line-through text-gray-500' : ''}`}
//           >
//             <div className="flex items-center">
//               <input
//                 type="checkbox"
//                 checked={todo.completed}
//                 onChange={() => handleToggleComplete(todo.id)}
//                 className="mr-2"
//               />
//               <span>{todo.text}</span>
//             </div>
//             <button
//               onClick={() => handleDeleteTodo(todo.id)}
//               className="bg-red-500 hover:bg-red-600 text-white font-bold px-3 py-1 rounded"
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoStorage;

import React, { useState } from "react";

const TodoStorage = () => {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleAdd = () => {
    if (input.trim()) {
      const newTodo: ITodo = { id: Date.now(), text: input, completed: false };
      setTodos([...todos, newTodo]);
      setInput("");
    }
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <h1>TodoStorage</h1>

      <div className="">
        <input
          type="text"
          placeholder="Add new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className=""
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex item-center justify-between" >
            <div className="flex item-center justify-between">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggle(todo.id)}
              />
              <span>{todo.text}</span>
            </div>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoStorage;

interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}
