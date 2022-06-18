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
exports.If_Else_If = void 0;
var instruccion_1 = require("../abstract/instruccion");
var enviroment_1 = require("../Symbols/enviroment");
var If_Else_If = /** @class */ (function (_super) {
    __extends(If_Else_If, _super);
    function If_Else_If(variable, condicion, in_de, instrucciones, line, colum) {
        var _this = _super.call(this, line, colum) || this;
        _this.variable = variable;
        _this.condicion = condicion;
        _this.in_de = in_de;
        _this.instrucciones = instrucciones;
        return _this;
    }
    If_Else_If.prototype.ejecutar = function (env) {
        var env_for = new enviroment_1.Enviroment(env);
        this.variable.ejecutar(env_for);
        var cond = this.condicion.ejecutar(env_for);
        var incremento = this.in_de.ejecutar(env_for);
        console.log(cond);
        console.log(incremento);
    };
    return If_Else_If;
}(instruccion_1.Instruccion));
exports.If_Else_If = If_Else_If;
