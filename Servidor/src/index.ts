/*import { Singleton } from "./Singleton/Singleton";
import { Enviroment } from "./Symbols/enviroment";

const singleton = Singleton.getInstance()

const parser = require('./gramatica/gramatica');
const fs = require("fs");
*/

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

class servidorProyecto{
    constructor(
        public app: express.Application = express(),
        private port: number = 3000,
        private corsOption: cors.CorsOptions = {origin: true, optionsSuccessStatus: 200}
    ){
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:true}));
        this.app.use(cors(corsOption));
        this.app.use(morgan('dev'));
        this.listen();
    }
    public listen(){
        this.app.listen(this.port, ()=>{
            console.log("Server listening: => "+ this.port );
            
        });
    }

}

new servidorProyecto();

/*const app :express.Application = express();
const port: number = 8000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));
app.use(cors());

app.listen(port, function(){
    console.log("server listening => " + port);
    
});*/

/*try { 
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
    
    

    
} catch (error) {
    console.log(error)   
}*/