"use strict";
var parser = require('./gramatica/gramatica');
var fs = require("fs");
try {
    var entrada = fs.readFileSync("src/entrada.txt");
    var ast = parser.parse(entrada.toString());
    for (var _i = 0, ast_1 = ast; _i < ast_1.length; _i++) {
        var elemento = ast_1[_i];
        try {
            console.log(elemento);
            elemento.ejecutar();
        }
        catch (error) {
            console.log(error);
        }
    }
}
catch (error) {
    console.log(error);
}
