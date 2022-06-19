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
        
        //console.log(this);
        let metodo= env.get_metodoP(this.id)
        //console.log(metodo?.parametros);
        //console.log(this.parametros);
        
        
    
        //si lo encontro
        //new env para declarar los parametros
        let env_parametros= new Enviroment(env); 
        let env_instrucciones = new Enviroment(env_parametros);        
        let valores: any[] = [];
        let nombres: any[] = [];

        for (const dec of metodo?.parametros) {
            let name = dec.nombre
            nombres.push(name)                     
        }
        for (const elemento of this.parametros) {
            const element =  elemento.ejecutar(env)
            valores.push(element)
            
        }
        let declaraciones: Declaracion[] = []
        for (let i = 0; i < nombres.length; i++) {
            declaraciones.push(new Declaracion(valores[i].type,nombres[i],valores[i].value,true,this.line,this.colum));       
        }
    
        
        for (const elemento of declaraciones) {    
            elemento.ejecutar(env_instrucciones)            
        }

        console.log(env_parametros);
        

        if (metodo== null) {
            throw "Error semantico, no ecnontre esta funcion"
        }

        metodo.instrucciones.ejecutar(env_instrucciones) 

    }

}