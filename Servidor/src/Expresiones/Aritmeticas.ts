import { Expression } from "../abstract/expression";
import { Retorno } from "../abstract/Retorno";
import { Type } from "../Symbols/type";
import { AritmeticasOptions } from "./aritmeticasOpc";

export class Aritmeticas extends Expression{
    constructor(
        private izquierda: Expression,
        private derecha: Expression,
        private tipo: AritmeticasOptions,
        line: number,
        column: number
    ){
        super(line,column)
    }
    public ejecutar(): Retorno {
        let resultado : Retorno = {
            value: null,
            type: Type.error
        }

        const nodIzq = this.izquierda.ejecutar()
        const nodDer =  this.derecha.ejecutar()

        if(this.tipo == AritmeticasOptions.MAS){
            if(nodIzq.type == Type.INT && nodDer.type == Type.INT){
                resultado = {
                    value : (nodIzq.value + nodDer.value),
                    type: Type.INT
                }
            }else if(nodIzq.type == Type.INT && nodDer.type == Type.DOUBLE){
                resultado = {
                    value : (nodIzq.value + nodDer.value),
                    type: Type.DOUBLE
                }
            }else if(nodIzq.type == Type.INT && nodDer.type == Type.CHAR){
                resultado = {
                    value : (nodIzq.value + nodDer.value.charCodeAt(0)),
                    type: Type.INT
                }
            }else if(nodIzq.type == Type.INT && nodDer.type == Type.STRING){
                resultado = {
                    value : (String(nodIzq.value) +String( nodDer.value)),
                    type: Type.STRING
                }
            }else if(nodIzq.type == Type.DOUBLE && nodDer.type == Type.INT){
                resultado = {
                    value : (nodIzq.value +nodDer.value),
                    type: Type.DOUBLE
                }
            }else if(nodIzq.type == Type.DOUBLE && nodDer.type == Type.DOUBLE){
                resultado = {
                    value : (nodIzq.value +nodDer.value),
                    type: Type.DOUBLE
                }
            }else if(nodIzq.type == Type.DOUBLE && nodDer.type == Type.CHAR){
                resultado = {
                    value : (nodIzq.value +nodDer.value.charCodeAt(0)),
                    type: Type.DOUBLE
                }
            }else if(nodIzq.type == Type.DOUBLE && nodDer.type == Type.STRING){
                resultado = {
                    value : (String(nodIzq.value) +String(nodDer.value)),
                    type: Type.STRING
                }
            }else if(nodIzq.type == Type.CHAR && nodDer.type == Type.INT){
                resultado = {
                    value : (nodIzq.value.charCodeAt +nodDer.value),
                    type: Type.INT
                }
            }else if(nodIzq.type == Type.CHAR && nodDer.type == Type.DOUBLE){
                resultado = {
                    value : (nodIzq.value.charCodeAt +nodDer.value),
                    type: Type.DOUBLE
                }
            }else if(nodIzq.type == Type.CHAR && nodDer.type == Type.CHAR){
                resultado = {
                    value : (nodIzq.value.charCodeAt +nodDer.value.charCodeAt),
                    type: Type.INT
                }
            }else if(nodIzq.type == Type.CHAR && nodDer.type == Type.STRING){
                resultado = {
                    value : (String(nodIzq.value) +String(nodDer.value)),
                    type: Type.STRING
                }
            }else if(nodIzq.type == Type.STRING && nodDer.type == Type.INT){
                resultado = {
                    value : (String(nodIzq.value) +String(nodDer.value)),
                    type: Type.STRING
                }
            }else if(nodIzq.type == Type.STRING && nodDer.type == Type.DOUBLE){
                resultado = {
                    value : (String(nodIzq.value) +String(nodDer.value)),
                    type: Type.STRING
                }
            }else if(nodIzq.type == Type.STRING && nodDer.type == Type.CHAR){
                resultado = {
                    value : (String(nodIzq.value) +String(nodDer.value)),
                    type: Type.STRING
                }
            }else if(nodIzq.type == Type.STRING && nodDer.type == Type.STRING){
                resultado = {
                    value : (String(nodIzq.value) +String(nodDer.value)),
                    type: Type.STRING
                }
            }else if(nodIzq.type == Type.STRING && nodDer.type == Type.BOOLEAN){
                resultado = {
                    value : (String(nodIzq.value) +String(nodDer.value)),
                    type: Type.STRING
                }
            }
        //AQUI EMPIEZA LA RESTA
        }else if(this.tipo == AritmeticasOptions.MENOS){
            if(nodIzq.type == Type.INT && nodDer.type == Type.INT){
                resultado = {
                    value : (nodIzq.value - nodDer.value),
                    type: Type.INT
                }
            }else if(nodIzq.type == Type.INT && nodDer.type == Type.DOUBLE){
                resultado = {
                    value : (nodIzq.value - nodDer.value),
                    type: Type.DOUBLE
                }
            }else if(nodIzq.type == Type.INT && nodDer.type == Type.CHAR){
                resultado = {
                    value : (nodIzq.value - nodDer.value.charCodeAt(0)),
                    type: Type.INT
                }
            }else if(nodIzq.type == Type.DOUBLE && nodDer.type == Type.INT){
                resultado = {
                    value : (nodIzq.value -nodDer.value),
                    type: Type.DOUBLE
                }
            }else if(nodIzq.type == Type.DOUBLE && nodDer.type == Type.DOUBLE){
                resultado = {
                    value : (nodIzq.value -nodDer.value),
                    type: Type.DOUBLE
                }
            }else if(nodIzq.type == Type.DOUBLE && nodDer.type == Type.CHAR){
                resultado = {
                    value : (nodIzq.value - nodDer.value.charCodeAt(0)),
                    type: Type.DOUBLE
                }
            }else if(nodIzq.type == Type.CHAR && nodDer.type == Type.INT){
                resultado = {
                    value : (nodIzq.value.charCodeAt - nodDer.value),
                    type: Type.INT
                }
            }else if(nodIzq.type == Type.CHAR && nodDer.type == Type.DOUBLE){
                resultado = {
                    value : (nodIzq.value.charCodeAt +nodDer.value),
                    type: Type.DOUBLE
                }
            }else if(nodIzq.type == Type.CHAR && nodDer.type == Type.CHAR){
                resultado = {
                    value : (nodIzq.value.charCodeAt +nodDer.value.charCodeAt),
                    type: Type.INT
                }
            }

        }
        return resultado
    }
}