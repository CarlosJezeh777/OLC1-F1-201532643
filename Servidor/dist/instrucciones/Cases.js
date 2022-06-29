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
exports.Casos = void 0;
var instruccion_1 = require("../abstract/instruccion");
var Singleton_1 = require("../Singleton/Singleton");
var UtilesArrays_1 = require("../Singleton/UtilesArrays");
var Casos = /** @class */ (function (_super) {
    __extends(Casos, _super);
    function Casos(valor, instrucccion, line, colum) {
        var _this = _super.call(this, line, colum) || this;
        _this.valor = valor;
        _this.instrucccion = instrucccion;
        return _this;
    }
    Casos.prototype.ejecutar = function (env) {
        var utiles = UtilesArrays_1.utilesArrays.getInstance();
        utiles.addCasos(this);
    };
    Casos.prototype.ast = function () {
        var s = Singleton_1.Singleton.getInstance();
        var nombre_nodo = "node_".concat(this.line, "_").concat(this.colum, "_");
        s.addAst("\n        ".concat(nombre_nodo, "[label=\"Cases\"];\n        "));
    };
    return Casos;
}(instruccion_1.Instruccion));
exports.Casos = Casos;
