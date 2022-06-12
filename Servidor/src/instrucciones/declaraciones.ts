import { Expression } from "../abstract/expression";
import { Instruccion } from "../abstract/instruccion";

class Declaracion extends Instruccion{
    constructor(
        public tipo: string, 
        public nombre: string,
        public expresion:null,
        line: number,
        colum: number
    ){
        super(line,colum)
    }
    public ejecutar() {

        console.log("Declarando variable: " + this.nombre + "nose");
            
        
    }
}