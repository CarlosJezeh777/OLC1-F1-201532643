import { Instruccion } from "../abstract/instruccion";
import { Errores } from "../Singleton/Errores";
import { Singleton } from "../Singleton/Singleton";
import { Enviroment } from "../Symbols/enviroment";

const singleton = Singleton.getInstance()
export class Bloque extends Instruccion{
    constructor(
        private instruccion: any[],
        line: number,
        colum: number
    ){
        super(line,colum)
    }
    public ejecutar(env:Enviroment) {

        const new_env = new Enviroment(env);

        for (const elemento of this.instruccion) {
            try {
                elemento.ejecutar(new_env);
            } catch (error) {
                singleton.addErrores(new Errores("Bloque: Error en el bloque","Semantico",elemento.line,elemento.colum))
                
            }
        }
        
        //console.log(env);
        
    }
    public ast(): void {
        const s = Singleton.getInstance()
        const nombre_nodo =`node_${this.line}_${this.colum}_`
        s.addAst(`${nombre_nodo}[label="Bloque"];`)

        for (const elemento of this.instruccion) {
            try {

                elemento.ast()
                s.addAst(`${nombre_nodo}->node_${elemento.line}_${elemento.colum}_;`)
                
            } catch (error) {
                console.log(error);
                
            }
        }
        
    }
}