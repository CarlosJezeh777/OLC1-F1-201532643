import { Expression } from "../abstract/expression";
import { Instruccion } from "../abstract/instruccion";
import { Acces } from "../Expresiones/Acceso";
import { Enviroment } from "../Symbols/enviroment";

export class Asignar extends Instruccion{
    constructor(
        public nombre: string,
        public expresion: Expression,
        line: number,
        column: number
    ){
        super(line,column)
    }
    public ejecutar(env:Enviroment) {
        const verificar = new Acces(this.nombre,this.line,this.colum)
        const acces =  verificar.ejecutar(env)
        const expresion = this.expresion.ejecutar(env)
        //console.log(expresion);
        

        if(env.buscar_variable(this.nombre)){
            console.log("si esta");
            
        }else{
            console.log("no esta");
            
        }

        const tmp = env.get_Enviroment(this.nombre);
        //console.log(tmp);
        
        //console.log("haciendo una asinacion: " + this.nombre)
        console.log(expresion.value)
        //console.log(expresion.type)
        tmp?.actualizar_variable(this.nombre,expresion.value)
        
    }
}