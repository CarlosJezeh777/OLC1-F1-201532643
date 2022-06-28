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
exports.Vector = void 0;
var instruccion_1 = require("../abstract/instruccion");
var Vector = /** @class */ (function (_super) {
    __extends(Vector, _super);
    function Vector(tipo, id, tipo2, valor, valor2, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.tipo = tipo;
        _this.id = id;
        _this.tipo2 = tipo2;
        _this.valor = valor;
        _this.valor2 = valor2;
        return _this;
    }
    Vector.prototype.ejecutar = function (env) {
    };
    return Vector;
}(instruccion_1.Instruccion));
exports.Vector = Vector;
