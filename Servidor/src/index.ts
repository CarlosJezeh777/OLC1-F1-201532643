import e from "cors";
import { Singleton } from "./Singleton/Singleton";
import { Enviroment } from "./Symbols/enviroment";
import { Errores } from "./Singleton/Errores";
import { exec } from "child_process";

const singleton = Singleton.getInstance()

const parser = require('./gramatica/gramatica');
const fs = require("fs");


import express from 'express'
import morgan from 'morgan'
import cors from 'cors'


const app: express.Application = express()
const port: number = 3000
const corsOption: cors.CorsOptions = {origin: true, optionsSuccessStatus: 200}

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors(corsOption));
app.use(morgan('dev'));

app.listen(port, ()=>{
    console.log("Server listening: => "+ port );
    
})
        
const env_padre =  new Enviroment(null);
singleton.addAst("digraph G {\nnode[shape=box];") ;
singleton.addAst(`nodeOriginal[label="Instrucciones"];`)

singleton.addGts("digraph G { bgcolor=\"black\"\n") ;
singleton.addGts("node [shape=shape fillcolor=\"black\" style=\"radial\" gradientangle=180];\n")
app.post('/recibir',function(request, response){
    try { 
        //console.log(request.body["edit"]);
        const entrada = request.body["edit"];
        const ast = parser.parse(entrada.toString());
        
        
        for (const elemento of ast) {
            try {
                //console.log(elemento);
                elemento.ast();
                //console.log(elemento);
                singleton.addAst(`nodeOriginal->node_${elemento.line}_${elemento.colum}_;`)
            } catch (error) {
                singleton.addErrores(new Errores("Error semantico","Semantico",elemento.line,elemento.colum))
            }
        }
        
        for (const elemento of ast) {
            try {
                //console.log(elemento);
                elemento.ejecutar(env_padre);

            } catch (error) {
                singleton.addErrores(new Errores("Error semantico","Semantico",elemento.line,elemento.colum))
            }
        }

        let texto = singleton.getConsola()
        response.json({respuest: texto});

    } catch (error) {
        console.log(error)   
    }
            
});

app.get('/enviarTS',function(req, res){
    const taba_sim = env_padre.getEnv()
    const TS: any[] = []
    taba_sim.forEach((value,key)=>{
        TS.push(value)    
    })
    
    //console.log(TS);    
    res.json({respuesta: TS});
});
    

app.get('/enviarErrores',function(req, res){
    let Errores = singleton.getErrores()

    res.json({respuesta: Errores});
});

app.get('/enviarAst',function(req, res){
    singleton.addAst("\n}")
    const arbol = singleton.getAst()
    //console.log(arbol);
    res.json({respuesta: arbol});
});

app.get('/enviarGts',function(req, res){
    singleton.addGts("\n}")
    const graficos = singleton.getGts()
    //console.log(arbol);
    res.json({respuesta: graficos});
});


/*
try { 
    const entrada =  fs.readFileSync("src/entrada4.txt");
    const ast = parser.parse(entrada.toString());
    const env_padre =  new Enviroment(null);
    
    for (const elemento of ast) {
        try {
            //console.log(elemento);
            elemento.ejecutar(env_padre);
        } catch (error) {
            singleton.addErrores(new Errores("Error semantico","Semantico",elemento.line,elemento.colum))
        }
    }
    //console.log(env_padre);
    const taba_sim = env_padre.getEnv()
    //console.log(taba_sim);
    //console.log(env_padre);
    
    
    


    console.log("++++++++ Mostra lo del singleton +++++++++");
    console.log(singleton.getConsola());

    //console.log(env_padre);    
    
    
    
    

    
} catch (error) {
    console.log(error)   
}*/