import { log } from "console";
import { Expression } from "../abstract/expression";
import { Retorno } from "../abstract/Retorno";
import { Enviroment } from "../Symbols/enviroment";
import { Type } from "../Symbols/type";
import { AritmeticasOptions, getSimbolo } from "./aritmeticasOpc";
import { Literal } from "./Literales";

export class Umenos extends Expression{
    constructor(
        private numero: Literal,
        line: number,
        column: number
    ){
        super(line,column)
    }
    public ejecutar(env:Enviroment): Retorno {
        let resultado : Retorno = {
            value: null,
            type: Type.error
        }

        const nodDer =  this.numero.ejecutar(env)
        resultado = {
            value : Number(-nodDer.value),
            type : Type.INT
        }
        return resultado
    }

    public ast(): string {
        const name_nodo = `node_${this.line}_${this.column}_`
        return `
        ${name_nodo};
        ${name_nodo}->${this.numero.ast()}
        `
    }
}