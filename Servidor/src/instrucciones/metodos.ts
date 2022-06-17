import { Instruccion } from "../abstract/instruccion";
import { Enviroment } from "../Symbols/enviroment";

export class Metodo extends Instruccion {
    constructor(
        public id:string,
        public parametros:any,
        public bloque: Instruccion,
        line: number, 
        column : number
    ) {
        super(line,column);
    }

    public ejecutar(env: Enviroment) {      
        //semantica

        //asignacion parecida a la de varibles, envez de guardar variables, estoy guardando funciones/metodods

        env.guardar_funcion(this.id, this);
    }
}