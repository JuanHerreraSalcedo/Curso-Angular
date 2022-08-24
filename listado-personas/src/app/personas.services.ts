import { EventEmitter, Injectable } from "@angular/core";
import { LogginService } from "./LogginService.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService{
    personas: Persona[] = [new Persona('Juan', 'Herrera'), new Persona('Laura', 'Ruiz')];

    saludar = new EventEmitter<number>();

    constructor(private logginService: LogginService){}

    agregarPersona(persona:Persona){
        this.logginService.enviarMensajeAConsola("agregamos persona:" + persona.nombre)
        this.personas.push( persona );
      }
}