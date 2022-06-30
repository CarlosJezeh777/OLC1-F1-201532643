import { Else_If } from "../instrucciones/else_if";
import { Errores } from "./Errores";

export class Singleton{
    private static instance: Singleton

    private consola: string = " "
    private ast: string = " "
    private Gts: string = " "
    private errores: Errores[] = [] 
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

    public addGts(data: string){
        this.Gts += data;
    }

    public getGts(): string{
        return this.Gts
    }

    public addAst(data: string){
        this.ast += data;
    }

    public getAst(): string{
        return this.ast
    }

    public addErrores(data: Errores){
            this.errores.push(data);
    }

    public getErrores():Errores[]{
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