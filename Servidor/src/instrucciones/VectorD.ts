import { Expression } from "../abstract/expression";
import { Instruccion } from "../abstract/instruccion";
import { Errores } from "../Singleton/Errores";
import { Singleton } from "../Singleton/Singleton";
import { Enviroment } from "../Symbols/enviroment";
import { Type } from "../Symbols/type";


const s = Singleton.getInstance()
        
export class VectorD1D extends Instruccion{

    constructor(
        public tipo: Type,
        public id: string,
        public valor: Expression[],
        line: number,
        column: number

    ){
        super(line,column)
    }

    public ejecutar(env: Enviroment) {

        
        let diferente: boolean = false;
        let valor: any[] = []
        for (const element of this.valor) {
            const e =  element.ejecutar(env)
            valor.push(e.value)
            if(e.type != this.tipo){
                diferente = true;
                break
            }
        }
        
        let tamanio = valor.length
        
        if(diferente == false){
            env.guardar_vector(this.id,valor,this.tipo,tamanio,1)
        }else{
            s.addErrores(new Errores("No son del mismo tipo", "semantico",this.line,this.colum))
        }
       
    }

    public ast(): void {
        const nombre_nodo =`node_${this.line}_${this.colum}_`
        s.addAst(`
        ${nombre_nodo}[label="Splice"];
        ${nombre_nodo}1[label="Nombre: ${this.id}"];
        ${nombre_nodo}2[label="Tipo: ${this.tipo}"];
        ${nombre_nodo}->${nombre_nodo}1;
        ${nombre_nodo}->${nombre_nodo}2;
        `)
        
    }
}