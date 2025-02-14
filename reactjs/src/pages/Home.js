import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../components/Input";
import Button from "../components/button";

const Home = () => {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.example.count);

  const handleChange = (e) => {
    const value = e.target.value;
    dispatch({ type: "SET_NUMBER", payload: value });
  };

  return (
    <div className="home container">
      <h1 className="underline border-gray-20 border-1">
        Welcome to React Boilerplate {number}
      </h1>

      <Input
        label="Your Name"
        type="text"
        placeholder="Enter your name"
        value={number}
        onChange={handleChange}
      />
            <Button variant="primary" onClick={
        () => dispatch({ type: "INCREMENT" })
      } size="md">Primary</Button>

    </div>
  );
};

export default Home;
