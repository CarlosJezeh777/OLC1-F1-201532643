export abstract class Instruccion {
    constructor(
        public line: number,
        public colum: number
    ) {
        this.line  = line;
        this.colum  = colum;                                                                                                                                                                                                                                                   
    }                
    public abstract ejecutar(): any                                                                                                                                                                                                   
}