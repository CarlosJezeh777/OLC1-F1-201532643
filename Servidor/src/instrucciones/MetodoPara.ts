import { Instruccion } from "../abstract/instruccion";
import { Enviroment } from "../Symbols/enviroment";
import { Bloque } from "./Bloque";

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
        if(this.parametros == null){
            throw new Error("Error semantico: tiene que traer parametros");
            
        }
        env.guardar_funcion(this.nombre,this)
            
        
    }

    public ast(): void {
        
    }
}