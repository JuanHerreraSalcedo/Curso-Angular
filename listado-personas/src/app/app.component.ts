import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'listado-personas';
  personas: Persona[] = [new Persona('Juan', 'Herrera'), new Persona('Laura', 'Ruiz')];
  personaAgregada(persona:Persona){
    this.personas.push( persona );
  }
}
