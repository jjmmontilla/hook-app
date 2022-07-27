import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../hooks/useForm";

describe('Pruebas en useForm', () => {
    const initialForm = {
        name: 'JOSEFINA',
        email: 'jjmmontilla@gmail.com'
    };

    test('Debe regresar la info por defect', () => { 
        const { result } = renderHook( () => useForm(initialForm));
        /**
        expect(result.current).toEqual({
            ...initialForm,
            formState: initialForm,
            onInput: expect.any(Function),
            onResetForm: expect.any(Function)
        });*/

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInput: expect.any(Function),
            onResetForm: expect.any(Function)
        });
    });

    test('Debe cambiar el nombre del formulario', () => { 
        const newValue = 'Juan';
        // montar el hook
        // onInputChange() // act, event...
        //expect result.current.name.formSta.name === 'Juan'

        const { result } = renderHook( () => useForm(initialForm));
        const { onInput, onResetForm } = result.current;
        act(() => {
            onInput({target: {name: 'name', value: newValue}});
        });

        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue);
    });

    test('Debe realizar el reset del formulario', () => { 
        const { result } = renderHook( () => useForm(initialForm));
        const { onInput, onResetForm } = result.current;
        const newValue = 'Carlos';

        act(() => {
            onInput({target: {name: 'name', value: newValue}});
            onResetForm();
        });

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);
    });
});