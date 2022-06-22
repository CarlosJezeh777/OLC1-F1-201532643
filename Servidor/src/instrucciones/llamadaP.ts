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
        let asignaciones:Asignar[] = [];
        
        for (const dec of metodo?.parametros) {
            nombres.push(dec.nombre)
            try {
                dec.ejecutar(env_parametros)
            } catch (error) {
                console.log(error);
                
            }                   
        }
        
        for (let i = 0; i < nombres.length; i++) {
            asignaciones.push(new Asignar(nombres[i],this.parametros[i],this.line,this.colum));       
        }
        
        for (const elemento of asignaciones) {
            try {
                elemento.ejecutar(env_parametros)
            } catch (error) {
                console.log(error);
                
            }
        }
       

        //.log(env_parametros);
        

        if (metodo== null) {
            throw "Error semantico, no ecnontre esta funcion"
        }

        metodo.instrucciones.ejecutar(env_instrucciones) 

    }

}