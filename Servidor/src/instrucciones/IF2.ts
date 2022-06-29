import { Expression } from "../abstract/expression";
import { Instruccion } from "../abstract/instruccion";
import { Singleton } from "../Singleton/Singleton";
import { utilesArrays } from "../Singleton/UtilesArrays";
import { Enviroment } from "../Symbols/enviroment";
import { Type } from "../Symbols/type";
import { Bloque } from "./Bloque";

export class If_Else_If extends Instruccion{
    constructor(
        public expresion:Expression,
        private instruccion: Bloque,
        private else_if: Instruccion[],
        line: number,
        colum: number
    ){
        super(line,colum)
    }
    public ejecutar(env:Enviroment) {

        const new_env =  new Enviroment(env)
        
        const expresion = this.expresion.ejecutar(env)
        //console.log(expresion);
        
        if(expresion.value == true){
            //console.log("aqui van las instrucicones");
            this.instruccion.ejecutar(new_env)               
        }else if(expresion.value == false){

            //console.log("si entro en el false");
            
            for (const elemento of this.else_if) {
                elemento.ejecutar(env)
            }
            const util = utilesArrays.getInstance()
            const elementos = util.getElseIF()
            //console.log(elementos);
            
            
            for (const element of elementos) {
                
                const expre2 = element.expresion.ejecutar(env)
                if(expre2.type != Type.BOOLEAN){
                    throw new Error("Error semantico");                    
                }

                if(expre2.value == true){
                    element.instrucccion.ejecutar(new_env)
                    break;
                }                   
            }

            util.deleteElses()
           
            

        }
        
        //console.log(expresion);
        
        
        
    }

    public ast(): void {
        
    }
}