
import { Enviroment } from "../Symbols/enviroment"
import { Retorno } from "./Retorno"

export abstract class Expression {
    constructor(public line: number, public column: number) {
        this.line =  line
        this.column =  column
    }
    public abstract ejecutar(env:Enviroment): Retorno
}