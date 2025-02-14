import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.example.count);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to React Boilerplate</h1>
      <p className="text-gray-700 text-lg mb-6">This boilerplate includes Tailwind CSS, Redux, and React Router.</p>
      
      <div className="flex items-center space-x-4 mb-6">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          onClick={() => dispatch({
            type: "INCREMENT",
            payload: 1
          })}
        >
          Increment
        </button>
        <span className="text-2xl font-semibold">{count}</span>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          onClick={() => dispatch({
            type: "DECREMENT",
            payload: 1
          })}
        >
          Decrement
        </button>
      </div>

      <nav className="flex space-x-4">
        <Link className="text-blue-500 hover:underline" to="/about">About</Link>
        <Link className="text-blue-500 hover:underline" to="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default Home;
