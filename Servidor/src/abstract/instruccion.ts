import { Enviroment } from "../Symbols/enviroment";

export abstract class Instruccion {
    constructor(
        public line: number,
        public colum: number
    ) {
        this.line  = line;
        this.colum  = colum;                                                                                                                                                                                                                                                   
    }                
    public abstract ejecutar(env:Enviroment): any   
    public abstract ast(): void                                                                                                                                                                                                
}