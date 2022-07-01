import { Expression } from "../abstract/expression"
import { Instruccion } from "../abstract/instruccion"
import { Retorno } from "../abstract/Retorno"
import { Acces } from "../Expresiones/Acceso"
import { Singleton } from "../Singleton/Singleton"
import { Enviroment } from "../Symbols/enviroment"
import { Type } from "../Symbols/type"
import { OpcionesInDe } from "./IncrementosOpc"

export class InDe extends Instruccion{
    constructor(
        private lado: number,
        private nombre: string,
        private tipo: OpcionesInDe,
        line: number,
        column: number
    ){
        super(line,column)
    }
    public ejecutar(env:Enviroment){
        let nuevo: number;
        
        const id =  new Acces(this.nombre,this.line,this.colum);
        let valor = id.ejecutar(env);

        
        //console.log(valor);
        const tmp = env.get_Enviroment(this.nombre);
        
        
        if(this.lado == 0 && this.tipo == OpcionesInDe.MAMA){

                nuevo = ++valor.value;                                
                tmp?.actualizar_variable(this.nombre,nuevo);  
        }else if(this.lado == 1 && this.tipo == OpcionesInDe.MAMA){
            nuevo = valor.value + 1;                
            tmp?.actualizar_variable(this.nombre,nuevo);  
    
        }else if(this.lado == 0 && this.tipo == OpcionesInDe.MEME){
            nuevo = --valor.value;                
            tmp?.actualizar_variable(this.nombre,nuevo);  
    
        }else if(this.lado == 1 && this.tipo == OpcionesInDe.MEME){
            nuevo = valor.value - 1;                
            tmp?.actualizar_variable(this.nombre,nuevo);  
    
        }   
        
    }

    public ast(): void {
        const s = Singleton.getInstance()
        const name_node = `node_${this.line}_${this.colum}_`
        if(this.tipo == OpcionesInDe.MAMA){s.addAst(`${name_node}[label="incremento"];`)}
        else if(this.tipo == OpcionesInDe.MEME){s.addAst(`${name_node}[label="decremento"];`)}
    }
}