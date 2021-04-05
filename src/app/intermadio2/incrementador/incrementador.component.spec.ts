import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe mostrar la leyenda', () => {

        component.leyenda = 'Progreso de carga';

        fixture.detectChanges(); // Disparar la detección de cambios

        // Obtengo el elemento html del fixture, que ya es el elemento compilado de Angular
        const elem: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;

        expect( elem.innerHTML ).toContain('Progreso de carga');
    });


    it('Debe mostrar en el input el valor del progreso', () => {

        component.cambiarValor(5);
        fixture.detectChanges(); // Disparar la detección de cambios

        // Cuando el ciclo de detección de cambios termina, hace esto, ya que esperamos a que sea estable.
        fixture.whenStable().then( () => {
            // Obtengo el elemento html del fixture, que ya es el elemento compilado de Angular
            // const input = fixture.debugElement.query( By.css('input') ).nativeElement;
            const input: HTMLInputElement = fixture.debugElement.query( By.css('input') ).nativeElement;
            expect( input.value ).toBe('55');
        } );
    });


    it('Debe incrementar/decrementar en 5 con un click en el botón', () => {
        
        const botones = fixture.debugElement.queryAll( By.css('.btn-primary') );
        // console.log(botones);

        botones[0].triggerEventHandler('click', null);
        expect( component.progreso ).toBe(45);

        botones[1].triggerEventHandler('click', null);
        expect( component.progreso ).toBe(50);
    });


    it('En el título del componente debe mostrar el progreso', () => {

        const botones = fixture.debugElement.queryAll( By.css('.btn-primary') );
        botones[0].triggerEventHandler('click', null);

        fixture.detectChanges(); // Disparar la detección de cambios

        // Obtengo el elemento html del fixture, que ya es el elemento compilado de Angular
        const elem: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;

        expect( elem.innerHTML ).toContain('45');
    });

});
