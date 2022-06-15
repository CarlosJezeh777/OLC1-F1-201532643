"use strict";
/*import { Singleton } from "./Singleton/Singleton";
import { Enviroment } from "./Symbols/enviroment";

const singleton = Singleton.getInstance()

const parser = require('./gramatica/gramatica');
const fs = require("fs");
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var servidorProyecto = /** @class */ (function () {
    function servidorProyecto(app, port) {
        if (app === void 0) { app = express_1.default(); }
        if (port === void 0) { port = 3000; }
        this.app = app;
        this.port = port;
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(cors_1.default());
        this.app.use(morgan_1.default('dev'));
        this.listen();
    }
    servidorProyecto.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log("Server listening: => " + _this.port);
        });
    };
    return servidorProyecto;
}());
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
