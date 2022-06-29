import { Expression } from "../abstract/expression"
import { Retorno } from "../abstract/Retorno"
import { Enviroment } from "../Symbols/enviroment"
import { Type } from "../Symbols/type"

export class IndexOf extends Expression{
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
            value: 0,
            type: Type.INT
        }
        
        const vector = env.get_vector(this.nombre);
        const tmp =  this.expresion.ejecutar(env);

        if(vector == null){
            throw new Error("error semantico");
        }

        for (const elemento of vector.value) {
            if(elemento == tmp.value){
                resultado = {
                    value: 1,
                    type: Type.INT
                }
                break
            }
        }

        
        
        
        return resultado
        
    }

    public ast(): string {
        return "ast"
    }
}