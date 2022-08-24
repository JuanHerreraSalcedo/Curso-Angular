import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LogginService } from '../LogginService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.services';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  // providers: [LogginService] se coloca en el app.module.ts en la linea provider
})
export class FormularioComponent implements OnInit {

  //@Output() personaCreada = new EventEmitter<Persona>()

  // nombreInput:string = '';  
  // apellidoInput:string = '';  
  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;

  constructor(private logginService: LogginService,
              private personasService: PersonasService){
                this.personasService.saludar.subscribe(
                  (indice:number) => alert("El indice es: " + indice)
                );
  }

  ngOnInit(){
  }

  agregarPersona() {
    let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    //this.logginService.enviarMensajeAConsola("Enviamos persona con nombre: " + persona1.nombre + " apellido: " + persona1.apellido);
    //this.personaCreada.emit(persona1);
    this.personasService.agregarPersona(persona1);
  }

}
