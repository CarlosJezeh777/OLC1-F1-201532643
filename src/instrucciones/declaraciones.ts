import { Instruccion } from "../abstract/instruccion";

class Declaracion extends Instruccion{
    constructor(
        public nombre: string,
        public tipo: string,
        line: number,
        colum: number
    ){
        super(line,colum)
    }
    public ejecutar() {
        
    }
}