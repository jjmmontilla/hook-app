import { render, screen } from "@testing-library/react";
import { UserContext } from "../../09-useContext/context/UserContext";
import { HomePage } from "../../09-useContext/HomePage";

describe('Pruebas en <HomePage />', () => {
    
    test('Debe de mostrar el componente sin el usuario', () => { 
        render( 
            <UserContext.Provider value={{user: null}}>
                <HomePage />
            </UserContext.Provider>
        );
        
        const pretag = screen.getByLabelText('pre');

        expect(pretag.innerHTML).toBe('null');
        //screen.debug();
    });

    test('Debe de mostrar el componente CON el usuario', () => { 
        const user = {name: 'Josefina Montilla', id: 1 };

        render( 
            <UserContext.Provider value={{user}}>
                <HomePage />
            </UserContext.Provider>
        );
        
        const pretag = screen.getByLabelText('pre');
        expect(pretag.innerHTML).toContain(user.name);
    });
    
});