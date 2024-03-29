import { Expression } from "../abstract/expression";
import { Instruccion } from "../abstract/instruccion";
import { Singleton } from "../Singleton/Singleton";
import { Enviroment } from "../Symbols/enviroment";
import { Type } from "../Symbols/type";
import { Bloque } from "./Bloque";

export class If_Else extends Instruccion{
    constructor(
        public expresion:Expression,
        private instrucTrue: Bloque,
        private instrucFalse: Bloque,
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
            this.instrucTrue.ejecutar(new_env);
                       
        }else if (expresion.value == false){
            this.instrucFalse.ejecutar(new_env);
        }
        
        //console.log(expresion);
        
        
        
    }

    public ast(): void {
        const s = Singleton.getInstance()
        const name_node = `node_${this.line}_${this.colum}_`
        s.addAst(`
        ${name_node}[label="if else"];
        ${name_node}->${this.expresion.ast()}
        ${name_node}->${this.instrucTrue.ast()};
        ${name_node}->${this.instrucFalse.ast()};        
        `)
    }
}