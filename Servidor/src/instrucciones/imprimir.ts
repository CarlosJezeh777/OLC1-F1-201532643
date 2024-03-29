import { Expression } from "../abstract/expression"
import { Instruccion } from "../abstract/instruccion"
import { Errores } from "../Singleton/Errores"
import { Singleton } from "../Singleton/Singleton"
import { Enviroment } from "../Symbols/enviroment"

const s = Singleton.getInstance()
        

export class Imprimir extends Instruccion{
    constructor(
        public tipo: Number,
        public expresion: Expression |  null,
        line: number,
        column: number
    ){
        super(line,column)
    }
    public ejecutar(env:Enviroment) {
        if(this.expresion == null){
            s.addErrores(new Errores("Print: salta de linea","Semantico",this.line,this.colum))
            throw "Es un salto de linea";
            
        }
        const tmp =  this.expresion.ejecutar(env)

        
        if(this.tipo == 0){
            s.addConsola(tmp.value);
        }else if(this.tipo == 1){
            s.addConsola(tmp.value+"\n");
        }else if(this.tipo == 2){
            s.addConsola("\n\r");
        }
        
    }

    public ast(): void {
        const nombreNodo = `node_${this.line}_${this.colum}_`
        if (this.tipo == 0){s.addAst(`${nombreNodo}[label="Print"];`)}
        else if(this.tipo == 1){s.addAst(`${nombreNodo}[label="Println"];`)}
        
        if (this.expresion!= null){s.addAst(`${nombreNodo}->${this.expresion.ast()}`)}
        
    }
}