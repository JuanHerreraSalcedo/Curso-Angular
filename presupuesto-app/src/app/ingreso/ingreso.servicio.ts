import { Ingreso } from "./ingreso.model";

export class IngresoServicio{
    ingresos:Ingreso[]=[
        new Ingreso("Salario", 1600000),
        new Ingreso("Venta Coche", 1000000)
    ];

    eliminar(ingreso:Ingreso){
        const indice: number = this.ingresos.indexOf(ingreso);
        this.ingresos.splice(indice,1);
    }
}