import { Expression } from "../abstract/expression";
import { Instruccion } from "../abstract/instruccion";
import { Acces } from "../Expresiones/Acceso";
import { Singleton } from "../Singleton/Singleton";
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
        const tmp = env.get_Enviroment(this.nombre);
        tmp?.actualizar_variable(this.nombre,expresion.value)
        
    }

    public ast(){
        const s = Singleton.getInstance()
        const nombre_nodo =`node_${this.line}_${this.colum}_`
        s.addAst(`
        ${nombre_nodo}[label="Asignacion"];
        ${nombre_nodo}1[label="Nombre: ${this.nombre}"];
        ${nombre_nodo}->${nombre_nodo}1;
        ${nombre_nodo}->${this.expresion.ast()}
        `)
        
    }
}