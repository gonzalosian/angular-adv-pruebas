import { AbstractControl, FormBuilder } from '@angular/forms';
import { FormularioRegister } from './formulario';

describe('Formularios', () => {

    let componente: FormularioRegister;
    
    beforeEach( () => {
        componente = new FormularioRegister( new FormBuilder() );
    });

    it('Debe crear un formulario con dos campos, email y password', () => {
        expect( componente.form.contains('email') ).toBeTruthy();
        expect( componente.form.contains('password') ).toBeTruthy();
    });

    it('Email debe ser obligatorio', () => {
        const control = componente.form.get('email');
        control?.setValue(''); // establecemos un valor vacío
        expect( control?.valid ).toBeFalsy(); // esperamos que la condición del campo sea falsa (no sea vacía)
    });

    it('Email debe ser un correo valido', () => {
        const control = componente.form.get('email');
        control?.setValue('gonzalosian@gmail.com'); // establecemos un correo válido
        expect( control?.valid ).toBeTruthy(); // esperamos que la condición del campo sea verdadera (email válido)
    });
})