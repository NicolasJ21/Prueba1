import { Component, Output, EventEmitter  } from '@angular/core';
import {claseAlumnos} from './../modelos/alumnos-cosas'
@Component({
  selector: 'app-seccion-formulario',
  templateUrl: './seccion-formulario.component.html',
  styleUrls: ['./seccion-formulario.component.scss']
})
export class SeccionFormularioComponent {
  @Output() public salida = new EventEmitter;
  @Output() public salidaString = new EventEmitter<string>();
  @Output() public enviarDato = new EventEmitter<claseAlumnos>();

  constructor() { }

  ngOnInit(): void {
  }

  public cambiarSeccion(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorial.seccion = elemento.value;

    this.salidaString.emit(elemento.value);
  }




  public nuevoHistorial: claseAlumnos = {
    id: 0,
    seccion: ''
  }

  public guardarHistorial(): void {
    const copia : claseAlumnos ={
      ...this.nuevoHistorial
    }
    this.enviarDato.emit(copia);
    this.nuevoHistorial.id = 0;
    this.nuevoHistorial.seccion = '';
    console.log('mensaje desde el hijo :D')
    this.salida.emit() }

}
