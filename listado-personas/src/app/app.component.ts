import { Component, OnInit } from '@angular/core';
import { LogginService } from './LogginService.service';
import { Persona } from './persona.model';
import { PersonasService } from './personas.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  titulo = 'listado-personas';
  personas: Persona[] = [];

  // new Persona('Juan', 'Herrera'), new Persona('Laura', 'Ruiz')

  constructor(private logginService: LogginService,
    private personasService: PersonasService) {}

  ngOnInit(): void {
    this.personas = this.personasService.personas;
  }
}
