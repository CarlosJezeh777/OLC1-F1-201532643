import { Symbolos } from "./symbols";
import { Type } from "./type";

export class Enviroment{
    private tablaSimbolos: Map<string,Symbolos>;

    constructor(
       public anterior: Enviroment | null 
    ){
        this.tablaSimbolos = new Map();

    }

    public getEnv(){
        return this.tablaSimbolos
    }

    public guardarVarible(nombre: string, valor: any, type: Type){
        if(!this.buscarVariable(nombre)){
            this.tablaSimbolos.set(nombre, new Symbolos(valor,nombre,type));
            return true
        }
        console.log("esta variable ["+nombre+"] ya existe...");
        return false
    }

    public buscarVariable(nombre: string): boolean {
        for (let entry of Array.from(this.tablaSimbolos.entries())) {
            if (entry[0] == nombre) return true;
        }
        return false
    }

    public getTipo_variable(nombre: string): Type {
        for (let entry of Array.from(this.tablaSimbolos.entries())) {
            if (entry[0] == nombre) return entry[1].type;
        }
        return Type.error
    }

    public actualizar_variable(nombre: string, new_valor: any) {
        for (let entry of Array.from(this.tablaSimbolos.entries())) {
          if (entry[0] == nombre) {
              entry[1].value = new_valor;
          }
        }
    }
}