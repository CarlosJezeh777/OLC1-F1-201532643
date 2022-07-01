import { Expression } from "../abstract/expression";
import { Instruccion } from "../abstract/instruccion";
import { Acces } from "../Expresiones/Acceso";
import { Errores } from "../Singleton/Errores";
import { Singleton } from "../Singleton/Singleton";
import { Enviroment } from "../Symbols/enviroment";

const s = Singleton.getInstance()
        
export class Pop extends Instruccion{
    constructor(
        public nombre: string,
        line: number,
        column: number
    ){
        super(line,column)
    }
    public ejecutar(env:Enviroment) {

        const arreglo = env.get_vector(this.nombre)
        //console.log(arreglo);
        if(arreglo == null){
            s.addErrores(new Errores("No se encontro el vector", "semantico",this.line,this.colum))
            throw new Error("Error semantico");
            
        }
        arreglo.value.pop()
        arreglo.index = arreglo.index - 1

        //console.log(arreglo);
        

        env.actualizar_vector(this.nombre,arreglo)
        
        //console.log(expresion);
        
        
    }
    public ast(): void {
        const nombre_nodo =`node_${this.line}_${this.colum}_`
        s.addAst(`
        ${nombre_nodo}[label="Pop"];
        ${nombre_nodo}1[label="Nombre: ${this.nombre}"];
        ${nombre_nodo}->${nombre_nodo}1;
        `)
    }
}