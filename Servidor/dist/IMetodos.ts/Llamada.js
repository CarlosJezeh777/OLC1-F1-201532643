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
exports.Llamada = void 0;
var instruccion_1 = require("../abstract/instruccion");
var enviroment_1 = require("../Symbols/enviroment");
var Llamada = /** @class */ (function (_super) {
    __extends(Llamada, _super);
    function Llamada(id, parametros, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.id = id;
        _this.parametros = parametros;
        return _this;
    }
    Llamada.prototype.ejecutar = function (env) {
        console.log(this);
        var metodo = env.get_metodo(this.id);
        console.log(metodo);
        //si lo encontro
        //new env para declarar los parametros
        var env_para_parametros = new enviroment_1.Enviroment(env);
        if (metodo == null) {
            throw "Error semantico, no ecnontre esta funcion";
        }
        metodo === null || metodo === void 0 ? void 0 : metodo.Bloque.ejecutar(env_para_parametros);
        return "este dato nunca lo he usado";
    };
    return Llamada;
}(instruccion_1.Instruccion));
exports.Llamada = Llamada;
