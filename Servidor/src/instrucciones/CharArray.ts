import { Expression } from "../abstract/expression";
import { Instruccion } from "../abstract/instruccion";
import { Acces } from "../Expresiones/Acceso";
import { Singleton } from "../Singleton/Singleton";
import { Enviroment } from "../Symbols/enviroment";
import { Type } from "../Symbols/type";

export class CharArray extends Instruccion{
    constructor(
        public nombre: string,
        public valor: Expression,
        line: number,
        column: number
    ){
        super(line,column)
    }
    public ejecutar(env:Enviroment) {

        if(this.valor == null){
            throw new Error("error semantico");           
        }
        
        const valor = this.valor.ejecutar(env); 
        if(valor.type !=  Type.STRING){
            throw new Error("error semantico");
            
        }

        const ArrayChar = Array.from(String(valor.value))

        env.guardar_vector(this.nombre,ArrayChar,Type.CHAR,ArrayChar.length,1)
        
        //console.log(env);
        
 
    }
    public ast(): void {

        const s = Singleton.getInstance()
        const nombre_nodo =`node_${this.line}_${this.colum}_`
        s.addAst(`
        ${nombre_nodo}[label="toCharArray"];
        ${nombre_nodo}1[label="Nombre: ${this.nombre}"];
        ${nombre_nodo}->${nombre_nodo}1;
        ${nombre_nodo}->${this.valor.ast()}
        `)
    }
}