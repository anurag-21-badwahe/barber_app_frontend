import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  }
  const handleDecrement = () => {
    dispatch(decrement());
  }
  const handleReset = () => {
    dispatch(reset());
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-4 bg-red">Counter App</h1>
      <div className="text-4xl font-semibold text-blue-500 mb-6">{count}</div>
      <div className="flex space-x-4">
        <button
          onClick={handleIncrement}
          className="px-4 py-2 bg-green-500  text-black  rounded-lg hover:bg-green-600"
        >
          Increment
        </button>
        <button
          onClick={handleDecrement}
          className="px-4 py-2 bg-red-500  text-black  rounded-lg hover:bg-red-600"
        >
          Decrement
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-gray-500 text-black rounded-lg hover:bg-gray-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
