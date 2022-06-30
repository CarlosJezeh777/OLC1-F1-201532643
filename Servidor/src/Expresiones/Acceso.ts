import { Expression } from "../abstract/expression";
import { Retorno } from "../abstract/Retorno";
import { Errores } from "../Singleton/Errores";
import { Singleton } from "../Singleton/Singleton";
import { Enviroment } from "../Symbols/enviroment";
import { Type } from "../Symbols/type";


const s = Singleton.getInstance()
export class Acces extends Expression{
    constructor(
        private id: string,
        line: number,
        column: number
    ){
        super(line,column)

    }

    public ejecutar(env: Enviroment): Retorno {
        
        let resultado: Retorno ={
            value: null,
            type:Type.error
        }
        const variable_ts = env.get_variable(this.id);
        const variable_vector = env.get_vector(this.id)
        const variable_Matriz = env.get_Matriz(this.id)
        
        if(variable_ts != null || variable_ts !=  undefined){
            resultado =   {
                value: variable_ts.value,
                type: variable_ts.type
            }    
        }else if(variable_vector != null){
            resultado =   {
                value: variable_vector.value,
                type: variable_vector.type
            }    
        }else if(variable_Matriz != null){
            let matriz:string;
            const index = variable_Matriz?.index
            let cont:number = 0;
            let cont2:number = 0;
            matriz = "["
            for (let i = 0; i < index; i++) {
                if(cont2 >= 1){matriz += ","}
                cont = 0;
                matriz += "["   
                for (let j = 0; j < variable_Matriz.index2; j++) {
                    if(cont >= 1){matriz += ","}
                    matriz += variable_Matriz.value[i][j]
                    cont++;
                }
                matriz += "]"
                cont2++;
             }
             matriz += "]"
             
             
            resultado =   {
                value: variable_Matriz.value,
                type: variable_Matriz.type
            }    
        }else{
            s.addErrores(new Errores("Acceso: no se encontro la variable en la tabla de simbolos","Semantico",this.line,this.column))
                       
            throw new Error("error semantico aqui");
            
        }

        return resultado
    }


    public ast(): string {
        const name_nodo = `node_${this.line}_${this.column}_`
        return `
        ${name_nodo};
        ${name_nodo}[label="${this.id}"];
        `
    }

} 