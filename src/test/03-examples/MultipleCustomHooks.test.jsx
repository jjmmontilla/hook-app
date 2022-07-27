import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../03-examples/MultipleCustomHooks";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from '../../hooks/useFetch';

jest.mock('../../hooks/useFetch');
jest.mock('../../hooks/useCounter');

describe('Pruebas en <MultipleCustomHook', () => {
    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1, 
        increment: mockIncrement
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Debe de mostrar el componente por defecto', () => {
        useFetch.mockReturnValue({
            data: null, 
            isLoading: true,
            hasError: null
        })

        render(<MultipleCustomHooks />);

        expect( screen.getByText('Loading...'));
        expect( screen.getByText('Breaking Quotes'));
        const nextButton = screen.getByRole('button', {name: 'Next quote'});

        expect(nextButton.disabled).toBeTruthy();
    });

    test('Debe de mostrar un Quote', () => {
        useFetch.mockReturnValue({
            data: [{ author: 'Josefina', quote: 'Hola Mundo'}], 
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks />);

        expect( screen.getByText('Hola Mundo')).toBeTruthy();
        expect( screen.getByText('Josefina')).toBeTruthy();

        const nextBtn = screen.getByRole('button', {name: 'Next quote'});
        expect(nextBtn.disabled).toBeFalsy();
    });

    test('Debe llamar la funcion de incrementar', () => { 
        useFetch.mockReturnValue({
            data: [{ author: 'Josefina', quote: 'Hola Mundo'}], 
            isLoading: false,
            hasError: null
        });
    
        render(<MultipleCustomHooks />);
        //screen.debug();

        const btnNext = screen.getByRole('button', {name: 'Next quote'});
        fireEvent.click(btnNext);

        expect(mockIncrement).toHaveBeenCalled();
    });
});