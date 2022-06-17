"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Singleton_1 = require("./Singleton/Singleton");
var enviroment_1 = require("./Symbols/enviroment");
var singleton = Singleton_1.Singleton.getInstance();
var parser = require('./gramatica/gramatica');
var fs = require("fs");
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var servidorProyecto = /** @class */ (function () {
    function servidorProyecto(app, port, corsOption, consol) {
        if (app === void 0) { app = (0, express_1.default)(); }
        if (port === void 0) { port = 3000; }
        if (corsOption === void 0) { corsOption = { origin: true, optionsSuccessStatus: 200 }; }
        if (consol === void 0) { consol = ""; }
        this.app = app;
        this.port = port;
        this.corsOption = corsOption;
        this.consol = consol;
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, cors_1.default)(corsOption));
        this.app.use((0, morgan_1.default)('dev'));
        this.listen();
        this.getDatos();
        this.postDatos();
    }
    servidorProyecto.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log("Server listening: => " + _this.port);
        });
    };
    servidorProyecto.prototype.getDatos = function () {
        this.app.get('/enviar', function (req, res) {
            res.json({ respuesta: "hola mundo" });
        });
    };
    servidorProyecto.prototype.postDatos = function () {
        this.app.post('/recibir', function (request, response) {
            try {
                console.log(request.body["editor"]);
                var entrada = request.body["editor"];
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
                var texto = " ";
                texto = singleton.getConsola();
                response.json({ respuest: texto });
            }
            catch (error) {
                console.log(error);
            }
        });
    };
    return servidorProyecto;
}());
new servidorProyecto();
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

    //console.log(env_padre);
    
    
    
    

    
} catch (error) {
    console.log(error)
}*/ 
