import { mensaje } from './string';
// describe('Pruebas de Strings');
// it('Debe regresar un string');

describe( 'Pruebas de string', () => {

    it( 'Debe regresar un string', () => {
        const resp = mensaje('Gonzalo');

        expect( typeof resp ).toBe('string');
    } )


    it( 'Debe retornar un saludo con el nombre enviado', () => {
        const nombre = 'Gonzalo'
        const resp = mensaje( nombre );

        expect( resp ).toContain( nombre );
    } )
} )