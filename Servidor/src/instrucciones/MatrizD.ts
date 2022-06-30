import { Expression } from "../abstract/expression";
import { Instruccion } from "../abstract/instruccion";
import { Errores } from "../Singleton/Errores";
import { Singleton } from "../Singleton/Singleton";
import { Enviroment } from "../Symbols/enviroment";
import { Type } from "../Symbols/type";


const s = Singleton.getInstance()
        
export class MatrizD extends Instruccion{

    constructor(
        public tipo: Type,
        public id: string,
        public valor: any[],
        line: number,
        column: number

    ){
        super(line,column)
    }

    public ejecutar(env: Enviroment) {
        
        let diferente: boolean = false;
        
        let index1: number = 0;
        let index2: number = 0;
        for (let i = 0; i < this.valor.length ;i++) {
            index2 = 0;
            for (let j = 0; j < this.valor[i].length; j++) {                
                index2++;
            }
            index1++;
        }
        //console.log(index1);
        //console.log(index2);
        let valor2: any[]= new Array(2)
        valor2[0] = new Array(index1)
        valor2[1] = new Array(index2)

        for (let i = 0; i < this.valor.length ;i++) {
            for (let j = 0; j < this.valor[i].length; j++) {
                const val = this.valor[i][j].ejecutar(env)
                //console.log(val);
                valor2[i][j] = val.value
            }
        
        }

        
        if(diferente == false){
            env.guardar_Matriz(this.id,valor2,this.tipo,index1,index2)
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