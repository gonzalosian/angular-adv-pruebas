import { usuarioIngresado } from './booleanos';

describe('Pruebas de booleanos', () => {
    it('Debe retornar true', () => {
        const res = usuarioIngresado();
        expect( res ).toBeTruthy();
        // expect( res ).not.toBeFalsy();
    })
})