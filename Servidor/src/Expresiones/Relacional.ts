import { Expression } from "../abstract/expression"
import { Retorno } from "../abstract/Retorno"
import { Enviroment } from "../Symbols/enviroment"
import { Type } from "../Symbols/type"
import { getSimbolo, OpcionRelacional } from "./RelacionalOpc"

export class Relacional extends Expression{
    constructor(
        private izquierda: Expression,
        private derecha: Expression,
        private tipo: OpcionRelacional,
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

        if(this.tipo == OpcionRelacional.MAYORQUE){
            
            if(nodIzq.type == Type.INT && nodDer.type == Type.INT){
                resultado = {
                    value: (nodIzq.value > nodDer.value),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.INT && nodDer.type == Type.DOUBLE){
                resultado = {
                    value: (nodIzq.value > nodDer.value),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.INT && nodDer.type == Type.CHAR){
                resultado = {
                    value: (nodIzq.value > nodDer.value.charCodeAt()),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.DOUBLE && nodDer.type == Type.INT){
                resultado = {
                    value: (nodIzq.value > nodDer.value),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.DOUBLE && nodDer.type == Type.DOUBLE){
                resultado = {
                    value: (nodIzq.value > nodDer.value),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.DOUBLE && nodDer.type == Type.CHAR){
                resultado = {
                    value: (nodIzq.value > nodDer.value.charCodeAt()),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.CHAR && nodDer.type == Type.INT){
                resultado = {
                    value: (nodIzq.value.charCodeAt() > nodDer.value),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.CHAR && nodDer.type == Type.DOUBLE){
                resultado = {
                    value: (nodIzq.value.charCodeAt() > nodDer.value),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.CHAR && nodDer.type == Type.CHAR){
                resultado = {
                    value: (nodIzq.value.charCodeAt() > nodDer.value.charCodeAt()),
                    type: Type.BOOLEAN
                }
            }

        }else if(this.tipo == OpcionRelacional.MENORQUE){
            if(nodIzq.type == Type.INT && nodDer.type == Type.INT){
                resultado = {
                    value: (nodIzq.value < nodDer.value),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.INT && nodDer.type == Type.DOUBLE){
                resultado = {
                    value: (nodIzq.value < nodDer.value),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.INT && nodDer.type == Type.CHAR){
                resultado = {
                    value: (nodIzq.value < nodDer.value.charCodeAt()),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.DOUBLE && nodDer.type == Type.INT){
                resultado = {
                    value: (nodIzq.value < nodDer.value),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.DOUBLE && nodDer.type == Type.DOUBLE){
                resultado = {
                    value: (nodIzq.value < nodDer.value),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.DOUBLE && nodDer.type == Type.CHAR){
                resultado = {
                    value: (nodIzq.value < nodDer.value.charCodeAt()),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.CHAR && nodDer.type == Type.INT){
                resultado = {
                    value: (nodIzq.value.charCodeAt() < nodDer.value),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.CHAR && nodDer.type == Type.DOUBLE){
                resultado = {
                    value: (nodIzq.value.charCodeAt() < nodDer.value),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.CHAR && nodDer.type == Type.CHAR){
                resultado = {
                    value: (nodIzq.value.charCodeAt() < nodDer.value.charCodeAt()),
                    type: Type.BOOLEAN
                }
            }
        }else if(this.tipo == OpcionRelacional.MAYORIGUAL){
            if(nodIzq.type == Type.INT && nodDer.type == Type.INT){
                resultado = {
                    value: (nodIzq.value >= nodDer.value),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.INT && nodDer.type == Type.DOUBLE){
                resultado = {
                    value: (nodIzq.value >= nodDer.value),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.INT && nodDer.type == Type.CHAR){
                resultado = {
                    value: (nodIzq.value >= nodDer.value.charCodeAt()),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.DOUBLE && nodDer.type == Type.INT){
                resultado = {
                    value: (nodIzq.value >= nodDer.value),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.DOUBLE && nodDer.type == Type.DOUBLE){
                resultado = {
                    value: (nodIzq.value >= nodDer.value),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.DOUBLE && nodDer.type == Type.CHAR){
                resultado = {
                    value: (nodIzq.value >= nodDer.value.charCodeAt()),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.CHAR && nodDer.type == Type.INT){
                resultado = {
                    value: (nodIzq.value.charCodeAt() >= nodDer.value),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.CHAR && nodDer.type == Type.DOUBLE){
                resultado = {
                    value: (nodIzq.value.charCodeAt() >= nodDer.value),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.CHAR && nodDer.type == Type.CHAR){
                resultado = {
                    value: (nodIzq.value.charCodeAt() >= nodDer.value.charCodeAt()),
                    type: Type.BOOLEAN
                }
            }
        }else if(this.tipo == OpcionRelacional.MENORIGUAL){
            if(nodIzq.type == Type.INT && nodDer.type == Type.INT){
                resultado = {
                    value: (nodIzq.value <= nodDer.value),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.INT && nodDer.type == Type.DOUBLE){
                resultado = {
                    value: (nodIzq.value <= nodDer.value),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.INT && nodDer.type == Type.CHAR){
                resultado = {
                    value: (nodIzq.value <= nodDer.value.charCodeAt()),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.DOUBLE && nodDer.type == Type.INT){
                resultado = {
                    value: (nodIzq.value <= nodDer.value),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.DOUBLE && nodDer.type == Type.DOUBLE){
                resultado = {
                    value: (nodIzq.value <= nodDer.value),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.DOUBLE && nodDer.type == Type.CHAR){
                resultado = {
                    value: (nodIzq.value <= nodDer.value.charCodeAt()),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.CHAR && nodDer.type == Type.INT){
                resultado = {
                    value: (nodIzq.value.charCodeAt() <= nodDer.value),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.CHAR && nodDer.type == Type.DOUBLE){
                resultado = {
                    value: (nodIzq.value.charCodeAt() <= nodDer.value),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.CHAR && nodDer.type == Type.CHAR){
                resultado = {
                    value: (nodIzq.value.charCodeAt() <= nodDer.value.charCodeAt()),
                    type: Type.BOOLEAN
                }
            }
        }else if(this.tipo == OpcionRelacional.IGUALQUE){
            if(nodIzq.type == Type.INT && nodDer.type == Type.INT){
                resultado = {
                    value: (nodIzq.value == nodDer.value),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.INT && nodDer.type == Type.DOUBLE){
                resultado = {
                    value: (nodIzq.value == nodDer.value),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.INT && nodDer.type == Type.CHAR){
                resultado = {
                    value: (nodIzq.value == nodDer.value.charCodeAt()),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.DOUBLE && nodDer.type == Type.INT){
                resultado = {
                    value: (nodIzq.value == nodDer.value),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.DOUBLE && nodDer.type == Type.DOUBLE){
                resultado = {
                    value: (nodIzq.value == nodDer.value),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.DOUBLE && nodDer.type == Type.CHAR){
                resultado = {
                    value: (nodIzq.value == nodDer.value.charCodeAt()),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.CHAR && nodDer.type == Type.INT){
                resultado = {
                    value: (nodIzq.value.charCodeAt() == nodDer.value),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.CHAR && nodDer.type == Type.DOUBLE){
                resultado = {
                    value: (nodIzq.value.charCodeAt() == nodDer.value),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.CHAR && nodDer.type == Type.CHAR){
                resultado = {
                    value: (nodIzq.value.charCodeAt() == nodDer.value.charCodeAt()),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.STRING && nodDer.type == Type.STRING){
                resultado = {
                    value: (nodIzq.value == nodDer.value),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.BOOLEAN && nodDer.type == Type.BOOLEAN){
                resultado = {
                    value: (nodIzq.value == nodDer.value),
                    type: Type.BOOLEAN
                }
            }
        }else if(this.tipo == OpcionRelacional.NOIGUAL){
            if(nodIzq.type == Type.INT && nodDer.type == Type.INT){
                resultado = {
                    value: (nodIzq.value != nodDer.value),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.INT && nodDer.type == Type.DOUBLE){
                resultado = {
                    value: (nodIzq.value != nodDer.value),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.INT && nodDer.type == Type.CHAR){
                resultado = {
                    value: (nodIzq.value != nodDer.value.charCodeAt()),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.DOUBLE && nodDer.type == Type.INT){
                resultado = {
                    value: (nodIzq.value != nodDer.value),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.DOUBLE && nodDer.type == Type.DOUBLE){
                resultado = {
                    value: (nodIzq.value != nodDer.value),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.DOUBLE && nodDer.type == Type.CHAR){
                resultado = {
                    value: (nodIzq.value != nodDer.value.charCodeAt()),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.CHAR && nodDer.type == Type.INT){
                resultado = {
                    value: (nodIzq.value.charCodeAt() != nodDer.value),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.CHAR && nodDer.type == Type.DOUBLE){
                resultado = {
                    value: (nodIzq.value.charCodeAt() != nodDer.value),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.CHAR && nodDer.type == Type.CHAR){
                resultado = {
                    value: (nodIzq.value.charCodeAt() != nodDer.value.charCodeAt()),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.STRING && nodDer.type == Type.STRING){
                resultado = {
                    value: (nodIzq.value != nodDer.value),
                    type: Type.BOOLEAN
                }
            }else if(nodIzq.type == Type.BOOLEAN && nodDer.type == Type.BOOLEAN){
                resultado = {
                    value: (nodIzq.value != nodDer.value),
                    type: Type.BOOLEAN
                }
            }
        }

        return resultado
    }

    public ast(): string {
        const nombreNodo = `node_${this.line}_${this.column}_`
        return `
        ${nombreNodo};
        ${nombreNodo}[label="${getSimbolo(this.tipo)}"];
        ${nombreNodo}->${this.izquierda.ast()}
        ${nombreNodo}->${this.derecha.ast()}
        `
    }
}