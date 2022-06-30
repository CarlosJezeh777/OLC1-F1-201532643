import { Expression } from "../abstract/expression";
import { Instruccion } from "../abstract/instruccion";
import { Acces } from "../Expresiones/Acceso";
import { Singleton } from "../Singleton/Singleton";
import { Enviroment } from "../Symbols/enviroment";

export class Splice extends Instruccion{
    constructor(
        public nombre: string,
        public indice: Expression,
        public valor: Expression,
        line: number,
        column: number
    ){
        super(line,column)
    }
    public ejecutar(env:Enviroment) {

        //console.log(this);
        
        const arreglo = env.get_vector(this.nombre)
        console.log(arreglo);
        if(arreglo == null){
            throw new Error("Error semantico");
            
        }

        const valor =  this.valor.ejecutar(env)
        const indi=  this.indice.ejecutar(env)
        //console.log(valor);
        
        if(valor.type != arreglo.type){
            throw new Error("error semantico");
            
        }
        arreglo.value.splice(Number(indi.value),0,valor.value)
        
        
        arreglo.index = arreglo.index + 1

       // console.log(arreglo);
        

        env.actualizar_vector(this.nombre,arreglo)
        
        //console.log(expresion);
        
        
    }

    public ast(): void {
        const s = Singleton.getInstance()
        const nombre_nodo =`node_${this.line}_${this.colum}_`
        s.addAst(`
        ${nombre_nodo}[label="Splice"];
        ${nombre_nodo}1[label="Nombre: ${this.nombre}"];
        ${nombre_nodo}2[label="indice: ${this.indice}"];
        ${nombre_nodo}->${nombre_nodo}1;
        ${nombre_nodo}->${nombre_nodo}2;
        ${nombre_nodo}->${this.valor.ast()}
        `)
    }
}