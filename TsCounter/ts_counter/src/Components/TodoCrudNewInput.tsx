// src/components/TodoApp.tsx
import React, { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoCrudNewInput: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState<string>("");

  const addTodo = () => {
    if (!newTodo.trim()) return;
    const newTodoItem: Todo = {
      id: Date.now(),
      text: newTodo.trim(),
      completed: false,
    };
    setTodos([...todos, newTodoItem]);
    setNewTodo("");
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const startEditing = (id: number, text: string) => {
    setEditingId(id);
    setEditingText(text);
  };

  const saveEdit = (id: number) => {
    if (!editingText.trim()) return;
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, text: editingText.trim() } : todo
      )
    );
    setEditingId(null);
    setEditingText("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-5">Todo App</h1>

      <div className="flex gap-2 mb-5">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="flex-grow p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Add a new task"
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex items-center justify-between p-2 border rounded ${
              todo.completed ? "bg-green-100" : "bg-white"
            }`}
          >
            {editingId === todo.id ? (
              <input
                type="text"
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
                className="flex-grow p-2 border rounded focus:outline-none focus:ring focus:ring-yellow-300"
              />
            ) : (
              <span
                onClick={() => toggleComplete(todo.id)}
                className={`flex-grow cursor-pointer ${
                  todo.completed ? "line-through text-gray-500" : ""
                }`}
              >
                {todo.text}
              </span>
            )}

            <div className="flex gap-2">
              {editingId === todo.id ? (
                <button
                  onClick={() => saveEdit(todo.id)}
                  className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => startEditing(todo.id, todo.text)}
                  className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                  Edit
                </button>
              )}

              <button
                onClick={() => deleteTodo(todo.id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <p className="text-center text-gray-500">No tasks yet. Add one above!</p>
      )}
    </div>
  );
};

export default TodoCrudNewInput;
