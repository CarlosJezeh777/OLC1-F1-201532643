import { Instruccion } from "../abstract/instruccion";
import { Singleton } from "../Singleton/Singleton";
import { Enviroment } from "../Symbols/enviroment";
import { Bloque } from "./Bloque";

export class Metodos extends Instruccion{
    constructor(
        public nombre: string,
        public instrucciones: Bloque,
        line: number,
        colum: number
    ){
        super(line, colum)
    }
    public ejecutar(env: Enviroment) {
        
        env.guardar_funcion(this.nombre,this)
    }

    public ast(): void {
        const s = Singleton.getInstance()
        const name_node = `node_${this.line}_${this.colum}_`
        s.addAst(`
        ${name_node}[label="metodo"];
        `)
    }
}