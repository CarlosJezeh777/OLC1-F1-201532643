import { Expression } from "../abstract/expression";
import { Instruccion } from "../abstract/instruccion";
import { Acces } from "../Expresiones/Acceso";
import { Errores } from "../Singleton/Errores";
import { Singleton } from "../Singleton/Singleton";
import { Enviroment } from "../Symbols/enviroment";
import { Type } from "../Symbols/type";

const s = Singleton.getInstance()
export class Declaracion extends Instruccion{
    constructor(
        public tipo: Type, 
        public nombre: string,
        public expresion:any,
        public editable: boolean,
        line: number,
        colum: number
    ){
        super(line,colum)
    }
    public ejecutar(env:Enviroment) {

        //console.log("Declarando variable: " + this.nombre );
        
        if(this.expresion == null){
            if(this.tipo == Type.INT){
                if(this.editable == true){
                    env.guardar_varible(this.nombre,0,this.tipo,true)
                }else{
                    env.guardar_varible(this.nombre,0,this.tipo,this.editable)
                }        
            }else if(this.tipo == Type.BOOLEAN){
                if(this.editable == true){
                    env.guardar_varible(this.nombre,true,this.tipo,this.editable)
                    }else{
                        env.guardar_varible(this.nombre,true,this.tipo,this.editable)
                    }
            }else if(this.tipo == Type.STRING){
                if(this.editable == true){
                    env.guardar_varible(this.nombre,"",this.tipo,this.editable)
                    }else{
                        env.guardar_varible(this.nombre,"",this.tipo,this.editable)
                    }
            }else if(this.tipo == Type.CHAR){
                if(this.editable == true){
                    env.guardar_varible(this.nombre,'',this.tipo,this.editable)
                    }else{
                        env.guardar_varible(this.nombre,'',this.tipo,this.editable)
                    }
            }else if(this.tipo == Type.DOUBLE){
                if(this.editable == true){
                        env.guardar_varible(this.nombre,0,this.tipo,this.editable)
                    }else{
                        env.guardar_varible(this.nombre,0,this.tipo,this.editable)
                    }
            }else{
                s.addErrores(new Errores("Declaracion: variable nula","Semantico",this.line,this.colum))
            }
        }


        const expresion = this.expresion.ejecutar(env)
        
        //console.log(expresion.value);
        //console.log(expresion.type);

        if(env.buscar_variable(this.nombre)){
            s.addErrores(new Errores("declaracion: la variable ya exite, y no se puede repetir","Semantico",this.line,this.colum))
            throw "Error semantico, la variable ya exite, y no se puede repetir"
        }
        
        if(this.editable == true){
            env.guardar_varible(this.nombre,expresion.value ,expresion.type,this.editable)
            }else{
            env.guardar_varible(this.nombre,expresion.value ,expresion.type,this.editable)
            }
    }

    public ast(): void {
        
        const nombreNodo = `node_${this.line}_${this.colum}_`
        s.addAst(`
        ${nombreNodo}[label="Declaracion"];
        ${nombreNodo}1[label="Nombre: ${this.nombre}"];
        ${nombreNodo}2[label="Tipo: ${this.tipo}"];
        ${nombreNodo}->${nombreNodo}1
        ${nombreNodo}->${nombreNodo}2
        ${nombreNodo}->${this.expresion.ast()}`)
        
    }
}