"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asignar = void 0;
var instruccion_1 = require("../abstract/instruccion");
var Acceso_1 = require("../Expresiones/Acceso");
var Asignar = /** @class */ (function (_super) {
    __extends(Asignar, _super);
    function Asignar(nombre, expresion, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.nombre = nombre;
        _this.expresion = expresion;
        return _this;
    }
    Asignar.prototype.ejecutar = function (env) {
        var verificar = new Acceso_1.Acces(this.nombre, this.line, this.colum);
        var acces = verificar.ejecutar(env);
        var expresion = this.expresion.ejecutar(env);
        //console.log(expresion);
        /*if(env.buscar_variable(this.nombre)){
            console.log("si esta");
            
        }else{
            console.log("no esta");
            
        }*/
        var tmp = env.get_Enviroment(this.nombre);
        //console.log(tmp);
        //console.log("haciendo una asinacion: " + this.nombre)
        //console.log(expresion.value)
        //console.log(expresion.type)
        tmp === null || tmp === void 0 ? void 0 : tmp.actualizar_variable(this.nombre, expresion.value);
    };
    return Asignar;
}(instruccion_1.Instruccion));
exports.Asignar = Asignar;
