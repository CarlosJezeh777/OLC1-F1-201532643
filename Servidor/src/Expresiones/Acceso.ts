import { Expression } from "../abstract/expression";
import { Retorno } from "../abstract/Retorno";
import { Enviroment } from "../Symbols/enviroment";

export class Acces extends Expression{
    constructor(
        private id: string,
        line: number,
        column: number
    ){
        super(line,column)

    }

    public ejecutar(env: Enviroment): Retorno {
        
        const variable_ts = env.get_variable(this.id);

        if(variable_ts == null || variable_ts ==  undefined){
            throw "Error Semantico, esta variable no existe"
        }

        return  {
            value: variable_ts.value,
            type: variable_ts.type
        }
    }

} 