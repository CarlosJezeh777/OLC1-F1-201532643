import { log } from "console";
import { Expression } from "../abstract/expression";
import { Retorno } from "../abstract/Retorno";
import { Enviroment } from "../Symbols/enviroment";
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
    public ejecutar(env:Enviroment): Retorno {
        let resultado : Retorno = {
            value: null,
            type: Type.error
        }

        const nodIzq = this.izquierda.ejecutar(env)
        const nodDer =  this.derecha.ejecutar(env)
        
        if(this.tipo == AritmeticasOptions.MAS){
            
            if(nodIzq.type == Type.INT && nodDer.type == Type.INT){
                resultado = {
                    value : (Number(nodIzq.value) + Number(nodDer.value)),
                    type: Type.INT
                }
                return resultado
            }else if(nodIzq.type == Type.INT && nodDer.type == Type.DOUBLE){
                resultado = {
                    value : (nodIzq.value + nodDer.value).toFixed(2),
                    type: Type.DOUBLE
                }
            }else if(nodIzq.type == Type.INT && nodDer.type == Type.CHAR){
                
                resultado = {
                    value : (nodIzq.value + nodDer.value.charCodeAt()),
                    type: Type.INT
                }
            }else if(nodIzq.type == Type.INT && nodDer.type == Type.STRING){
                
                resultado = {
                    value : (String(nodIzq.value) +String( nodDer.value)),
                    type: Type.STRING
                }
            }else if(nodIzq.type == Type.DOUBLE && nodDer.type == Type.INT){
                resultado = {
                    value : (nodIzq.value +nodDer.value).toFixed(2),
                    type: Type.DOUBLE
                }
            }else if(nodIzq.type == Type.DOUBLE && nodDer.type == Type.DOUBLE){
                resultado = {
                    value : (nodIzq.value +nodDer.value).toFixed(2),
                    type: Type.DOUBLE
                }
            }else if(nodIzq.type == Type.DOUBLE && nodDer.type == Type.CHAR){
                resultado = {
                    value : (nodIzq.value +nodDer.value.charCodeAt()).toFixed(2),
                    type: Type.DOUBLE
                }
            }else if(nodIzq.type == Type.DOUBLE && nodDer.type == Type.STRING){
                resultado = {
                    value : (String(nodIzq.value) +String(nodDer.value)),
                    type: Type.STRING
                }
            }else if(nodIzq.type == Type.CHAR && nodDer.type == Type.INT){
                resultado = {
                    value : (nodIzq.value.charCodeAt() + nodDer.value),
                    type: Type.INT
                }
            }else if(nodIzq.type == Type.CHAR && nodDer.type == Type.DOUBLE){
                resultado = {
                    value : (nodIzq.value.charCodeAt() +nodDer.value).toFixed(2),
                    type: Type.DOUBLE
                }
            }else if(nodIzq.type == Type.CHAR && nodDer.type == Type.CHAR){
                resultado = {
                    value : (nodIzq.value.charCodeAt() +nodDer.value.charCodeAt()),
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
                    value : (nodIzq.value - nodDer.value).toFixed(2),
                    type: Type.DOUBLE
                }
            }else if(nodIzq.type == Type.INT && nodDer.type == Type.CHAR){
                resultado = {
                    value : (nodIzq.value - nodDer.value.charCodeAt()),
                    type: Type.INT
                }
            }else if(nodIzq.type == Type.DOUBLE && nodDer.type == Type.INT){
                resultado = {
                    value : (nodIzq.value -nodDer.value).toFixed(2),
                    type: Type.DOUBLE
                }
            }else if(nodIzq.type == Type.DOUBLE && nodDer.type == Type.DOUBLE){
                resultado = {
                    value : (nodIzq.value -nodDer.value).toFixed(2),
                    type: Type.DOUBLE
                }
            }else if(nodIzq.type == Type.DOUBLE && nodDer.type == Type.CHAR){
                resultado = {
                    value : (nodIzq.value - nodDer.value.charCodeAt()).toFixed(2),
                    type: Type.DOUBLE
                }
            }else if(nodIzq.type == Type.CHAR && nodDer.type == Type.INT){
                resultado = {
                    value : (nodIzq.value.charCodeAt() - nodDer.value),
                    type: Type.INT
                }
            }else if(nodIzq.type == Type.CHAR && nodDer.type == Type.DOUBLE){
                resultado = {
                    value : (nodIzq.value.charCodeAt() - nodDer.value).toFixed(2),
                    type: Type.DOUBLE
                }
            }else if(nodIzq.type == Type.CHAR && nodDer.type == Type.CHAR){
                resultado = {
                    value : (nodIzq.value.charCodeAt() - nodDer.value.charCodeAt()),
                    type: Type.INT
                }
            }
            //AQUI EMPIEZA LA MULTIPLICACION
        }else if(this.tipo == AritmeticasOptions.MULTIPLICAR){
            if(nodIzq.type == Type.INT && nodDer.type == Type.INT){
                resultado = {
                    value : (nodIzq.value * nodDer.value),
                    type: Type.INT
                }
            }else if(nodIzq.type == Type.INT && nodDer.type == Type.DOUBLE){
                resultado = {
                    value : (nodIzq.value * nodDer.value).toFixed(2),
                    type: Type.DOUBLE
                }
            }else if(nodIzq.type == Type.INT && nodDer.type == Type.CHAR){
                resultado = {
                    value : (nodIzq.value * nodDer.value.charCodeAt()),
                    type: Type.INT
                }
            }else if(nodIzq.type == Type.DOUBLE && nodDer.type == Type.INT){
                resultado = {
                    value : (nodIzq.value * nodDer.value).toFixed(2),
                    type: Type.DOUBLE
                }
            }else if(nodIzq.type == Type.DOUBLE && nodDer.type == Type.DOUBLE){
                resultado = {
                    value : (nodIzq.value * nodDer.value).toFixed(2),
                    type: Type.DOUBLE
                }
            }else if(nodIzq.type == Type.DOUBLE && nodDer.type == Type.CHAR){
                resultado = {
                    value : (nodIzq.value *  nodDer.value.charCodeAt()).toFixed(2),
                    type: Type.DOUBLE
                }
            }else if(nodIzq.type == Type.CHAR && nodDer.type == Type.INT){
                resultado = {
                    value : (nodIzq.value.charCodeAt() * nodDer.value),
                    type: Type.INT
                }
            }else if(nodIzq.type == Type.CHAR && nodDer.type == Type.DOUBLE){
                resultado = {
                    value : (nodIzq.value.charCodeAt() * nodDer.value).toFixed(2),
                    type: Type.DOUBLE
                }
            }else if(nodIzq.type == Type.CHAR && nodDer.type == Type.CHAR){
                resultado = {
                    value : (nodIzq.value.charCodeAt() * nodDer.value.charCodeAt()),
                    type: Type.INT
                }
            }

            //AQUI EMPIEZA LA DIVISION
    }else if(this.tipo == AritmeticasOptions.DIVIDIR){
        if(nodIzq.type == Type.INT && nodDer.type == Type.INT){
            resultado = {
                value : Math.trunc(nodIzq.value / nodDer.value),
                type: Type.INT
            }
        }else if(nodIzq.type == Type.INT && nodDer.type == Type.DOUBLE){
            resultado = {
                value : (nodIzq.value / nodDer.value).toFixed(2),
                type: Type.DOUBLE
            }
        }else if(nodIzq.type == Type.INT && nodDer.type == Type.CHAR){
            resultado = {
                value : Math.trunc(nodIzq.value / nodDer.value.charCodeAt()),
                type: Type.INT
            }
        }else if(nodIzq.type == Type.DOUBLE && nodDer.type == Type.INT){
            resultado = {
                value : (nodIzq.value / nodDer.value).toFixed(2),
                type: Type.DOUBLE
            }
        }else if(nodIzq.type == Type.DOUBLE && nodDer.type == Type.DOUBLE){
            resultado = {
                value : (nodIzq.value / nodDer.value).toFixed(2),
                type: Type.DOUBLE
            }
        }else if(nodIzq.type == Type.DOUBLE && nodDer.type == Type.CHAR){
            resultado = {
                value : (nodIzq.value /  nodDer.value.charCodeAt()).toFixed(2),
                type: Type.DOUBLE
            }
        }else if(nodIzq.type == Type.CHAR && nodDer.type == Type.INT){
            resultado = {
                value : Math.trunc(nodIzq.value.charCodeAt() / nodDer.value),
                type: Type.INT
            }
        }else if(nodIzq.type == Type.CHAR && nodDer.type == Type.DOUBLE){
            resultado = {
                value : (nodIzq.value.charCodeAt() / nodDer.value).toFixed(2),
                type: Type.DOUBLE
            }
        }else if(nodIzq.type == Type.CHAR && nodDer.type == Type.CHAR){
            resultado = {
                value : Math.trunc(nodIzq.value.charCodeAt() / nodDer.value.charCodeAt()),
                type: Type.INT
            }
        }
        //AQUI EMPIZA LA POTENCIA
    }else if(this.tipo == AritmeticasOptions.POTENCIA){
            if(nodIzq.type == Type.INT && nodDer.type == Type.INT){
                resultado = {
                    value : Math.pow(nodIzq.value,nodDer.value).toFixed(2),
                    type: Type.DOUBLE
                }
            }else if(nodIzq.type == Type.INT && nodDer.type == Type.DOUBLE){
                resultado = {
                    value : Math.pow(nodIzq.value,nodDer.value).toFixed(2),
                    type: Type.DOUBLE
                }
            }else if(nodIzq.type == Type.INT && nodDer.type == Type.CHAR){
                resultado = {
                    value : Math.pow(nodIzq.value,nodDer.value.charCodeAt()).toFixed(2),
                    type: Type.DOUBLE
                }
            }else if(nodIzq.type == Type.DOUBLE && nodDer.type == Type.INT){
                resultado = {
                    value : Math.pow(nodIzq.value,nodDer.value).toFixed(2),
                    type: Type.DOUBLE
                }
            }else if(nodIzq.type == Type.DOUBLE && nodDer.type == Type.DOUBLE){
                resultado = {
                    value : Math.pow(nodIzq.value,nodDer.value).toFixed(2),
                    type: Type.DOUBLE
                }
            }else if(nodIzq.type == Type.DOUBLE && nodDer.type == Type.CHAR){
                resultado = {
                    value : Math.pow(nodIzq.value,nodDer.value.charCodeAt()).toFixed(2),
                    type: Type.DOUBLE
                }
            }else if(nodIzq.type == Type.CHAR && nodDer.type == Type.INT){
                resultado = {
                    value : Math.pow(nodIzq.value.charCodeAt(),nodDer.value).toFixed(2),
                    type: Type.DOUBLE
                }
            }else if(nodIzq.type == Type.CHAR && nodDer.type == Type.DOUBLE){
                resultado = {
                    value : Math.pow(nodIzq.value.charCodeAt(),nodDer.value).toFixed(2),
                    type: Type.DOUBLE
                }
            }else if(nodIzq.type == Type.CHAR && nodDer.type == Type.CHAR){
                resultado = {
                    value : Math.pow(nodIzq.value.charCodeAt(),nodDer.value.charCodeAt()).toFixed(2),
                    type: Type.DOUBLE
                }
            }
    //AQUI EMPIZA EL MODULO
        }else if(this.tipo == AritmeticasOptions.MODULO){
            if(nodIzq.type == Type.INT && nodDer.type == Type.INT){
                resultado = {
                    value : (nodIzq.value % nodDer.value).toFixed(2),
                    type: Type.DOUBLE
                }
            }else if(nodIzq.type == Type.INT && nodDer.type == Type.DOUBLE){
                resultado = {
                    value : (nodIzq.value % nodDer.value).toFixed(2),
                    type: Type.DOUBLE
                }
            }else if(nodIzq.type == Type.INT && nodDer.type == Type.CHAR){
                resultado = {
                    value : (nodIzq.value % nodDer.value.charCodeAt()).toFixed(2),
                    type: Type.DOUBLE
                }
            }else if(nodIzq.type == Type.DOUBLE && nodDer.type == Type.INT){
                resultado = {
                    value : (nodIzq.value % nodDer.value),
                    type: Type.DOUBLE
                }
            }else if(nodIzq.type == Type.DOUBLE && nodDer.type == Type.DOUBLE){
                resultado = {
                    value : (nodIzq.value % nodDer.value).toFixed(2),
                    type: Type.DOUBLE
                }
            }else if(nodIzq.type == Type.DOUBLE && nodDer.type == Type.CHAR){
                resultado = {
                    value : (nodIzq.value %  nodDer.value.charCodeAt()).toFixed(2),
                    type: Type.DOUBLE
                }
            }else if(nodIzq.type == Type.CHAR && nodDer.type == Type.INT){
                resultado = {
                    value : (nodIzq.value.charCodeAt() % nodDer.value).toFixed(2),
                    type: Type.DOUBLE
                }
            }else if(nodIzq.type == Type.CHAR && nodDer.type == Type.DOUBLE){
                resultado = {
                    value : (nodIzq.value.charCodeAt() % nodDer.value).toFixed(2),
                    type: Type.DOUBLE
                }
            }else if(nodIzq.type == Type.CHAR && nodDer.type == Type.CHAR){
                resultado = {
                    value : Math.trunc(nodIzq.value.charCodeAt() % nodDer.value.charCodeAt()).toFixed(2),
                    type: Type.DOUBLE
                }
            }
        }
        return resultado
    }
}