import { Expression } from "../abstract/expression";
import { Instruccion } from "../abstract/instruccion";
import { Acces } from "../Expresiones/Acceso";
import { Errores } from "../Singleton/Errores";
import { Singleton } from "../Singleton/Singleton";
import { Enviroment } from "../Symbols/enviroment";

const singleton = Singleton.getInstance()

export class AsignarM extends Instruccion{
    constructor(
        public nombre: string,
        public index: Expression,
        public index2: Expression,
        public valor: Expression,
        line: number,
        column: number
    ){
        super(line,column)
    }
    public ejecutar(env:Enviroment) {

        const Matriz = env.get_Matriz(this.nombre)
        //console.log(Matriz);
        if(Matriz == null){
            singleton.addErrores(new Errores("El nombre del vector no existe","Semantico",this.line,this.colum))
            throw new Error("Error semantico");
            
        }
        const i = Matriz.index - 1
        const j = Matriz.index2 - 1
        //console.log(i);
        
        const indice1 = this.index.ejecutar(env)
        const indice2 = this.index2.ejecutar(env)
        const valor =  this.valor.ejecutar(env)
        //console.log(valor);
        
        if(indice1.value > i || indice2.value > j){
            singleton.addErrores(new Errores("vector: el indice no existe","Semantico",this.line,this.colum))
            throw new Error("error semantico");
            
        }
        if(valor.type != Matriz.type){
            singleton.addErrores(new Errores("vector: No son del mismo tipo","Semantico",this.line,this.colum))
            throw new Error("error semantico");
            
        }
        Matriz.value[indice1.value][indice2.value] = valor.value

        //console.log(Matriz.value);
        

        env.actualizar_Matriz(this.nombre,Matriz)
        //console.log(expresion);
        
        
    }

    public ast(): void {
        const s = Singleton.getInstance()
        const nombre_nodo =`node_${this.line}_${this.colum}_`
        s.addAst(`
        ${nombre_nodo}[label="Asignacion Vector"];
        ${nombre_nodo}1[label="Nombre: ${this.nombre}"];
        ${nombre_nodo}->${nombre_nodo}1;
        ${nombre_nodo}->${this.valor.ast()}
        `)
    }
}