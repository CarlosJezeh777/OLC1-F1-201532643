import { Expression } from "../abstract/expression";
import { Instruccion } from "../abstract/instruccion";
import { Singleton } from "../Singleton/Singleton";
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

    public ast(): void {
        const s = Singleton.getInstance()
        const nombre_nodo =`node_${this.line}_${this.colum}_`
        s.addAst(`
        ${nombre_nodo}[label="Splice"];
        ${nombre_nodo}1[label="Nombre: ${this.id}"];
        ${nombre_nodo}2[label="Tipo: ${this.tipo}"];
        ${nombre_nodo}->${nombre_nodo}1;
        ${nombre_nodo}->${nombre_nodo}2;
        ${nombre_nodo}->${this.valor.ast()}
        `)
        
    }
}