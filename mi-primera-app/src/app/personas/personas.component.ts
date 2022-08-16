import { Component } from "@angular/core";

@Component({
    selector: 'app-personas',
    // template: `<h1>Listado de personas</h1>
    // <app-persona></app-persona>
    // <app-persona></app-persona>`
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css']

})
export class personasComponent{
    deshabilitar = false;
    mensaje = 'No se ha agregado ninguna persona';
    titulo = '';
    agregarPersona(){
        this.mensaje = 'Persona agregada'
    }

    modificarTitulo(event:Event){

        this.titulo = (<HTMLInputElement>event.target).value;
    }
}