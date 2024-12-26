import React, { useState } from "react";

const AuthForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = () => {
    if (isLogin) {
      console.log("Logging in with", { email, password });
    } else {
      console.log("Signing up with", { email, password });
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-5 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-5">
        {isLogin ? "Login" : "Sign Up"}
      </h1>

      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Enter your email"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Enter your password"
        />
      </div>

      <button
        onClick={handleAuth}
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {isLogin ? "Login" : "Sign Up"}
      </button>

      <p className="text-center text-gray-500 mt-4">
        {isLogin ? "Don't have an account?" : "Already have an account?"} {" "}
        <span
          onClick={() => setIsLogin(!isLogin)}
          className="text-blue-500 cursor-pointer hover:underline"
        >
          {isLogin ? "Sign Up" : "Login"}
        </span>
      </p>
    </div>
  );
};

export default AuthForm;