import { obtenerRobots } from './arreglos';


xdescribe('Pruebas de arreglos', () => {

    it('Debe retornar al menos 3 robots', () => {

        const res = obtenerRobots();
        // expect( res.length ).toBe(3);
        expect( res.length ).toBeGreaterThanOrEqual(3);
    });

    it('Debe existir MegaMan y Ultron', () => {

        const res = obtenerRobots();
        // Si uno de estos dos falla, la prueba falla.
        expect( res ).toContain('MegaMan');
        expect( res ).toContain('Ultron');
    });
})