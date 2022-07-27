import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
    const { counter, increment, reset, decrement } = useCounter(12);

  return (
    <>
      <h1>Counter with Hook: { counter }</h1>

      <button className="btn btn-primary" onClick={() => increment(2)}> +2</button>
      <button className="btn btn-primary" onClick={reset}> Reset</button>
      <button className="btn btn-primary" onClick={()=> decrement(1)}> -1</button>
    </>
  )
}
