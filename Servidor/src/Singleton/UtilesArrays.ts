import { Casos } from "../instrucciones/Cases";
import { Else_If } from "../instrucciones/else_if";

export class utilesArrays{
    private static instance: utilesArrays

    private elses_if: Else_If[] = []
    private casos: Casos[] = []

    constructor(){

    }

    public static getInstance(): utilesArrays{
        if(!utilesArrays.instance){
            utilesArrays.instance = new utilesArrays();
        }
        return utilesArrays.instance
    }


    public addElseIf(data: Else_If){
        this.elses_if.push(data);
    }

    public getElseIF():Else_If[]{
        return this.elses_if
    }

    public deleteElses(){
        this.elses_if.length = 0
        
    }

    public addCasos(data: Casos){
        this.casos.push(data);
    }

    public getCasos():Casos[]{
        return this.casos
    }

    public deleteCasos(){
        this.casos.length = 0
        
    }

}