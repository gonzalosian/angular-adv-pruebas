import { sumarEnteros, incrementar } from './numeros';

describe('Pruebas de números', () => {
    it('Debe regresar un entero', () => {
        const resultado = sumarEnteros(12, 2.3);

        expect( typeof resultado ).toBe('number');
    }  );

    it('Retorna 100 si nº es mayor a 100', () => {
        const res = incrementar(300);

        expect( res ).toBe(100);
    })

    it('Retorna nº+1 si nº es menor a 100', () => {
        const numero = 65;
        const res = incrementar( numero );

        expect( res ).toBe( 66 );
    })
} );
