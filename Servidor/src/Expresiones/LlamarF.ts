import { Expression } from "../abstract/expression";
import { Instruccion } from "../abstract/instruccion";
import { Retorno } from "../abstract/Retorno";
import { Enviroment } from "../Symbols/enviroment";
import { Type } from "../Symbols/type";

export class LlamadaF extends Expression{
    constructor(
        public id:string,
        line: number, 
        column : number
    ) {
        super(line,column);
    }

    public ejecutar(env:Enviroment) : Retorno{
        let resultado: Retorno =  {
            value: null,
            type:Type.error
        }
        
        //console.log(this);
        const funcion= env.get_Funcion(this.id)
        //console.log(metodo);

        let env_instrucciones = new Enviroment(env);        


        if (funcion== null) {
            throw "Error semantico, no ecnontre esta funcion"
        }

        for (const elemento of funcion?.instrucciones) {
            try {
                elemento.ejecutar(env_instrucciones)
            } catch (error) {
                console.log(error);
                
            }
        }

        return resultado
    }

}