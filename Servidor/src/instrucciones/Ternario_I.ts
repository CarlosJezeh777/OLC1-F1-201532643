import { Expression } from "../abstract/expression";
import { Instruccion } from "../abstract/instruccion";
import { Singleton } from "../Singleton/Singleton";
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
    public ast(): void {
        const s = Singleton.getInstance()
        const nombre_nodo =`node_${this.line}_${this.colum}_`
        s.addAst(`
        ${nombre_nodo}[label="Ternario intrucccion"];
        ${nombre_nodo}->${this.expresion.ast()}
        `)
        for (const elemeto of this.instruccionTrue) {
            try {
                elemeto.ast()
                s.addAst(`${nombre_nodo}->node_${elemeto.line}_${elemeto.colum}_;`)

            } catch (error) {
                console.log(error);
                
            }
        }
        for (const elemeto of this.instruccionFalse) {
            try {
                elemeto.ast()
                s.addAst(`${nombre_nodo}->node_${elemeto.line}_${elemeto.colum}_;`)
            } catch (error) {
                console.log(error);
                
            }
        }
    }
}