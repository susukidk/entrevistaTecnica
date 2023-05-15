import { Component } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  public personajes : Personaje [] = [
    {nombre : "Goku", poder : 20000}
  ];

  public obtenNuevoPersonaje(personaje : Personaje) : void {
    this.personajes.push(personaje);
  }
}
