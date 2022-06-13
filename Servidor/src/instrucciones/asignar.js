"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var instruccion_1 = require("../abstract/instruccion");
var Asignar = /** @class */ (function (_super) {
    __extends(Asignar, _super);
    function Asignar(nombre, expresion, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.nombre = nombre;
        _this.expresion = expresion;
        return _this;
    }
    Asignar.prototype.ejecutar = function (env) {
        var expresion = this.expresion.ejecutar(env);
        console.log("haciendo una asinacion: " + this.nombre);
        console.log(expresion.value);
        env.actualizar_variable(this.nombre, expresion.value);
    };
    return Asignar;
}(instruccion_1.Instruccion));
exports.Asignar = Asignar;
