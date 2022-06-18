import { Else_If } from "../instrucciones/else_if";

export class Singleton{
    private static instance: Singleton

    private consola: string = " "
    private errores: any[] = [] 
    private elses_if: Else_If[] = []

    constructor(){

    }

    public static getInstance(): Singleton{
        if(!Singleton.instance){
            Singleton.instance = new Singleton();
        }
        return Singleton.instance
    }

    public addConsola(data: string){
        this.consola += data;
    }

    public getConsola(): string{
        return this.consola
    }

    public addErrores(data: any){
            this.errores.push(data);
    }

    public getErrores():any[]{
        return this.errores
    }

    public addElseIf(data: Else_If){
        this.elses_if.push(data);
    }

    public getElseIF():Else_If[]{
        return this.elses_if
    }

    public deleteElemets(){
        this.elses_if.length = 0
        
    }

}