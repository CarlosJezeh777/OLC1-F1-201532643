import { Expression } from "../abstract/expression";
import { Instruccion } from "../abstract/instruccion";
import { Singleton } from "../Singleton/Singleton";
import { utilesArrays } from "../Singleton/UtilesArrays";
import { Enviroment } from "../Symbols/enviroment";
import { Type } from "../Symbols/type";
import { Bloque } from "./Bloque";

const s = Singleton.getInstance()

export class Else_If extends Instruccion{
    constructor(
        public expresion:Expression,
        public instrucccion: Bloque,
        line: number,
        colum: number
    ){
        super(line,colum)
    }
    public ejecutar(env:Enviroment) {

        
        const util = utilesArrays.getInstance();
        util.addElseIf(this)
        
        
        
    }
    public ast(): void {
        const name_node = `node_${this.line}_${this.colum}_`
        s.addAst(`
        ${name_node}[label="else if"];
        ${name_node}->${this.expresion.ast()}
        ${name_node}->${this.instrucccion.ast()};        
        `)
        
    }
}