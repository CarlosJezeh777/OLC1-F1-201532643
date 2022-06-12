import { Expression } from "../abstract/expression";
import { Retorno } from "../abstract/Retorno";
import { Type } from "../Symbols/type";

export class Literal extends Expression{
    constructor(
        private valor: any,
        private tipo: Type,
        line: number,
        column: number
    ){
    super(line,column)    
    }
    public ejecutar(): Retorno {
        if(this.tipo == Type.INT){
            return{value: Number(this.valor), type: Type.INT}
        }else if(this.tipo == Type.STRING){
            this.valor = (this.valor).replaceAll("\"","")
            return{value: this.valor, type: Type.STRING}
        }else if(this.tipo == Type.CHAR){
            this.valor = (this.valor).replaceAll("\'","")
            return{value: this.valor, type: Type.CHAR}
        }else if(this.tipo == Type.DOUBLE){
            return{value: Number(this.valor), type: Type.DOUBLE}
        }else if(this.tipo == Type.BOOLEAN){
            if(this.valor == "true") return{value: Boolean(true), type: Type.BOOLEAN}
            else return{value: Boolean(false), type: Type.BOOLEAN}
        }
        else return{
            value: this.valor, type: Type.error
        }
    }
    
}