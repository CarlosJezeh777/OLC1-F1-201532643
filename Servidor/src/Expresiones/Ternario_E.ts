import { Expression } from "../abstract/expression";
import { Instruccion } from "../abstract/instruccion";
import { Retorno } from "../abstract/Retorno";
import { Enviroment } from "../Symbols/enviroment";
import { Type } from "../Symbols/type";

export class TernarioE extends Expression{
    constructor(
        public expresion:Expression,
        private expresionTrue: Expression,
        private expresionFalse: Expression,
        line: number,
        colum: number
    ){
        super(line,colum)
    }
    public ejecutar(env:Enviroment): Retorno {
        let resultado : Retorno = {
            value: null,
            type: Type.error
        }

        const new_env =  new Enviroment(env)

        const expresion = this.expresion.ejecutar(env)
        
        //console.log(expresion);
        
        if(expresion.value == true){
            //console.log("aqui van las instrucicones");
            const expresionT =  this.expresionTrue.ejecutar(new_env);
            resultado = {
                value: expresionT.value,
                type: expresionT.type
            }
                       
        }else if (expresion.value == false){
            const expresionF = this.expresionFalse.ejecutar(new_env);
            resultado = {
                value: expresionF.value,
                type: expresionF.type
            }
        }
        
        //console.log(expresion);
        
        
        return resultado
    }
    public ast(): string {
        const name_nodo = `node_${this.line}_${this.column}_`
        return `
        ${name_nodo};
        ${name_nodo}[label="Ternario Expresion"];
        ${name_nodo}->${this.expresion.ast()}
        ${name_nodo}->${this.expresionTrue.ast()}
        ${name_nodo}->${this.expresionFalse.ast()}
        
        `
    }
}