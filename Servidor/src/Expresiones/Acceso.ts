import { Expression } from "../abstract/expression";
import { Retorno } from "../abstract/Retorno";
import { Enviroment } from "../Symbols/enviroment";
import { Type } from "../Symbols/type";

export class Acces extends Expression{
    constructor(
        private id: string,
        line: number,
        column: number
    ){
        super(line,column)

    }

    public ejecutar(env: Enviroment): Retorno {
        
        let resultado: Retorno ={
            value: null,
            type:Type.error
        }
        const variable_ts = env.get_variable(this.id);
        const variable_vector = env.get_vector(this.id)
        //console.log(variable_ts);
        

        if(variable_ts != null || variable_ts !=  undefined){
            resultado =   {
                value: variable_ts.value,
                type: variable_ts.type
            }    
        }else if(variable_vector != null){
            resultado =   {
                value: "["+variable_vector.value+"]",
                type: variable_vector.type
            }    
        }else{
            throw new Error("error semantico");
            
        }

        return resultado
    }

} 