import { RUTAS } from './app.rutes';
import { MedicoComponent } from '../../intermadio2/medico/medico.component';


describe('Rutas principales', () => {

    it('Debe existir la ruta /medico/:id', () => {

        expect( RUTAS ).toContain( { path: 'medico/:id', component: MedicoComponent } );
    });


    // it('Debe existir la ruta /medico/:id', () => {

    //     expect( RUTAS ).toContain( { path: 'medico/:id', component: MedicoComponent } );
    // })
})