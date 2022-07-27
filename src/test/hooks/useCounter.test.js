import { act, renderHook } from '@testing-library/react';
import { useCounter } from "../../hooks/useCounter";

describe('Pruebas en el useCounter', () => {
    test('Debe retornar los valores por defector', () => {
        const {result} = renderHook(() => useCounter());
        const {counter, decrement, increment, reset } = result.current;

        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    test('Debe de generar el counter con el valor de 100', () => {
        const {result} = renderHook(() => useCounter(100));
        const {counter } = result.current;
        expect(counter).toBe(100);
    });

    test('Debe Incrementar el contador', () => {
        const {result} = renderHook(() => useCounter(100));
        const {counter, decrement, increment, reset } = result.current;

        act(() => {
            increment();
            increment(2);
        });

        expect(result.current.counter).toBe(103);
    });

    test('Debe Decrement el contador', () => {
        const {result} = renderHook(() => useCounter(100));
        const {counter, decrement, increment, reset } = result.current;

        act(() => {
            decrement();
            decrement(2);
        });

        expect(result.current.counter).toBe(97);
    });

    test('Debe realizar el reset', () => {
        const {result} = renderHook(() => useCounter(100));
        const {counter, decrement, increment, reset } = result.current;

        act(() => {
            decrement();
            reset();
        });

        expect(result.current.counter).toBe(100);
    });
});