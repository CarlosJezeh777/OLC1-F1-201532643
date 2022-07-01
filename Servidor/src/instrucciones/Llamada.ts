import { Instruccion } from "../abstract/instruccion";
import { Singleton } from "../Singleton/Singleton";
import { Enviroment } from "../Symbols/enviroment";
import { Metodos } from "./IMetdos";

export class Llamada extends Instruccion{
    constructor(
        public id:string,
        line: number, 
        column : number
    ) {
        super(line,column);
    }

    public ejecutar(env:Enviroment) {
       
        
        //console.log(this);
        const metodo= env.get_metodo(this.id)
        //console.log(metodo);

        let env_instrucciones = new Enviroment(env);        


        if (metodo== null) {
            throw "Error semantico, no ecnontre esta funcion"
        }

        metodo.instrucciones.ejecutar(env_instrucciones) 

    }

    public ast(): void {
        const s = Singleton.getInstance()
        const name_node = `node_${this.line}_${this.colum}_`
        s.addAst(`
        ${name_node}[label="Call"];
        ${name_node}1[label="${this.id}"];
        ${name_node}->${name_node}1;
        `)
        
    }

}