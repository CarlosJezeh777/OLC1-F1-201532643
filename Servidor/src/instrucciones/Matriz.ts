import { Expression } from "../abstract/expression";
import { Instruccion } from "../abstract/instruccion";
import { Errores } from "../Singleton/Errores";
import { Singleton } from "../Singleton/Singleton";
import { Enviroment } from "../Symbols/enviroment";
import { Type } from "../Symbols/type";


const s = Singleton.getInstance()
        
export class Matriz extends Instruccion{

    constructor(
        public tipo: Type,
        public id: string,
        public tipo2: Type,
        public valor: Expression,
        public valor2: Expression,
        line: number,
        column: number

    ){
        super(line,column)
    }

    public ejecutar(env: Enviroment) {
        
        //console.log(this);
        
        if(this.valor == null){
            s.addErrores(new Errores("Vector: Especifique el tamaño","Semantico",this.line,this.colum))
            throw new Error("error semantico");           
        }
        if(this.valor2 == null){
            s.addErrores(new Errores("Vector: Especifique el tamaño","Semantico",this.line,this.colum))
            throw new Error("error semantico");           
        }
        const valor = this.valor.ejecutar(env); 
        const valor2 = this.valor2.ejecutar(env); 

        var nuevoArray = new Array(2);
        nuevoArray[0] = new Array(valor.value);
        nuevoArray[1] = new Array(valor2.value);
    
        
        if(this.tipo == this.tipo2){
            env.guardar_Matriz(this.id,nuevoArray,this.tipo,valor.value,valor2.value)
        }
        //console.log(env);
        
        
    }

    public ast(): void {
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