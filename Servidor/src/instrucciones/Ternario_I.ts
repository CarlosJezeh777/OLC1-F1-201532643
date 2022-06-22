import { Expression } from "../abstract/expression";
import { Instruccion } from "../abstract/instruccion";
import { Enviroment } from "../Symbols/enviroment";
import { Type } from "../Symbols/type";

export class TernarioI extends Instruccion{
    constructor(
        public expresion:Expression,
        private instruccionTrue: any,
        private instruccionFalse: any,
        line: number,
        colum: number
    ){
        super(line,colum)
    }
    public ejecutar(env:Enviroment){
        

        const new_env =  new Enviroment(env)

        const expresion = this.expresion.ejecutar(env)
        
        if(expresion.type != Type.BOOLEAN){
            throw new Error("error");
            
        }
        //console.log(expresion);
        
        if(expresion.value == true){
            for (const elemeto of this.instruccionTrue) {
                try {
                    elemeto.ejecutar(new_env)
                } catch (error) {
                    console.log(error);
                    
                }
            }
            //console.log("aqui van las instrucicones");
                       
        }else if (expresion.value == false){
            for (const elemeto of this.instruccionFalse) {
                try {
                    elemeto.ejecutar(new_env)
                } catch (error) {
                    console.log(error);
                    
                }
            }
        
        }
        
        //console.log(expresion);
        
        
    }
}