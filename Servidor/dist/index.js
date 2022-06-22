"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Singleton_1 = require("./Singleton/Singleton");
var enviroment_1 = require("./Symbols/enviroment");
var singleton = Singleton_1.Singleton.getInstance();
var parser = require('./gramatica/gramatica');
var fs = require("fs");
/*import express from 'express'
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
        let texto : string = " ";
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
                
                texto = singleton.getConsola();
                
                response.json({respuest: texto});
    
            } catch (error) {
                console.log(error)
            }
            
        });
    }

}

new servidorProyecto();
*/
try {
    var entrada = fs.readFileSync("src/entrada2.txt");
    var ast = parser.parse(entrada.toString());
    var env_padre = new enviroment_1.Enviroment(null);
    for (var _i = 0, ast_1 = ast; _i < ast_1.length; _i++) {
        var elemento = ast_1[_i];
        try {
            //console.log(elemento);
            elemento.ejecutar(env_padre);
        }
        catch (error) {
            singleton.addErrores(error);
        }
    }
    console.log("++++++++ Mostra lo del singleton +++++++++");
    console.log(singleton.getConsola());
    //console.log(env_padre);    
}
catch (error) {
    console.log(error);
}
