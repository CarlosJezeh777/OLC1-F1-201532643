import { Instruccion } from "../abstract/instruccion";
import { Enviroment } from "../Symbols/enviroment";
import { Asignar } from "./asignar";
import { Declaracion } from "./declaraciones";
import { Metodos } from "./IMetdos";

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
            throw "Error semantico, no ecnontre esta funcion"
        }

        metodo.instrucciones.ejecutar(env_instrucciones) 

    }

    public ast(): void {
        
    }

}