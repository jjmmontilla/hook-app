import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'jjmm',
        email: 'jjmm@gmail.com',
    });

    const { username, email } = formState;

    const onInput = ({target}) => {
        const {name, value } = target;
        setFormState({ ...formState, [name]: value});
    }

    /*useEffect(() => {
        console.log('---> formState first');
    }, [formState]);*/

    useEffect(() => {
        console.log('---> email first');
    }, [email]);
    
    /*useEffect(() => {
      first
    
      return () => {
        second
      }
    }, [third])*/
    

  return (
    <>
        <h1>Formulario simple</h1>
        <hr />

        <input type='text' 
            className='form-control'
            placeholder='Usename'
            name='username'
            defaultValue={username} 
            onChange={(event) => onInput(event)}/>

        <input type='email' 
            className='form-control mt-2' 
            placeholder='Email'
            name='email'
            defaultValue={email}
            onChange={(event) => onInput(event)} /> 
        

        { username == 'jjmm' && <Message /> }
    </>
  )
}
