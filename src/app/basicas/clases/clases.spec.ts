import { Jugador } from './clases';


describe('Pruebas de clases', () => {
    
    // const jugador = new Jugador();
    let jugador = new Jugador();

    // Ciclos de vida en las pruebas:
    beforeAll( () => {
        // console.log('beforeAll');
        // jugador.hp = 100;
    } );

    beforeEach( () => {
        // console.log('beforeEach');
        // jugador.hp = 100;
        jugador = new Jugador();
    } );

    afterAll( () => {
        // console.log('afterAll');
    } );

    afterEach( () => {
        // console.log('afterEach');
    } );

    
    it('Debe retornar 80 si recibe 20 de daño', () => {
        // const jugador = new Jugador();
        const resp = jugador.recibeDanio(20);

        expect( resp ).toBe(80);
    });

    xit('Debe retornar 50 si recibe 50 de daño', () => {
        // const jugador = new Jugador();
        const resp = jugador.recibeDanio(50);

        expect( resp ).toBe(50);
    });

    it('Debe retornar 0 si recibe 100 o mas de daño', () => {
        // const jugador = new Jugador();
        const resp = jugador.recibeDanio(101);

        expect( resp ).toBe(0);
    });
})