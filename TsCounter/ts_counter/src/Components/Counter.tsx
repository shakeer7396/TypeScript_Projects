import React, { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const handleInc = () => {
    setCount(count + 1);
  };
  const handleDec = () => {
    setCount(count > 0 ? count - 1 : 0);
  };
  const handleRes = () => {
    setCount(0);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Counter</h1>
      <div className="text-6xl font-mono mb-8 bg-white shadow-lg rounded-lg p-6">
        {count}
      </div>
      <div className="space-x-4">
        <button
          onClick={handleInc}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow"
        >
          Increment
        </button>
        <button
          onClick={handleDec}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded shadow"
        >
          Decrement
        </button>
        <button
          onClick={handleRes}
          className=" bg-blue-500 hover:bg-blue-600 py-2 px-4 text-white font-bold rounded shadow"
        >
          Reset
        </button>
      </div>
    </div>
  );
};
export default Counter;
