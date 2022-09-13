import { Component, Output, EventEmitter } from '@angular/core';
import {registroHistorial} from './../modelos/alumnos-cosas'

@Component({
  selector: 'app-registro-historial',
  templateUrl: './registro-historial.component.html',
  styleUrls: ['./registro-historial.component.scss']
})
export class RegistroHistorialComponent {
  @Output() public salida = new EventEmitter;
  @Output() public salidaString = new EventEmitter<string>();
  @Output() public enviarDato = new EventEmitter<registroHistorial>();

  constructor() { }

  ngOnInit(): void {
  }

  public nuevoHistorial: registroHistorial = {
    fechaYhora: '',
    tipoAlumno: '',

  }

  public guardarHistorial(): void {
    const copia : registroHistorial ={
      ...this.nuevoHistorial
    }
    this.enviarDato.emit(copia);
    this.nuevoHistorial.fechaYhora = '';
    this.nuevoHistorial.tipoAlumno = '';
    console.log('mensaje desde el hijo :D')
    this.salida.emit() }

}
