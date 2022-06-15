import { Expression } from "../abstract/expression";
import { Instruccion } from "../abstract/instruccion";
import { Enviroment } from "../Symbols/enviroment";
import { Type } from "../Symbols/type";

export class Iif extends Instruccion{
    constructor(
        public expresion:Expression,
        private instruc: any,
        line: number,
        colum: number
    ){
        super(line,colum)
    }
    public ejecutar(env:Enviroment) {

        const new_env =  new Enviroment(env)

        const expresion = this.expresion.ejecutar(env)
        if(expresion.value == true){
            //console.log("aqui van las instrucicones");
            for (const elemento of this.instruc) {
                elemento.ejecutar(new_env);
            }
                       
        }
        
        //console.log(expresion);
        
        
        
    }
}