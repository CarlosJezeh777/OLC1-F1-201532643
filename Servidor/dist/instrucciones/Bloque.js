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
exports.Bloque = void 0;
var instruccion_1 = require("../abstract/instruccion");
var Errores_1 = require("../Singleton/Errores");
var Singleton_1 = require("../Singleton/Singleton");
var enviroment_1 = require("../Symbols/enviroment");
var singleton = Singleton_1.Singleton.getInstance();
var Bloque = /** @class */ (function (_super) {
    __extends(Bloque, _super);
    function Bloque(instruccion, line, colum) {
        var _this = _super.call(this, line, colum) || this;
        _this.instruccion = instruccion;
        return _this;
    }
    Bloque.prototype.ejecutar = function (env) {
        var new_env = new enviroment_1.Enviroment(env);
        for (var _i = 0, _a = this.instruccion; _i < _a.length; _i++) {
            var elemento = _a[_i];
            try {
                elemento.ejecutar(new_env);
            }
            catch (error) {
                singleton.addErrores(new Errores_1.Errores("Bloque: Error en el bloque", "Semantico", elemento.line, elemento.colum));
            }
        }
        //console.log(env);
    };
    Bloque.prototype.ast = function () {
        var s = Singleton_1.Singleton.getInstance();
        var nombre_nodo = "node_".concat(this.line, "_").concat(this.colum, "_");
        s.addAst("".concat(nombre_nodo, "[label=\"Bloque\"];"));
        for (var _i = 0, _a = this.instruccion; _i < _a.length; _i++) {
            var elemento = _a[_i];
            try {
                elemento.ast();
                s.addAst("".concat(nombre_nodo, "->node_").concat(elemento.line, "_").concat(elemento.colum, "_;"));
            }
            catch (error) {
                console.log(error);
            }
        }
    };
    return Bloque;
}(instruccion_1.Instruccion));
exports.Bloque = Bloque;
