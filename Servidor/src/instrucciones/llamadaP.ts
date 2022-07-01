import { Instruccion } from "../abstract/instruccion";
import { Errores } from "../Singleton/Errores";
import { Singleton } from "../Singleton/Singleton";
import { Enviroment } from "../Symbols/enviroment";
import { Asignar } from "./asignar";
import { Declaracion } from "./declaraciones";
import { Metodos } from "./IMetdos";

const s = Singleton.getInstance()
export class LlamadaP extends Instruccion{
    constructor(
        public id:string,
        public parametros: any,
        line: number, 
        column : number
    ) {
        super(line,column);
    }

    public ejecutar(env:Enviroment) {
        
        let metodo= env.get_metodoP(this.id)
        let env_parametros= new Enviroment(env); 
        let env_instrucciones = new Enviroment(env_parametros);   
        
        let nombres: any[] = [];
        let valores: any[] = [];
        
        for (const dec of metodo?.parametros) {
            nombres.push(dec.nombre)                       
        }

        for (const elemento of this.parametros) {
            const elem = elemento.ejecutar(env_parametros)
            valores.push(elem)
        }
        
        for (let i = 0; i < nombres.length; i++) {
            env_parametros.guardar_varible(nombres[i],valores[i].value,valores[i].type,true)
        }
        
        if (metodo== null) {
            s.addErrores(new Errores("no se encontro la funcion","semantico",this.line,this.colum))
            throw "Error semantico, no ecnontre esta funcion"
        }

        metodo.instrucciones.ejecutar(env_instrucciones) 

    }

    public ast(): void {
        
        const name_node = `node_${this.line}_${this.colum}_`
        s.addAst(`
        ${name_node}[label="Call"];
        ${name_node}1[label="${this.id}"];
        ${name_node}->${name_node}1;
        `)
    }

}