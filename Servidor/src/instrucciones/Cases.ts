import { Instruccion } from "../abstract/instruccion";
import { Literal } from "../Expresiones/Literales";
import { Singleton } from "../Singleton/Singleton";
import { utilesArrays } from "../Singleton/UtilesArrays";
import { Enviroment } from "../Symbols/enviroment";
import { Bloque } from "./Bloque";

export class Casos extends Instruccion{
    constructor(
        public valor : Literal,
        public instrucccion: any[],
        line: number,
        colum: number
    ){
        super(line,colum)
    }
    public ejecutar(env:Enviroment) {  
        const utiles = utilesArrays.getInstance()
        utiles.addCasos(this)
    }
    public ast(): void {
        const s = Singleton.getInstance()
        const nombre_nodo =`node_${this.line}_${this.colum}_`
        s.addAst(`
        ${nombre_nodo}[label="Cases"];
        `)
        
    }
}