import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class DataServices{
    constructor(private httpClient: HttpClient){}

    cargarPersonas(){
        return this.httpClient.get('https://listado-personas-d219c-default-rtdb.firebaseio.com/datos.json')
    }
    // guardar Personas
    guardarPersonas(personas: Persona[]){
        this.httpClient.put('https://listado-personas-d219c-default-rtdb.firebaseio.com/datos.json', personas)
        .subscribe(
            response =>
                console.log("Resultado guardar personas" + response),
                error => console.log("error al guardar personas:" + error)
        );
            
    }

    modificarPersona(index:number, persona: Persona){
        let url: string;
        url = 'https://listado-personas-d219c-default-rtdb.firebaseio.com/datos.' + index + 'json';
        this.httpClient.put(url, persona)
        .subscribe(
            response => console.log("resultado modificar Persona: " + response)
        ,
        error => console.log("Error en modificar Persona: " + error)
        );
    }

    eliminarPersona(index: number) {
        let url: string;
        url = 'https://listado-personas-d219c-default-rtdb.firebaseio.com/datos.' + index + 'json';
        this.httpClient.delete(url)
        .subscribe(
            response => console.log("resultado eliminar Persona: " + response)
        ,
        error => console.log("Error en eliminar Persona: " + error)
        );
    }
}