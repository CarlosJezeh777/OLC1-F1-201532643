import { Expression } from "../abstract/expression"
import { Instruccion } from "../abstract/instruccion"
import { Singleton } from "../Singleton/Singleton"
import { Enviroment } from "../Symbols/enviroment"
import { Type } from "../Symbols/type"

export class Type_Of extends Instruccion{
    constructor(
        public expresion: Expression,
        line: number,
        column: number
    ){
        super(line,column)
    }
    public ejecutar(env:Enviroment) {
        
        const tmp =  this.expresion.ejecutar(env);

        const s =  Singleton.getInstance();
        if(tmp.type == Type.INT){
            s.addConsola("Integer\n");
        }else if(tmp.type == Type.BOOLEAN){
            s.addConsola("Boolean\n");
        }else if(tmp.type == Type.CHAR){
            s.addConsola("Caracter\n");
        }else if(tmp.type == Type.STRING){
            s.addConsola("cadena\n");
        }
        
       
        
    }
}