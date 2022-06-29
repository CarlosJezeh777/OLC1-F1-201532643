"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Singleton_1 = require("./Singleton/Singleton");
var enviroment_1 = require("./Symbols/enviroment");
var child_process_1 = require("child_process");
var singleton = Singleton_1.Singleton.getInstance();
var parser = require('./gramatica/gramatica');
var fs = require("fs");
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
var port = 3000;
var corsOption = { origin: true, optionsSuccessStatus: 200 };
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)(corsOption));
app.use((0, morgan_1.default)('dev'));
app.listen(port, function () {
    console.log("Server listening: => " + port);
});
var env_padre = new enviroment_1.Enviroment(null);
singleton.addAst("nodeOriginal[label=\"Instrucciones\"];");
app.post('/recibir', function (request, response) {
    try {
        //console.log(request.body["edit"]);
        var entrada = request.body["edit"];
        var ast = parser.parse(entrada.toString());
        for (var _i = 0, ast_1 = ast; _i < ast_1.length; _i++) {
            var elemento = ast_1[_i];
            try {
                //console.log(elemento);
                elemento.ast();
                console.log(elemento);
                var linea = elemento.line;
                var columna = elemento.colum;
                singleton.addAst("nodeOriginal->node_".concat(elemento.line, "_").concat(elemento.colum, "_;"));
            }
            catch (error) {
                singleton.addErrores(error);
            }
        }
        for (var _a = 0, ast_2 = ast; _a < ast_2.length; _a++) {
            var elemento = ast_2[_a];
            try {
                //console.log(elemento);
                elemento.ejecutar(env_padre);
            }
            catch (error) {
                singleton.addErrores(error);
            }
        }
        var texto = singleton.getConsola();
        response.json({ respuest: texto });
    }
    catch (error) {
        console.log(error);
    }
});
app.get('/enviarTS', function (req, res) {
    var taba_sim = env_padre.getEnv();
    var TS = [];
    taba_sim.forEach(function (value, key) {
        TS.push(value);
    });
    //console.log(TS);    
    res.json({ respuesta: TS });
});
app.get('/enviarConsola', function (req, res) {
    var texto = singleton.getConsola();
    res.json({ respuesta: texto });
});
app.get('/enviarAst', function (req, res) {
    var arbol = singleton.getAst();
    console.log(arbol);
    crearArchivo();
    res.json({ respuesta: "ok" });
});
function crearArchivo() {
    (0, child_process_1.exec)('mkdir out/');
    createFile("out/ast.dot", "digraph G {\nnode[shape=box];" + singleton.getAst() + "\n}");
    (0, child_process_1.exec)('dot -Tpng out/ast.dot -o out/ast.png ');
}
function createFile(nameFile, data) {
    fs.writeFile(nameFile, data, function () {
        console.log('>> The file ' + nameFile + ' has been saved!');
    });
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
