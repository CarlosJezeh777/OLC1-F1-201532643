import { Expression } from "../abstract/expression";
import { Instruccion } from "../abstract/instruccion";
import { Enviroment } from "../Symbols/enviroment";
import { Type } from "../Symbols/type";

export class VectorD1 extends Instruccion{

    constructor(
        public tipo: Type,
        public id: string,
        public tipo2: Type,
        public valor: Expression,
        line: number,
        column: number

    ){
        super(line,column)
    }

    public ejecutar(env: Enviroment) {
        
        
        if(this.valor == null){
            throw new Error("error semantico");           
        }
        
        const valor = this.valor.ejecutar(env); 
        
        if(this.tipo == this.tipo2){
            env.guardar_vector(this.id,[],this.tipo,valor.value,1)
        }
        //console.log(env);
        
        
    }
}