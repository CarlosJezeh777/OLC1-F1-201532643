import { Expression } from "../abstract/expression";
import { Instruccion } from "../abstract/instruccion";
import { Acces } from "../Expresiones/Acceso";
import { Enviroment } from "../Symbols/enviroment";

export class Push extends Instruccion{
    constructor(
        public nombre: string,
        public valor: Expression,
        line: number,
        column: number
    ){
        super(line,column)
    }
    public ejecutar(env:Enviroment) {

        const arreglo = env.get_vector(this.nombre)
        //console.log(arreglo);
        if(arreglo == null){
            throw new Error("Error semantico");
            
        }

        const valor =  this.valor.ejecutar(env)
        if(valor.type != arreglo.type){
            throw new Error("error semantico");
            
        }
        arreglo.value.push(valor.value)
        arreglo.index = arreglo.index + 1

        //console.log(arreglo);
        

        env.actualizar_vector(this.nombre,arreglo)
        
        //console.log(expresion);
        
        
    }
    public ast(): void {
        
    }
}