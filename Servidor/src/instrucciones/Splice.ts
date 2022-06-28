import { Expression } from "../abstract/expression";
import { Instruccion } from "../abstract/instruccion";
import { Acces } from "../Expresiones/Acceso";
import { Enviroment } from "../Symbols/enviroment";

export class Splice extends Instruccion{
    constructor(
        public nombre: string,
        public indice: number,
        public valor: Expression,
        line: number,
        column: number
    ){
        super(line,column)
    }
    public ejecutar(env:Enviroment) {

        //console.log(this);
        
        const arreglo = env.get_vector(this.nombre)
        console.log(arreglo);
        if(arreglo == null){
            throw new Error("Error semantico");
            
        }

        const valor =  this.valor.ejecutar(env)
        console.log(valor);
        
        if(valor.type != arreglo.type){
            throw new Error("error semantico");
            
        }
        arreglo.value.splice(Number(this.indice),0,valor.value)
        
        
        arreglo.index = arreglo.index + 1

        console.log(arreglo);
        

        env.actualizar_vector(this.nombre,arreglo)
        
        //console.log(expresion);
        
        
    }
}