import { Expression } from "../abstract/expression";
import { Instruccion } from "../abstract/instruccion";
import { Acces } from "../Expresiones/Acceso";
import { Errores } from "../Singleton/Errores";
import { Singleton } from "../Singleton/Singleton";
import { Enviroment } from "../Symbols/enviroment";

const singleton = Singleton.getInstance()

export class AsignarV extends Instruccion{
    constructor(
        public nombre: string,
        public index: Expression,
        public valor: Expression,
        line: number,
        column: number
    ){
        super(line,column)
    }
    public ejecutar(env:Enviroment) {

        const arreglo = env.get_vector(this.nombre)
        //console.log(arreglo);
        if(arreglo == null){
            singleton.addErrores(new Errores("El nombre del vector no existe","Semantico",this.line,this.colum))
            throw new Error("Error semantico");
            
        }
        const i = arreglo.index - 1
        //console.log(i);
        
        const indice = this.index.ejecutar(env)
        //console.log(indice);
        
        const valor =  this.valor.ejecutar(env)
        //console.log(valor);
        
        if(indice.value > i){
            singleton.addErrores(new Errores("vector: l indice no existe","Semantico",this.line,this.colum))
            throw new Error("error semantico");
            
        }
        if(valor.type != arreglo.type){
            singleton.addErrores(new Errores("vector: No son del mismo tipo","Semantico",this.line,this.colum))
            throw new Error("error semantico");
            
        }
        arreglo.value[indice.value] = valor.value

        //console.log(arreglo);
        

        env.actualizar_vector(this.nombre,arreglo)
        
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