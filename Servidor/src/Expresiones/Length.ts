import { Expression } from "../abstract/expression"
import { Retorno } from "../abstract/Retorno"
import { Enviroment } from "../Symbols/enviroment"
import { Type } from "../Symbols/type"

export class ILength extends Expression{
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

        if(tmp.type == Type.STRING){
            const palabra =  String(tmp.value)
        
            resultado = {
            value: palabra.length,
            type: Type.INT
            }
            
        }else{
            const splitted = tmp.value.split(",")   
            resultado = {
                value: splitted.length,
                type: Type.INT
            }
            
        }
        
        return resultado
        
    }

    public ast(): string {
        const name_nodo = `node_${this.line}_${this.column}_`
        return `
        ${name_nodo};
        ${name_nodo}[label="Length"];
        ${name_nodo}->${this.expresion.ast()}
        `
    }
}