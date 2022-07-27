import React from "react";

export const ShowUncrement = React.memo( ({increment}) => {

    console.log('me volvi a generar');
    
  return (
    <>
        <button className="btn btn-primary" onClick={ () => increment(5) }>
            Incrementar
        </button>
    </>
  )
})
