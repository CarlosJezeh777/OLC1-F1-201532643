const parser = require('./gramatica/gramatica');
const fs = require("fs");

try {
    const entrada =  fs.readFileSync("src/entrada.txt");
    const ast = parser.parse(entrada.toString());
    for (const elemento of ast) {
        try {
            console.log("no")
            elemento.ejecutar();
        } catch (error) {
            console.log(error)
        }
    }
    
} catch (error) {
    console.log(error)   
}