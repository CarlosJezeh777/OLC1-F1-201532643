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
exports.Declaracion = void 0;
var instruccion_1 = require("../abstract/instruccion");
var Declaracion = /** @class */ (function (_super) {
    __extends(Declaracion, _super);
    function Declaracion(tipo, nombre, expresion, line, colum) {
        var _this = _super.call(this, line, colum) || this;
        _this.tipo = tipo;
        _this.nombre = nombre;
        _this.expresion = expresion;
        return _this;
    }
    Declaracion.prototype.ejecutar = function (env) {
        //console.log("Declarando variable: " + this.nombre );
        var expresion = this.expresion.ejecutar(env);
        //console.log(expresion.value);
        //console.log(expresion.type);
        if (env.buscar_variable(this.nombre)) {
            throw "Error semantico, la variable ya exite, y no se puede repetir";
        }
        env.guardar_varible(this.nombre, expresion.value, expresion.type);
    };
    return Declaracion;
}(instruccion_1.Instruccion));
exports.Declaracion = Declaracion;
