import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from, EMPTY, throwError, empty } from 'rxjs';


describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null as any);

    beforeEach( () => {
        componente = new MedicosComponent(servicio);
    });

    beforeEach( () => {
        
    });


    it('Init: debe cargar los médicos', () => {
        
        const medicos = ['medico1', 'medico2', 'medico3'];

        spyOn( servicio, 'getMedicos' ).and.callFake( () => {
            return from( [ medicos ] );
        } );

        componente.ngOnInit();

        expect( componente.medicos.length ).toBeGreaterThan(0);
    });


    it('Debe llamar al servidor para agregar un médico', () => {

        const espia = spyOn( servicio, 'agregarMedico' ).and.callFake( medico => {
            return EMPTY;
        } )

        componente.agregarMedico();

        expect( espia ).toHaveBeenCalled(); // verifica que 'espia' haya sido llamado.
    });


    it('Debe agregar un nuevo médico al arreglo de médicos', () => {

        // Este va a ser el médico de la respuesta a la DB.
        const medico = { id: 1, nombre: 'Gonzalo' };

        // Espiamos el servicio cuando se llame a 'agregarMedico' y regrese un médico.
        spyOn( servicio, 'agregarMedico' ).and.returnValue( from( [ medico ] ) );

        componente.agregarMedico();

        // expect( componente.medicos.length ).toBe(1);

        // Acá confirmamos que el médico que le mandé de la respuesta del espia esté ahora incluido en el 
        // arreglo de médicos del componente.
        expect( componente.medicos.indexOf( medico ) ).toBeGreaterThanOrEqual(0);
    });


    it('Si falla la adición, la propiedad mensajeError, debe ser igual al error del servicio', () => {

        const miError = 'No se pudo agregar el médico';

        spyOn( servicio, 'agregarMedico' ).and.returnValue( throwError(miError) );

        componente.agregarMedico();

        expect( componente.mensajeError ).toBe( miError );
    });


    it('Debe llamar al servidor para borrar el médico', () => {

        spyOn( window, 'confirm' ).and.returnValue(true);

        const espia = spyOn( servicio, 'borrarMedico' ).and.returnValue( EMPTY );

        componente.borrarMedico('1');

        expect( espia ).toHaveBeenCalledWith('1');
    });


    it('Debe llamar al servidor para borrar el médico', () => {

        spyOn( window, 'confirm' ).and.returnValue(false);

        const espia = spyOn( servicio, 'borrarMedico' ).and.returnValue( EMPTY );

        componente.borrarMedico('1');

        expect( espia ).not.toHaveBeenCalledWith('1');
    });

});
