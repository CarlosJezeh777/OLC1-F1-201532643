import { Expression } from "../abstract/expression";
import { Instruccion } from "../abstract/instruccion";
import { utilesArrays } from "../Singleton/UtilesArrays";
import { Enviroment } from "../Symbols/enviroment";
import { Type } from "../Symbols/type";
import { Asignar } from "./asignar";
import { Bloque } from "./Bloque";
import { Declaracion } from "./declaraciones";
import { InDe } from "./Incrementos";

export class If_Else_If extends Instruccion{
    constructor(
        public variable:Declaracion | Asignar,
        private condicion: Expression,
        private in_de: InDe,
        private instrucciones: Bloque,
        line: number,
        colum: number
    ){
        super(line,colum)
    }
    public ejecutar(env:Enviroment) {
        const env_for =  new Enviroment(env);

        this.variable.ejecutar(env_for);
        const cond = this.condicion.ejecutar(env_for);
        const incremento = this.in_de.ejecutar(env_for);
        console.log(cond);
        console.log(incremento);
        
        
        
    }
}