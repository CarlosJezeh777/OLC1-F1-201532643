import { Instruccion } from "../abstract/instruccion";
import { Enviroment } from "../Symbols/enviroment";
import { Bloque } from "./Bloque";

export class Metodos extends Instruccion{
    constructor(
        public nombre: string,
        public instrucciones: Bloque,
        line: number,
        colum: number
    ){
        super(line, colum)
    }
    public ejecutar(env: Enviroment) {
        
        env.guardar_funcion(this.nombre,this)
    }
}