import { Expression } from "../abstract/expression"
import { Retorno } from "../abstract/Retorno"
import { Enviroment } from "../Symbols/enviroment"
import { Type } from "../Symbols/type"
import { OpcionesInDe } from "./IncrementosOpc"

export class InDe extends Expression{
    constructor(
        private lado: any,
        private expresion: Expression,
        private tipo: OpcionesInDe,
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

        console.log(this.expresion);
        

        const expr = this.expresion.ejecutar(env)

        if(this.lado == 0 && this.tipo == OpcionesInDe.MAMA){
            resultado = {
                value: ++(expr.value),
                type: Type.INT
            }
        }else if(this.lado == 1 && this.tipo == OpcionesInDe.MAMA){
            resultado = {
                value: (expr.value)++,
                type: Type.INT
            }
        }else if(this.lado == 0 && this.tipo == OpcionesInDe.MEME){
            resultado = {
                value: --(expr.value),
                type: Type.INT
            }
        }else if(this.lado == 1 && this.tipo == OpcionesInDe.MEME){
            resultado = {
                value: (expr.value)--,
                type: Type.INT
            }
        }   
        
        return resultado
    }
}