import { Component, Output, EventEmitter } from '@angular/core';
import {infoAlumnos} from './../modelos/alumnos-cosas'


@Component({
  selector: 'app-alumnos-formulario',
  templateUrl: './alumnos-formulario.component.html',
  styleUrls: ['./alumnos-formulario.component.scss']
})
export class AlumnosFormularioComponent {
  @Output() public salida = new EventEmitter;
  @Output() public salidaString = new EventEmitter<string>();
  @Output() public enviarDato = new EventEmitter<infoAlumnos>();
  constructor() { }

  ngOnInit(): void {
  }

  public nuevoHistorial: infoAlumnos = {
    run: '',
    nombre: '',
    apellido:'',
    edad: 0
  }


  public cambiarRun(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorial.run = elemento.value;
  }
  public cambiarNombre(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorial.nombre = elemento.value;

    this.salidaString.emit(elemento.value);
  }
  public cambiarApellido(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorial.apellido = elemento.value;
  }




  public guardarHistorial(): void {
    const copia : infoAlumnos ={
      ...this.nuevoHistorial
    }
    this.enviarDato.emit(copia);
    this.nuevoHistorial.run = '';
    this.nuevoHistorial.nombre = '';
    this.nuevoHistorial.apellido = '';
    this.nuevoHistorial.edad = 0;
    console.log('mensaje desde el hijo :D')
    this.salida.emit() }

}


