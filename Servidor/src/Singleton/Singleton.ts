export class Singleton{
    private static instance: Singleton

    private consola: string = " "
    private errores: any[] = [] 

    constructor(){

    }

    public static getInstance(): Singleton
    {
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

}