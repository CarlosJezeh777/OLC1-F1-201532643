import e from "cors";
import { Singleton } from "./Singleton/Singleton";
import { Enviroment } from "./Symbols/enviroment";

const singleton = Singleton.getInstance()

const parser = require('./gramatica/gramatica');
const fs = require("fs");

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
const app: express.Application = express()
const port: number = 3000
const corsOption: cors.CorsOptions = {origin: true, optionsSuccessStatus: 200}
/*app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors(corsOption));
app.use(morgan('dev'));

app.listen(port, ()=>{
    console.log("Server listening: => "+ port );
    
})
    
    
app.get('/enviar',function(req, res){
    res.json({respuesta: "hola mundo"});
});
    

app.post('/recibir',function(request, response){
    try { 
        console.log(request.body["edit"]);
        const entrada = request.body["edit"];
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
        
        
        
        let texto = singleton.getConsola();
        
        response.json({respuest: texto});

    } catch (error) {
        console.log(error)   
    }
            
});
*/



try { 
    const entrada =  fs.readFileSync("src/entrada2.txt");
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
    //console.log(env_padre);
    const taba_sim = env_padre.getEnv()
    //console.log(taba_sim);
    let tabSym:string = "[";
    taba_sim.forEach((value,key)=>{
        tabSym += "{\n"
        tabSym += "nombre:"+ String(value.id)+",\n"
        tabSym += "valor:"+ String(value.value)+",\n"
        if(value.type == 0) {tabSym += "tipo: Int ,\n"}
        else if(value.type == 1){tabSym += "tipo: String ,\n"}
        else if(value.type == 2){tabSym += "tipo: Double ,\n"}
        else if(value.type == 3){tabSym += "tipo: Char ,\n"}
        else if(value.type == 4){tabSym += "tipo: Boolean ,\n"}
        
        tabSym += "editable:"+ String(value.editable)+",\n"
        tabSym += "},\n"
    })
    tabSym += "]\n"

    //console.log(tabSym);
    //console.log(env_padre);
    
    
    


    console.log("++++++++ Mostra lo del singleton +++++++++");
    console.log(singleton.getConsola());

    //console.log(env_padre);    
    
    
    
    

    
} catch (error) {
    console.log(error)   
}