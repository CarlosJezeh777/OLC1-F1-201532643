import { Expression } from "../abstract/expression"
import { Retorno } from "../abstract/Retorno"
import { Enviroment } from "../Symbols/enviroment"
import { Type } from "../Symbols/type"

export class Round extends Expression{
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

        if(tmp.type != Type.DOUBLE){
            throw new Error("error");
            
        }
        const numero =  Number(tmp.value)
        
        resultado = {
            value: Math.round(numero),
            type: Type.INT
        }
        return resultado
        
    }
    public ast(): string {
        return "ast"
    }
}