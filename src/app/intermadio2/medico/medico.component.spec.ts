// Para decirle a Angular que compile y se prepare para trabajar con su ciclo de detección de cambios, que use pipes, etc,
// necesitamos la clase TestBed, que tiene muchos metodos y funciones para poder realizar pruebas de elementos y componentes
// de Angular. Este se configura en el beforeEach()
import { ComponentFixture, TestBed } from '@angular/core/testing';
// ComponentFixture nos ayuda a tener acceso al html, componentes del dom, hacer querys a los elementos.

import { MedicoComponent } from './medico.component';
import { MedicoService } from './medico.service';
import { HttpClientModule } from '@angular/common/http';

describe('Medico Component', () => {

  let component: MedicoComponent;
  
  let fixture: ComponentFixture<MedicoComponent>;

  beforeEach(async () => {
    // component = new MedicoComponent(); // En las Pruebas de Integración no se hace así
    // No se hace así porque necesitamos decirle a Angular que compile la forma para tener acceso al html y otros
    // componentes que puede ser que el MedicoComponent necesite o utiice
    await TestBed.configureTestingModule({
      declarations: [ MedicoComponent ], // Si el MedicoComponent ocupara un servicio, tambien irian los providers
      providers: [ MedicoService ],
      imports: [ HttpClientModule ]
    })
    // Luego necesitamos crear un componente ya compilado y procesardo por el TestBed
    .compileComponents(); // esto regresa un fixture, que nos ayuda a tener acceso al html, componentes del dom, etc.
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoComponent);
    // Acá obtenemos la instancia del componente y podremos usar todos sus métodos y funciones definidos
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('Debe crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debe retornar el nombre del médico', () => {
    const nombre = 'Gonzalo';
    const res = component.saludarMedicos( nombre );
    expect( res ).toContain( nombre );
  });

});
