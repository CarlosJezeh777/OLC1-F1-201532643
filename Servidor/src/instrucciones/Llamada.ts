import { Instruccion } from "../abstract/instruccion";
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
        
    }

}