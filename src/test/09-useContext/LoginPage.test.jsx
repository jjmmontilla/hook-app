import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../09-useContext/context/UserContext";
import { LoginPage } from "../../09-useContext/LoginPage";


describe('Prueba en <LoginPage />', () => {
    const setUserMock = jest.fn();

    test('Debe de mostrar el componente sin el usuario', () => { 
        render(
            <UserContext.Provider value={{user: null}}>
                <LoginPage />
            </UserContext.Provider>
        );

        const preElem = screen.getByLabelText('pre');
        expect(preElem.innerHTML).toBe('null');
    });

    test('Debe de llamar al setUser al hacer click en btn', () => { 
        const user = {
            name: 'Josefina',
            id: 1
        };

        render(
            <UserContext.Provider value={{user, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        );
        
        const btn = screen.getByLabelText('btn-reset');
        fireEvent.click(btn);

        expect(setUserMock).toHaveBeenCalledWith({id: 123, name: 'Josefina', email: 'jjmmontilla@gmail.com'});
    });
});