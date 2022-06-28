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
exports.Push = void 0;
var instruccion_1 = require("../abstract/instruccion");
var Push = /** @class */ (function (_super) {
    __extends(Push, _super);
    function Push(nombre, valor, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.nombre = nombre;
        _this.valor = valor;
        return _this;
    }
    Push.prototype.ejecutar = function (env) {
        var arreglo = env.get_vector(this.nombre);
        //console.log(arreglo);
        if (arreglo == null) {
            throw new Error("Error semantico");
        }
        var valor = this.valor.ejecutar(env);
        if (valor.type != arreglo.type) {
            throw new Error("error semantico");
        }
        arreglo.value.push(valor.value);
        arreglo.index = arreglo.index + 1;
        //console.log(arreglo);
        env.actualizar_vector(this.nombre, arreglo);
        //console.log(expresion);
    };
    return Push;
}(instruccion_1.Instruccion));
exports.Push = Push;
