import e from "cors";
import { Singleton } from "./Singleton/Singleton";
import { Enviroment } from "./Symbols/enviroment";

const singleton = Singleton.getInstance()

const parser = require('./gramatica/gramatica');
const fs = require("fs");
/*
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

class servidorProyecto{
    
    constructor(
        public app: express.Application = express(),
        private port: number = 3000,
        private corsOption: cors.CorsOptions = {origin: true, optionsSuccessStatus: 200},
        private consol:string = ""
    ){
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:true}));
        this.app.use(cors(corsOption));
        this.app.use(morgan('dev'));
        this.listen();
        this.getDatos();
        this.postDatos();
    }
    public listen(){
        this.app.listen(this.port, ()=>{
            console.log("Server listening: => "+ this.port );
            
        });
    }
    public getDatos(){
        this.app.get('/enviar',function(req, res){
            res.json({respuesta: "hola mundo"});
        });
    }

    
    public postDatos(){
        this.app.post('/recibir',function(request, response){
            try { 
                console.log(request.body["editor"]);
                const entrada = request.body["editor"];
                const ast = parser.parse(entrada.toString());
                const env_padre =  new Enviroment(null);
                
                for (const elemento of ast) {
                    try {
                        //console.log(elemento);
                        elemento.ejecutar(env_padre);
                    } catch (error) {
                        singleton.addErrores(error)
                    }
                }
                let texto : string = " ";
                texto = singleton.getConsola();
                
                response.json({respuest: texto});
    
            } catch (error) {
                console.log(error)   
            }
            
        });
    }

}

new servidorProyecto();*/

try { 
    const entrada =  fs.readFileSync("src/entrada.txt");
    const ast = parser.parse(entrada.toString());
    const env_padre =  new Enviroment(null);
    
    for (const elemento of ast) {
        try {
            //console.log(elemento);
            elemento.ejecutar(env_padre);
        } catch (error) {
            singleton.addErrores(error)
        }
    }



    console.log("++++++++ Mostra lo del singleton +++++++++");
    console.log(singleton.getConsola());

    //console.log(env_padre);    
    
    
    
    

    
} catch (error) {
    console.log(error)   
}