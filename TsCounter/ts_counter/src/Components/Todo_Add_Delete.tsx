import React, { useState } from "react";

interface Todo {
  id: number;
  text: string;
}

const Todo_Add_Delete = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");

  const handleAddTodo = () => {
    if (input.trim()) {
      const newTodo: Todo = { id: Date.now(), text: input };
      setTodos([...todos, newTodo]);
      setInput("");
    }
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">To-Do App</h1>

      <div className="flex mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
          className="border rounded-l px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-r"
        >
          Add
        </button>
      </div>

      <ul className="w-full max-w-md">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-white p-4 mb-2 rounded shadow"
          >
            <span>{todo.text}</span>
            <button
              onClick={() => handleDeleteTodo(todo.id)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold px-3 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo_Add_Delete;
