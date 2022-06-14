import { Expression } from "../abstract/expression";
import { Instruccion } from "../abstract/instruccion";
import { Enviroment } from "../Symbols/enviroment";

export class Asignar extends Instruccion{
    constructor(
        public nombre: string,
        public expresion: Expression,
        line: number,
        column: number
    ){
        super(line,column)
    }
    public ejecutar(env:Enviroment) {
        const expresion = this.expresion.ejecutar(env)
        console.log("haciendo una asinacion: " + this.nombre)
        console.log(expresion.value)
        console.log(expresion.type)
        env.actualizar_variable(this.nombre,expresion.value)
    }
}