import { useState } from "react";

export const useCounter = (initial = 10, value) => {
  const [counter, setCounter] = useState(initial);

  const increment = (value = 1) => {
    setCounter((current) => current + value);
  }

  const reset = () => {
    setCounter(initial);
  }

  const decrement = (value = 1) => {
    if (counter == 0) return;
    setCounter((current) => current - value);
  }

  return {
    counter,
    increment,
    reset,
    decrement
  }
}
