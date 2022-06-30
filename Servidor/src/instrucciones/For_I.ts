import { Expression } from "../abstract/expression";
import { Instruccion } from "../abstract/instruccion";
import { Errores } from "../Singleton/Errores";
import { Singleton } from "../Singleton/Singleton";
import { utilesArrays } from "../Singleton/UtilesArrays";
import { Enviroment } from "../Symbols/enviroment";
import { Type } from "../Symbols/type";
import { Asignar } from "./asignar";
import { Bloque } from "./Bloque";
import { Declaracion } from "./declaraciones";
import { InDe } from "./Incrementos";

const s= Singleton.getInstance()
export class For_Inst extends Instruccion{
    constructor(
        public variable:Declaracion | Asignar,
        private condicion: Expression,
        private in_de: InDe,
        private instrucciones: Bloque,
        line: number,
        colum: number
    ){
        super(line,colum)
    }
    public ejecutar(env:Enviroment) {
        //console.log("Estoy en el for");
        //console.log(this);
        
        let band: Boolean =true;
        const env_for =  new Enviroment(env);
        const env_Block =  new Enviroment(env_for);
        this.variable.ejecutar(env_for); 

        while (band) {
             //console.log(index);
            
            let cond = this.condicion.ejecutar(env_for);
            this.in_de.ejecutar(env_for);
            //console.log(cond);
           
            if(cond.type != Type.BOOLEAN){
                s.addErrores(new Errores("For: La condicion tiene que ser un boolean","Semantico",this.line,this.colum))
                
                throw new Error("la condicion tiene que ser un boolean");
            
            }
            if(cond.value == false){
                break
            }
            
            this.instrucciones.ejecutar(env_Block)
            
        
        }   
        
    }
    public ast(): void {
        const name_node = `node_${this.line}_${this.colum}_`
        s.addAst(`
        ${name_node}[label="For"];
        ${name_node}1[label="Condicion"];
        ${name_node}->${name_node}1;
        ${name_node}1->${this.condicion.ast()}
        ${name_node}->node_${this.instrucciones.line}_${this.instrucciones.colum}_;        
        `)
        this.instrucciones.ast()
    }
}