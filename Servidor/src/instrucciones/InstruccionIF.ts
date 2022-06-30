import { Expression } from "../abstract/expression";
import { Instruccion } from "../abstract/instruccion";
import { Enviroment } from "../Symbols/enviroment";
import { Type } from "../Symbols/type";
import { Bloque } from "./Bloque";

export class Iif extends Instruccion{
    constructor(
        public expresion:Expression,
        private instruc: Bloque,
        line: number,
        colum: number
    ){
        super(line,colum)
    }
    public ejecutar(env:Enviroment) {

        const new_env =  new Enviroment(env)

        const expresion = this.expresion.ejecutar(env)
        console.log(expresion);
        
        if(expresion.value == true){
            //console.log("aqui van las instrucicones");
            this.instruc.ejecutar(new_env);
                       
        }
        
        //console.log(expresion);
        
        
        
    }

    public ast(): void {
        
    }
}