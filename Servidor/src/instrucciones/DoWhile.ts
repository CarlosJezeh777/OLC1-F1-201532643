import { Expression } from "../abstract/expression";
import { Instruccion } from "../abstract/instruccion";
import { Errores } from "../Singleton/Errores";
import { Singleton } from "../Singleton/Singleton";
import { Enviroment } from "../Symbols/enviroment";
import { Type } from "../Symbols/type";
import { Bloque } from "./Bloque";

const s = Singleton.getInstance()
        
export class DoWhile extends Instruccion{
    constructor(
        public condicion:Expression,
        private instrucciones: Bloque,
        line: number,
        colum: number
    ){
        super(line,colum)
    }
    public ejecutar(env:Enviroment) {
        let band: boolean = true;
        const new_env =  new Enviroment(env)
        
        this.instrucciones.ejecutar(new_env)
 
        while(band == true){
            //console.log("no entra aqui dowhile");
            
            let cond = this.condicion.ejecutar(env)
            //console.log(cond);
            if(cond.value == false){
                break
            }
            if(cond.type != Type.BOOLEAN){
                s.addErrores(new Errores("Do While: La condicion tiene que ser un boolean","Semantico",this.line,this.colum))
                throw new Error("la condicion tiene que ser un boolean");
            
            }
            this.instrucciones.ejecutar(new_env)
 
            
        
        }
    }

    public ast(): void {
        const name_node = `node_${this.line}_${this.colum}_`
        s.addAst(`
        ${name_node}[label="Do While"];
        ${name_node}1[label="Condicion"];
        ${name_node}->${name_node}1;
        ${name_node}1->${this.condicion.ast()}
        ${name_node}->node_${this.instrucciones.line}_${this.instrucciones.colum}_;        
        `)
        this.instrucciones.ast()
    }
}