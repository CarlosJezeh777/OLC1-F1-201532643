import { Expression } from "../abstract/expression"
import { Retorno } from "../abstract/Retorno"
import { Enviroment } from "../Symbols/enviroment"
import { Type } from "../Symbols/type"

export class ToUpper extends Expression{
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

        if(tmp.type != Type.STRING){
            throw new Error("error");
            
        }
        const mayusculas =  String(tmp.value)
        
        resultado = {
            value: mayusculas.toUpperCase(),
            type: Type.STRING
        }
        return resultado
        
    }
    public ast(): string {
        return "ast"
    }
}