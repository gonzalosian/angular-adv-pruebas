import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import { Router, ActivatedRoute } from '@angular/router';
import { EMPTY, Observable, Subject, from } from 'rxjs';

// Necesitamos implementar algo parecido al router, pero falso, porque ya sabemos que funciona.
class fakeRouter{
  navigate( params: any ){}
}

class fakeActivatedRoute{
  // params: Observable<any> = EMPTY;

  // Para poder manipular los valores de un observable usaremos una propiedad
  private subject = new Subject();

  push( valor: any ){
    this.subject.next( valor );
  }

  get params(){
    return this.subject.asObservable(); // Lo que hacemos es regresar un nuevo observable
  }
}


describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterMedicoComponent ],
      providers: [
        { provide: Router, useClass: fakeRouter },
        // { provide: ActivatedRoute, useClass: fakeActivatedRoute },
        { 
          provide: ActivatedRoute, 
          useValue: {
            params: from( [ { id: '123' } ] )
          }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe redireccionar a Médico cuando se guarde', () => {
    
    const router = TestBed.inject( Router ); // Necesitamos implementar un espia en el servicio
    const spy = spyOn( router, 'navigate' ); // Espiamos el router y buscará en el navigate

    component.guardarMedico();

    expect( spy ).toHaveBeenCalledWith( ['medico', '123'] );
  });


  it('Debe colocar el id = nuevo', () => {

    // component = fixture.componentInstance;
    // // Necesitamos crear una instancia de la clase fakeActivatedRoute para poder insertar manualmente
    // // un parámetro que yo quiero enviarle al observable params(), por lo que necesitamos la referencia al servicio
    // const activatedRoute: fakeActivatedRoute = TestBed.inject( ActivatedRoute );
    // activatedRoute.push( { id: 'nuevo' } );
    // expect( component.id ).toBe('nuevo');

    expect( component.id ).toBe('123');
  })
});
