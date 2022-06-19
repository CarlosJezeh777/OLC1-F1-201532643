import { type } from "os";
import { Expression } from "../abstract/expression";
import { Retorno } from "../abstract/Retorno";
import { Enviroment } from "../Symbols/enviroment";
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
    public ejecutar(env:Enviroment): Retorno {

        let resultado :Retorno = {
            value: this.valor,
            type: Type.error
             
        }
        //console.log("tipo dato: "+ this.tipo);
        if(this.tipo == Type.INT){
            resultado = {
                value: Number(this.valor), 
                type: Type.INT
            }
        }else if(this.tipo == Type.STRING){
            let valor_1 = String(this.valor)
            valor_1 = valor_1.substring(1,valor_1.length-1)
            //this.valor = (this.valor).replaceAll("\"","")
            resultado = {
                value: valor_1, 
                type: Type.STRING
            }
        }else if(this.tipo == Type.CHAR){
            let valor1 = this.valor[1]
            resultado = {
                value: valor1, 
                type: Type.CHAR
            }
        }else if(this.tipo == Type.DOUBLE){
            resultado = {
                value: Number(this.valor), 
                type: Type.DOUBLE
            }
        }else if(this.tipo == Type.BOOLEAN){
            if(this.valor == "true") 
                resultado = {
                    value: Boolean(true), 
                    type: Type.BOOLEAN
                }
            else 
                resultado = {
                    value: Boolean(false), 
                    type: Type.BOOLEAN
                }
        }
        
        return resultado;
    }
    
}