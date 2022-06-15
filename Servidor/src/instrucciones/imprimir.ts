import { Expression } from "../abstract/expression"
import { Instruccion } from "../abstract/instruccion"
import { Singleton } from "../Singleton/Singleton"
import { Enviroment } from "../Symbols/enviroment"

export class Imprimir extends Instruccion{
    constructor(
        public tipo: Number,
        public expresion: Expression,
        line: number,
        column: number
    ){
        super(line,column)
    }
    public ejecutar(env:Enviroment) {
        const tmp =  this.expresion.ejecutar(env)

        const s = Singleton.getInstance();
        if(this.tipo == 0){
            s.addConsola(tmp.value);
        }else if(this.tipo == 1){
            s.addConsola(tmp.value+"\n");
        }
        
    }
}