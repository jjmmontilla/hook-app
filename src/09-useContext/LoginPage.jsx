import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

  const {user, setUser} = useContext(UserContext);
 
  return (
    <>
        <h1>LoginPage</h1>
        <hr />

        <pre aria-label="pre">
          { JSON.stringify(user, null, 3) }
        </pre>

        <button 
          className="btn btn-primary"
          aria-label="btn-reset"
          onClick={() => setUser({id: 123, name: 'Josefina', email: 'jjmmontilla@gmail.com'})}>
          Establecer usuario
        </button>
    </>
  )
}
