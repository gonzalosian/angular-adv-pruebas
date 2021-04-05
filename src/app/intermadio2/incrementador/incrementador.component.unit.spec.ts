import { IncrementadorComponent } from './incrementador.component';


describe('Incrementador Component unit', () => {

    let component: IncrementadorComponent;

    beforeEach( () => component = new IncrementadorComponent() );

    it('No debe pasarse de 100 el progreso', () => {
        
        component.progreso = 50;
        component.cambiarValor(5);

        expect( component.progreso ).toBe(55);
    })
})