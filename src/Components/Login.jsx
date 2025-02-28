import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setEmail("");
    setPassword("");
    setName("");
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser && storedUser.email === email && storedUser.password === password) {
        setMessage("Login Successful");
        setTimeout(() => navigate("/home"), 2000);
      } else {
        setMessage("Invalid email or password");
      }
    } else {
      const user = { name, email, password };
      localStorage.setItem("user", JSON.stringify(user));
      setMessage("Signup Successful! You can now login.");
      setIsLogin(true);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-100">
      <div className="w-96 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-center text-2xl font-semibold mb-5">{isLogin ? "Login" : "Sign Up"}</h2>
        {message && <p className="text-center text-green-600 mb-3">{message}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col">
          {!isLogin && (
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="p-2 mb-3 rounded border border-gray-300"
            />
          )}
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-2 mb-3 rounded border border-gray-300"
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-2 mb-3 rounded border border-gray-300"
          />
          <button type="submit" className="p-2 rounded bg-blue-600 text-white font-semibold cursor-pointer text-lg">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p onClick={handleToggle} className="text-blue-600 text-center mt-4 cursor-pointer">
          {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
};

export default Login;
