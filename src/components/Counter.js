import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment(5))}>increment</button>
      <button onClick={() => dispatch(decrement(5))}>decrement</button>
    </div>
  );
};

export default Counter;
