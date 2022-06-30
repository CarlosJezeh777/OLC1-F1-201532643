import { Expression } from "../abstract/expression"
import { Retorno } from "../abstract/Retorno"
import { Enviroment } from "../Symbols/enviroment"
import { Type } from "../Symbols/type"

export class ToLower extends Expression{
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
        const minusculas =  String(tmp.value)
        
        resultado = {
            value: minusculas.toLowerCase(),
            type: Type.STRING
        }
        return resultado
        
    }
    public ast(): string {
        const name_nodo = `node_${this.line}_${this.column}_`
        return `
        ${name_nodo};
        ${name_nodo}[label="To Lower"];
        ${name_nodo}->${this.expresion.ast()}
        
        `
    }
}