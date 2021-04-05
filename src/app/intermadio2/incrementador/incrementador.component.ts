import { Component, Input, Output, ViewChild, OnInit, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  // hay que cambiar el ViewChild, ya que ahora debe de tener dos parámetros en vez de uno: 
  // @ViewChild('txtProgress', {static: false}) txtProgress: ElementRef;
  // Con Static: true, las querys se resolverían antes de la detección de cambios, con false después.

  @ViewChild('txtProgress', {static: true}) txtProgress!: ElementRef;
  
  // @ViewChild('txtProgress') txtProgress: ElementRef | undefined;

  // tslint:disable-next-line:no-input-rename
  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  // tslint:disable-next-line:no-output-rename
  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onChanges( newValue: number ) {

    if ( newValue >= 100 ) {
      this.progreso = 100;
    }else if ( newValue <= 0 ) {
      this.progreso = 0;
    }else {
      this.progreso = newValue;
    }

    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit( this.progreso );

  }

  cambiarValor( valor: number ) {

    if ( this.progreso >= 100 && valor > 0 ) {
      this.progreso = 100;
      return;
    }

    if ( this.progreso <= 0 && valor < 0 ) {
      this.progreso = 0;
      return;
    }

    this.progreso = this.progreso + valor;

    this.cambioValor.emit( this.progreso );

  }

}
