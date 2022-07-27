import { useRef } from "react";

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClick = () => {
        inputRef.current.select();
    }

  return (
    <>
        <h1>Focus Screen</h1>    
        <hr />
        
        <input
            type="text"
            placeholder="Ingresa tu nombre"
            className="form-control" />

        <input
            ref={inputRef} 
            type="text"
            placeholder="Ingresa tu nombre"
            className="form-control mt-2" />

        <button className="btn btn-primary mt-2"
            onClick={ onClick } >
            Set Focus
        </button> 
    </>
  )
}
