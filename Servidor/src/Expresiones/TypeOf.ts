import { type } from "os"
import { Expression } from "../abstract/expression"
import { Instruccion } from "../abstract/instruccion"
import { Retorno } from "../abstract/Retorno"
import { Singleton } from "../Singleton/Singleton"
import { Enviroment } from "../Symbols/enviroment"
import { Type } from "../Symbols/type"

export class Type_Of extends Expression{
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

        const s =  Singleton.getInstance();
        if(tmp.type == Type.INT){
            resultado = {
                value: "Integer",
                type: Type.STRING
             }
        }else if(tmp.type == Type.BOOLEAN){
            resultado = {
                value: "Boolean",
                type: Type.STRING
             }
        }else if(tmp.type == Type.CHAR){
            resultado = {
                value: "Caracter",
                type: Type.STRING
             }
        }else if(tmp.type == Type.STRING){
            resultado = {
                value: "Cadena",
                type: Type.STRING
             }
        }else if(tmp.type == Type.DOUBLE){
            resultado = {
                value: "Double",
                type: Type.STRING
             }
        }
        
        return resultado
        
    }
    public ast(): string {
        const name_nodo = `node_${this.line}_${this.column}_`
        return `
        ${name_nodo};
        ${name_nodo}[label="Type Of"];
        ${name_nodo}->${this.expresion.ast()}
        
        `
    }
}