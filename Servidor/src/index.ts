import e from "cors";
import { Singleton } from "./Singleton/Singleton";
import { Enviroment } from "./Symbols/enviroment";
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
singleton.addAst(`nodeOriginal[label="Instrucciones"];`)

app.post('/recibir',function(request, response){
    try { 
        //console.log(request.body["edit"]);
        const entrada = request.body["edit"];
        const ast = parser.parse(entrada.toString());
        

        for (const elemento of ast) {
            try {
                //console.log(elemento);
                elemento.ast();
                console.log(elemento);
                const linea = elemento.line
                const columna = elemento.colum
                singleton.addAst(`nodeOriginal->node_${elemento.line}_${elemento.colum}_;`)
            } catch (error) {
                singleton.addErrores(error)
            }
        }
        
        for (const elemento of ast) {
            try {
                //console.log(elemento);
                elemento.ejecutar(env_padre);

            } catch (error) {
                singleton.addErrores(error)
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
    

app.get('/enviarConsola',function(req, res){
    let texto = singleton.getConsola()
    res.json({respuesta: texto});
});

app.get('/enviarAst',function(req, res){
    const arbol = singleton.getAst()
    console.log(arbol);
    crearArchivo()
    
    res.json({respuesta: "ok"});
});

function crearArchivo(){
    exec('mkdir out/')
    createFile("out/ast.dot", "digraph G {\nnode[shape=box];" + singleton.getAst() + "\n}")
    exec('dot -Tpng out/ast.dot -o out/ast.png ')

}


function createFile(nameFile: string, data: string) {
    fs.writeFile(nameFile, data, () => {
        console.log('>> The file ' + nameFile + ' has been saved!');
    })
}





/*try { 
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
    //console.log(env_padre);
    
    
    


    console.log("++++++++ Mostra lo del singleton +++++++++");
    console.log(singleton.getConsola());

    //console.log(env_padre);    
    
    
    
    

    
} catch (error) {
    console.log(error)   
}*/