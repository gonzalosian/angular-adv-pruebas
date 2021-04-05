import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';
// Si nosotros no queremos hacer esta importación para cumplir con la prueba, podemos agregar un schema
// import { NavbarComponent } from './avanzado/navbar/navbar.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        // NavbarComponent,
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  });


  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it(`should have as title 'pruebas'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('pruebas');
  });


  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('pruebas app is running!');
  // });


  it('Debe tener un <router-outlet>', () => {

    const fixture = TestBed.createComponent(AppComponent);
    const debugElement = fixture.debugElement.query( By.directive( RouterOutlet ) );

    expect( debugElement ).not.toBeNull();
  });

  // Esto ya lo podemos trasladar a las pruebas del Navbar
  
  // xit('Debe tener un link a la página de médicos', () => {

  //   const fixture = TestBed.createComponent(AppComponent);
  //   const elementos = fixture.debugElement.queryAll( By.directive( RouterLinkWithHref ) );
  //   let existe = false;

  //   for( const elem of elementos ){
  //     if( elem.attributes['routerLink'] === '/medicos' ){
  //       existe = true;
  //       break;
  //     }
  //   }

  //   expect( existe ).toBeTruthy();
  // });

});
