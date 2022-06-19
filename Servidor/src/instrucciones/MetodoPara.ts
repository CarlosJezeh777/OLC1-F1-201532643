import { Instruccion } from "../abstract/instruccion";
import { Enviroment } from "../Symbols/enviroment";
import { Bloque } from "./Bloque";
import { Declaracion } from "./declaraciones";

export class MetodosP extends Instruccion{
    constructor(
        public nombre: string,
        public parametros: any,
        public instrucciones: Bloque,
        line: number,
        colum: number
    ){
        super(line, colum)
    }
    public ejecutar(env: Enviroment) {
        //console.log(this);
        if(env.guardar_funcion(this.nombre,this)){
            console.log("se guardo");
            
        }
        
    }
}