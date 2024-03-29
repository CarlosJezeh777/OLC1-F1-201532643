import { Expression } from "../abstract/expression"
import { Retorno } from "../abstract/Retorno"
import { Enviroment } from "../Symbols/enviroment"
import { Type } from "../Symbols/type"

export class EVector extends Expression{
    constructor(
        public nombre: string,
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
        
        const vector = env.get_vector(this.nombre);
        const tmp =  this.expresion.ejecutar(env);

        if(vector == null){
            throw new Error("error semantico");
        }

        resultado = {
            value: vector.value[tmp.value],
            type: vector.type
        }
        
        
        return resultado
        
    }

    public ast(): string {
        const name_nodo = `node_${this.line}_${this.column}_`
        return `
        ${name_nodo};
        ${name_nodo}[label="Vector"];
        ${name_nodo}->${this.expresion.ast()}
        `
    }
}