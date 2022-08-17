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
    mensaje = '';
    titulo = '';
    mostrar = false;
    agregarPersona(){
        this.mostrar = true;
        this.mensaje = 'Persona agregada'
    }

    modificarTitulo(event:Event){

        this.titulo = (<HTMLInputElement>event.target).value;
    }
}