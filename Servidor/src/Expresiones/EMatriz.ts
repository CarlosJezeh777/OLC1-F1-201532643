import { Expression } from "../abstract/expression"
import { Retorno } from "../abstract/Retorno"
import { Enviroment } from "../Symbols/enviroment"
import { Type } from "../Symbols/type"

export class EMatriz extends Expression{
    constructor(
        public nombre: string,
        public i1: Expression,
        public i2: Expression,
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
        
        const Matriz = env.get_Matriz(this.nombre);
        const index1 =  this.i1.ejecutar(env);
        const index2 =  this.i2.ejecutar(env);

        if(Matriz == null){
            throw new Error("error semantico");
        }

        resultado = {
            value: Matriz.value[index1.value][index2.value],
            type: Matriz.type
        }
        
        
        return resultado
        
    }

    public ast(): string {
        const name_nodo = `node_${this.line}_${this.column}_`
        return `
        ${name_nodo};
        ${name_nodo}[label="Vector"];
        ${name_nodo}->${this.i1.ast()}
        ${name_nodo}->${this.i2.ast()}
        `
    }
}