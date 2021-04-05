import { Jugador2 } from './jugador2';


describe('Jugador 2 Emit', () => {

    let jugador: Jugador2;

    beforeEach( () => jugador = new Jugador2() );

    it('Debe emitir un evento cuando recibe un daño', () => {

        let nuevoHP = 0;

        jugador.hpCambia.subscribe( (hp:any) => {
            nuevoHP = hp;
        } );

        jugador.recibeDanio(1000);

        expect( nuevoHP ).toBe(0);
    });

    it('Debe emitir un evento cuando recibe daño y sobrevive si daño<100', () => {

        let nuevoHP = 0;

        jugador.hpCambia.subscribe( (hp:any) => nuevoHP = hp );

        jugador.recibeDanio(75);

        expect( nuevoHP ).toBe(25);
    });
})