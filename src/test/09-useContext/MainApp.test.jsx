import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { MainApp } from "../../09-useContext/MainApp";

describe('Prueba en <MainApp />', () => { 
    test('Debe mostrar el homepage', () => { 
        render( 
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );

        //screen.debug();
        expect(screen.getByText('HomeApp')).toBeTruthy();
    }); 

    test('Debe mostrar el LoginPage', () => { 
        render( 
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );

        //screen.debug();
        expect(screen.getByText('LoginPage')).toBeTruthy();
    });
    
    test('Debe mostrar el AboutPage', () => { 
        render( 
            <MemoryRouter initialEntries={['/about']}>
                <MainApp />
            </MemoryRouter>
        );

        //screen.debug();
        expect(screen.getByText('AboutPage')).toBeTruthy();
    });

    test('Debe mostrar el AboutPage cuando no existe la ruta', () => { 
        render( 
            <MemoryRouter initialEntries={['/23424ff']}>
                <MainApp />
            </MemoryRouter>
        );

        //screen.debug();
        expect(screen.getByText('AboutPage')).toBeTruthy();
    });
});