import { Instruccion } from "../abstract/instruccion";
import { ReturnE } from "../Expresiones/Return";
import { Enviroment } from "../Symbols/enviroment";
import { Type } from "../Symbols/type";
import { Bloque } from "./Bloque";

export class Funcion extends Instruccion{
    constructor(
        public tipo: Type,
        public nombre: string,
        public instrucciones: any[],
        public retorno: ReturnE ,
        line: number,
        colum: number
    ){
        super(line, colum)
    }
    public ejecutar(env: Enviroment) {
        
        env.guardar_funcion(this.nombre,this)
    }
}