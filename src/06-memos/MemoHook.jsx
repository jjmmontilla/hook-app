import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (i = 100) => {
  for (let index = 0; index < i; index++) {
    //const element = array[index];
    console.log('Ahi vamos...');
  }
  return `${i} iteraciones realizadas`;
};

export const MemoHook = () => {
    const {counter, increment} = useCounter(10);
    const [display, setDisplay] = useState(false);
    
    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
        <h1> Counter : <small>{ counter }</small> </h1>
        <hr/>

        <h4>{ memorizedValue }</h4>

        <button className="btn btn-primary"
          onClick={() => increment()}>
            +1
        </button>

        <button className="btn btn-primary mr-2" onClick={() => setDisplay(!display)}>
          show {`${ display ? 'Show' : 'Hide'}`}
        </button>
    </>
  )
}
