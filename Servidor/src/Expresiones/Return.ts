import { type } from "os"
import { Expression } from "../abstract/expression"
import { Instruccion } from "../abstract/instruccion"
import { Retorno } from "../abstract/Retorno"
import { Singleton } from "../Singleton/Singleton"
import { Enviroment } from "../Symbols/enviroment"
import { Type } from "../Symbols/type"

export class ReturnE extends Expression{
    constructor(
        public expresion: Expression,
        line: number,
        column: number
    ){
        super(line,column)
    }
    public ejecutar(env:Enviroment):Retorno {
        let resultado: Retorno={
            value: null,
            type: Type.error
        } 
        const tmp =  this.expresion.ejecutar(env);

        resultado = {
            value: tmp.value,
            type: tmp.type
        }        
        return resultado      
    }
    public ast(): string {
        return "ast"
    }
}