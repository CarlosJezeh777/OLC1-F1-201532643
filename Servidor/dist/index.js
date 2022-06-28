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
var app = (0, express_1.default)();
var port = 3000;
var corsOption = { origin: true, optionsSuccessStatus: 200 };
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
    var entrada = fs.readFileSync("src/entrada2.txt");
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
    //console.log(env_padre);
    var taba_sim = env_padre.getEnv();
    //console.log(taba_sim);
    var tabSym_1 = "[";
    taba_sim.forEach(function (value, key) {
        tabSym_1 += "{\n";
        tabSym_1 += "nombre:" + String(value.id) + ",\n";
        tabSym_1 += "valor:" + String(value.value) + ",\n";
        if (value.type == 0) {
            tabSym_1 += "tipo: Int ,\n";
        }
        else if (value.type == 1) {
            tabSym_1 += "tipo: String ,\n";
        }
        else if (value.type == 2) {
            tabSym_1 += "tipo: Double ,\n";
        }
        else if (value.type == 3) {
            tabSym_1 += "tipo: Char ,\n";
        }
        else if (value.type == 4) {
            tabSym_1 += "tipo: Boolean ,\n";
        }
        tabSym_1 += "editable:" + String(value.editable) + ",\n";
        tabSym_1 += "},\n";
    });
    tabSym_1 += "]\n";
    //console.log(tabSym);
    //console.log(env_padre);
    console.log("++++++++ Mostra lo del singleton +++++++++");
    console.log(singleton.getConsola());
    //console.log(env_padre);    
}
catch (error) {
    console.log(error);
}
