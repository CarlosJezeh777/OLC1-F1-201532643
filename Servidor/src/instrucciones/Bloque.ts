import { Instruccion } from "../abstract/instruccion";
import { Enviroment } from "../Symbols/enviroment";

export class Bloque extends Instruccion{
    constructor(
        private instruccion: any,
        line: number,
        colum: number
    ){
        super(line,colum)
    }
    public ejecutar(env:Enviroment) {

        const new_env = new Enviroment(env);

        for (const elemento of this.instruccion) {
            try {
                elemento.ejecutar(new_env);
            } catch (error) {
                console.log(error);
                
            }
        }
        
        //console.log(env);
        
    }
}