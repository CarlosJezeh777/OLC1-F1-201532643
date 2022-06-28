import { Expression } from "../abstract/expression";
import { Instruccion } from "../abstract/instruccion";
import { Acces } from "../Expresiones/Acceso";
import { Enviroment } from "../Symbols/enviroment";

export class AsignarV extends Instruccion{
    constructor(
        public nombre: string,
        public index: Expression,
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
        const i = arreglo.index - 1
        //console.log(i);
        
        const indice = this.index.ejecutar(env)
        //console.log(indice);
        
        const valor =  this.valor.ejecutar(env)
        //console.log(valor);
        
        if(indice.value > i){
            throw new Error("error semantico");
            
        }
        if(valor.type != arreglo.type){
            throw new Error("error semantico");
            
        }
        arreglo.value[indice.value] = valor.value

        //console.log(arreglo);
        

        env.actualizar_vector(this.nombre,arreglo)
        
        //console.log(expresion);
        
        
    }
}