"use strict";
var parser = require('./gramatica/gramatica');
var fs = require("fs");
try {
    var entrada = fs.readFileSync("src/entrada.txt");
    var ast = parser.parse(entrada.toString());
    console.log(ast);
    /*for (const elemento of ast) {
        try {
            console.log("no")
            elemento.ejecutar();
        } catch (error) {
            console.log(error)
        }
    }*/
}
catch (error) {
    console.log(error);
}
