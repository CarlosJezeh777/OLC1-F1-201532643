import { Expression } from "../abstract/expression";
import { Instruccion } from "../abstract/instruccion";
import { Singleton } from "../Singleton/Singleton";
import { utilesArrays } from "../Singleton/UtilesArrays";
import { Enviroment } from "../Symbols/enviroment";
import { Type } from "../Symbols/type";
import { Bloque } from "./Bloque";

export class Else_If extends Instruccion{
    constructor(
        public expresion:Expression,
        public instrucccion: Bloque,
        line: number,
        colum: number
    ){
        super(line,colum)
    }
    public ejecutar(env:Enviroment) {

        /*const new_env = new  Enviroment(env);
        const result = this.expresion.ejecutar(env);
        
        if(result.type != Type.BOOLEAN){
            throw new Error("la condidicion tiene que ser una expresion booleana");
            
        }

        if(result.value == true){
            this.instrucccion.ejecutar(new_env);
        }*/
        const util = utilesArrays.getInstance();
        util.addElseIf(this)
        //console.log(expresion);
        
        
        
    }
    public ast(): void {
        
    }
}