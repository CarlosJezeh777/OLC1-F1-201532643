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
exports.MetodosI = void 0;
var instruccion_1 = require("../abstract/instruccion");
var MetodosI = /** @class */ (function (_super) {
    __extends(MetodosI, _super);
    function MetodosI(nombre, pametros, Bloque, line, colum) {
        var _this = _super.call(this, line, colum) || this;
        _this.nombre = nombre;
        _this.pametros = pametros;
        _this.Bloque = Bloque;
        return _this;
    }
    MetodosI.prototype.ejecutar = function (env) {
        env.guardar_funcion(this.nombre, this);
    };
    return MetodosI;
}(instruccion_1.Instruccion));
exports.MetodosI = MetodosI;
