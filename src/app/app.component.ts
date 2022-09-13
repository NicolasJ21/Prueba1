import { Component } from '@angular/core';
import {infoAlumnos} from './app/modelos/alumnos-cosas'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public elementosGuardados: Array<infoAlumnos> = []
  title = 'Prueba1';


}

