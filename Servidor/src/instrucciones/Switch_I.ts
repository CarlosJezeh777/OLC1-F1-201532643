import { Instruccion } from "../abstract/instruccion";
import { Acces } from "../Expresiones/Acceso";
import { utilesArrays } from "../Singleton/UtilesArrays";
import { Enviroment } from "../Symbols/enviroment";
import { Casos } from "./Cases";

export class Switch_I extends Instruccion{
    constructor(
        public nombre:string,
        private casos: Casos[],
        line: number,
        colum: number
    ){
        super(line,colum)
    }
    public ejecutar(env:Enviroment) {
        console.log("esoy en el switch");
        
        const new_env =  new Enviroment(env)
        
        //console.log(this.nombre);
        const verificar =  new Acces(this.nombre,this.line,this.colum)
        const valor =  verificar.ejecutar(env)
        //console.log(valor);
        

        
            for (const elemento of this.casos) {
                elemento.ejecutar(env)
            }
            const util = utilesArrays.getInstance()
            const elementos = util.getCasos()
            //console.log(elementos);
            
            
            for (const element of elementos) {
                
                const valor_caso = element.valor.ejecutar()
                //console.log(valor_caso);
                //console.log(valor);
                const Instrucciones = element.instrucccion
                
                if(valor.value == valor_caso.value){
                    //console.log("no entra en el caso");
                    for (const iterator of Instrucciones) {
                        iterator.ejecutar(new_env)
                    }
                
                    break;
                }                   
            }

            util.deleteCasos()
           
            

        }
        
        //console.log(expresion);
        
        
        
    }
