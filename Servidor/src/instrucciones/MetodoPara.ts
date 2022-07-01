import { Instruccion } from "../abstract/instruccion";
import { Errores } from "../Singleton/Errores";
import { Singleton } from "../Singleton/Singleton";
import { Enviroment } from "../Symbols/enviroment";
import { Bloque } from "./Bloque";
const s = Singleton.getInstance()
export class MetodosP extends Instruccion{
    constructor(
        public nombre: string,
        public parametros: any,
        public instrucciones: Bloque,
        line: number,
        colum: number
    ){
        super(line, colum)
    }
    public ejecutar(env: Enviroment) {
        //console.log(this);
        if(this.parametros == null){
            s.addErrores(new Errores("no tiene parametros","semantico",this.line,this.colum))
            throw new Error("Error semantico: tiene que traer parametros");
            
        }
        env.guardar_funcion(this.nombre,this)
            
        
    }

    public ast(): void {
        const nombre_nodo =`node_${this.line}_${this.colum}_`
        s.addAst(`
        ${nombre_nodo}[label="metodo"];
        ${nombre_nodo}1[label="Nombre: ${this.nombre}"];
        ${nombre_nodo}->${nombre_nodo}1;
        `)
    }
}