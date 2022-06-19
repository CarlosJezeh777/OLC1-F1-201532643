import { Retorno } from "../abstract/Retorno";
import { Else_If } from "../instrucciones/else_if";
import { Metodos } from "../instrucciones/IMetdos";
import { MetodosP } from "../instrucciones/MetodoPara";
import { Symbolos } from "./symbols";
import { Type } from "./type";

export class Enviroment{
    private tablaSimbolos:Map<string, Symbolos>;
    private tablaSimbolos_metodos : Map<string, any>

    constructor(public anterior: Enviroment | null ){
        this.tablaSimbolos = new Map();
        this.tablaSimbolos_metodos =  new Map();
    }

    public getEnv(){
        return this.tablaSimbolos
    }

    public guardar_funcion(nombre: string, valor:any): boolean {
        if(!this.buscar_metodo(nombre)){
            this.tablaSimbolos_metodos.set(nombre, valor);
            return true
        } 
        console.log("este metodo ["+nombre+"] ya existe...");
        return false
        
      }

    public buscar_metodo(nombre:string){
        for(let entry of Array.from(this.tablaSimbolos_metodos.entries())){
            if(entry[0] == nombre) return true
        }
        return false
    }

    public guardar_varible(nombre: string, valor: any, type: Type, editable: boolean):boolean{
        if(!this.buscar_variable(nombre)){
            this.tablaSimbolos.set(nombre, new Symbolos(valor,nombre,type,editable));
            return true
        }
        console.log("esta variable ["+nombre+"] ya existe...");
        return false
    }

    public buscar_variable(nombre: string): boolean {
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

    public getValor_variable(nombre: string): Retorno {
        for (let entry of Array.from(this.tablaSimbolos.entries())) {
            if (entry[0] == nombre) return {value: entry[1], type: entry[1].type};
        }
        return {value: null, type: Type.error}
    }

    public actualizar_variable(nombre: string, new_valor: any) {
        for (let entry of Array.from(this.tablaSimbolos.entries())) {
          if (entry[0] == nombre) {
              entry[1].value = new_valor;
          }
        }
    }

    public actualizar_variable2(nombre: string, new_valor: any, env: Enviroment) {
        for (let entry of Array.from(env.tablaSimbolos.entries())) {
          if (entry[0] == nombre) {
              entry[1].value = new_valor;
          }
        }
    }
    
  public get_variable(nombre: string): Symbolos | undefined | null {
    let env: Enviroment| null = this;
    while (env != null) {
        if (env.tablaSimbolos.has(nombre)) return env.tablaSimbolos.get(nombre);
        env = env.anterior;
    }
    return null;
    }
    
    public get_metodo(nombre: string): Metodos| undefined | null{
        let env: Enviroment | null = this;
        while (env != null) {
            if (env.tablaSimbolos_metodos.has(nombre)) return env.tablaSimbolos_metodos.get(nombre);
            env = env.anterior;
        }
        return null;
    }
    public get_metodoP(nombre: string): null | MetodosP{
        let env: Enviroment | null = this;
        while (env != null) {
            if (env.tablaSimbolos_metodos.has(nombre)) return env.tablaSimbolos_metodos.get(nombre);
            env = env.anterior;
        }
        return null;
    }

    public get_Enviroment(nombre: string): Enviroment | null {
        let env: Enviroment | null = this;
        while (env != null) {
            if (env.buscar_variable(nombre)){
                return env
            }
            env = env.anterior;
        }
        return null;
    }
}