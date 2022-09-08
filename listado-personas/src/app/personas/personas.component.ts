import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogginService } from '../LogginService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.services';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];

  // new Persona('Juan', 'Herrera'), new Persona('Laura', 'Ruiz')

  constructor(
    // private logginService: LogginService,
    private router:Router,
    private personasService: PersonasService) {}

  ngOnInit(): void {
    this.personas = this.personasService.personas;
  }

  agregar(){
    this.router.navigate(['personas/agregar']);
  }
}
