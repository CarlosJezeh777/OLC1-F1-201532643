import { Expression } from "../abstract/expression";
import { Instruccion } from "../abstract/instruccion";
import { Enviroment } from "../Symbols/enviroment";
import { Type } from "../Symbols/type";

export class Declaracion extends Instruccion{
    constructor(
        public tipo: Type, 
        public nombre: string,
        public expresion:Expression,
        line: number,
        colum: number
    ){
        super(line,colum)
    }
    public ejecutar(env:Enviroment) {

        console.log("Declarando variable: " + this.nombre );
        console.log("tipo: " + this.tipo);
        
        const expresion = this.expresion.ejecutar(env)
        
        env.guardarVarible(this.nombre,expresion.value,expresion.type)
        
    }
}