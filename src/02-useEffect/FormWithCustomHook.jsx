
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
    const {formState, onInput, onResetForm } = useForm({
        username: 'jjmm',
        email: 'jjmm@gmail.com',
        password: ''
    });

    const { username, email, password } = formState;

  return (
    <>
        <h1>Formulario Con Custom Hook</h1>
        <hr />

        <input type='text' 
            className='form-control'
            placeholder='Username'
            name='username'
            value={username} 
            onChange={(event) => onInput(event)}/>

        <input type='email' 
            className='form-control mt-2' 
            placeholder='Email'
            name='email'
            value={email}
            onChange={(event) => onInput(event)} /> 
        
        <input type='password' 
            className='form-control mt-2' 
            placeholder='Contraseña'
            name='password'
            value={password}
            onChange={(event) => onInput(event)} /> 
        
        <button onClick={ onResetForm } className="btn btn-primary mt-2">Reset</button>
    </>
  )
}
