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
exports.MetodosP = void 0;
var instruccion_1 = require("../abstract/instruccion");
var MetodosP = /** @class */ (function (_super) {
    __extends(MetodosP, _super);
    function MetodosP(nombre, parametros, instrucciones, line, colum) {
        var _this = _super.call(this, line, colum) || this;
        _this.nombre = nombre;
        _this.parametros = parametros;
        _this.instrucciones = instrucciones;
        return _this;
    }
    MetodosP.prototype.ejecutar = function (env) {
        //console.log(this);
        if (this.parametros == null) {
            throw new Error("Error semantico: tiene que traer parametros");
        }
        if (env.guardar_funcion(this.nombre, this)) {
            console.log("se guardo");
        }
    };
    MetodosP.prototype.ast = function () {
    };
    return MetodosP;
}(instruccion_1.Instruccion));
exports.MetodosP = MetodosP;
