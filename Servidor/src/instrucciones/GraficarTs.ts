import { Expression } from "../abstract/expression";
import { Instruccion } from "../abstract/instruccion";
import { Acces } from "../Expresiones/Acceso";
import { Singleton } from "../Singleton/Singleton";
import { Enviroment } from "../Symbols/enviroment";

export class GTS extends Instruccion{
    constructor(
        line: number,
        column: number
    ){
        super(line,column)
    }
    public ejecutar(env:Enviroment) {
        const s = Singleton.getInstance()
        const esteEnv = env.getEnv()
        //console.log(esteEnv);
        let tabla:string = "";
        let name:string = `nodo_${this.line}_${this.colum}`
        let nameNodo:string ="linea: " + this.line + " columna: " + this.colum
        tabla += name + "[label=<\n"+
            "<TABLE  border=\"1\" cellspacing=\"0.1\">\n"+
            "<TR><TD colspan=\"3\" bgcolor=\"#ff6961\">"+nameNodo+" </TD></TR>"+
             "<TR><TD   bgcolor=\"#77dd77\">Nombre</TD>\n"+
             "<TD   bgcolor=\"#77dd77\">Valor</TD>\n"+
             "<TD   bgcolor=\"#77dd77\">Tipo</TD>\n"+
             "</TR>\n"
        esteEnv.forEach((value,key)=>{
           tabla += "<TR><TD bgcolor=\"#fdfd96\">"+value.id+"</TD>\n"+
            "<TD  bgcolor=\"#fdfd96\">"+value.value+"</TD>\n"+
            "<TD  bgcolor=\"#fdfd96\">"+this.tipoD(Number(value.type))+"</TD>\n"+
            "</TR>\n"         
            })
             
             
           tabla += "</TABLE>>];\n"
        
        s.addGts(tabla)
    }

    public ast(){
        const s = Singleton.getInstance()
        const nombre_nodo =`node_${this.line}_${this.colum}_`
        s.addAst(`
        ${nombre_nodo}[label="Graficar TS"];
        `)
        
    }

    public tipoD(tipo:number):string{
        let palabra:string = "";
        if(tipo == 0){
            palabra =  "int"
        }else if(tipo == 1){
            palabra = "string"
        }else if(tipo == 2){
            palabra = "double"
        }else if(tipo == 3){
            palabra = "char"
        }else if(tipo == 4){
            palabra = "boolean"
        }
     return palabra
        
    }
}