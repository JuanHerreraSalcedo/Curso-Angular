import { EventEmitter, Injectable } from "@angular/core";
import { DataServices } from "./data.services";
import { LogginService } from "./LogginService.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService{
    personas: Persona[] = [];
    // personas: Persona[] = [new Persona('Juan', 'Herrera Salcedo'), new Persona('Laura', 'Ruiz')];

    saludar = new EventEmitter<number>();

    constructor(private logginService: LogginService,
                private dataServices: DataServices){}

    setPersonas(personas: Persona[]){
      this.personas = personas;
    }
    obtenerPersonas(){
      return this.dataServices.cargarPersonas();
    }
    agregarPersona(persona:Persona){
        this.logginService.enviarMensajeAConsola("agregamos persona:" + persona.nombre)
        if(this.personas == null){
          this.personas = [];
        }
        this.personas.push( persona );
        this.dataServices.guardarPersonas(this.personas);
      }

      encontrarPersona(index:number){
        let persona:Persona = this.personas[index];
        return persona;
      }
    modificarPersona(index:number, persona:Persona){
      let persona1 = this.personas[index];
      persona1.nombre = persona.nombre;
      persona1.apellido = persona.apellido;
      this.dataServices.modificarPersona(index, persona);
    }

    eliminarPersona(index:number){
      this.personas.splice(index,1);
    }
}