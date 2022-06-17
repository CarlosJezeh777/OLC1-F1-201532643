import { log } from "console";
import { Expression } from "../abstract/expression";
import { Instruccion } from "../abstract/instruccion";
import { Enviroment } from "../Symbols/enviroment";
import { Type } from "../Symbols/type";
import { Bloque } from "./Bloque";

export class IWhile extends Instruccion{
    constructor(
        public condicion:Expression,
        private instrucciones: Bloque,
        line: number,
        colum: number
    ){
        super(line,colum)
    }
    public ejecutar(env:Enviroment) {
        let band: boolean = true;
        const new_env =  new Enviroment(env)
        while(band== true){
            let cond = this.condicion.ejecutar(env)
            console.log(cond);
        
            if(cond.type != Type.BOOLEAN){
                throw new Error("la condicion tiene que ser un boolean");
            
            }
            this.instrucciones.ejecutar(new_env);    
        
            if(cond.value == false){
                band = false
            }
        }
        
        
    }
        //console.log(expresion);
        
        
}
