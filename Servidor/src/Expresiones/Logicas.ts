import { Expression } from "../abstract/expression"
import { Retorno } from "../abstract/Retorno"
import { Enviroment } from "../Symbols/enviroment"
import { Type } from "../Symbols/type"
import { OpcionesLogicas } from "./LogicasOpc"

export class Logica extends Expression{
    constructor(
        private izquierda: Expression,
        private derecha: Expression,
        private tipo: OpcionesLogicas,
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
        

        if(this.tipo == OpcionesLogicas.AND){
            if(nodIzq.type == Type.BOOLEAN && nodDer.type == Type.BOOLEAN){
                resultado = {
                    value: nodIzq.value && nodDer.value,
                    type: Type.BOOLEAN
                }
            }

        }else if(this.tipo == OpcionesLogicas.OR){
            if(nodIzq.type == Type.BOOLEAN && nodDer.type == Type.BOOLEAN){
                resultado = {
                    value: nodIzq.value || nodDer.value,
                    type: Type.BOOLEAN
                }
            }

        }else if(this.tipo == OpcionesLogicas.XOR){
            if(nodIzq.type == Type.BOOLEAN && nodDer.type == Type.BOOLEAN){
                

                resultado = {
                    value: (nodIzq.value || nodDer.value) && !(nodIzq.value && nodDer.value),
                    type: Type.BOOLEAN
                }
            }

        }else if(this.tipo == OpcionesLogicas.NOT){
            if(nodDer.type == Type.BOOLEAN){
                resultado = {
                    value: !(nodDer.value),
                    type: Type.BOOLEAN
                }
            }

        }
        return resultado
    }

    
}
