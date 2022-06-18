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
exports.DoWhile = void 0;
var instruccion_1 = require("../abstract/instruccion");
var enviroment_1 = require("../Symbols/enviroment");
var type_1 = require("../Symbols/type");
var DoWhile = /** @class */ (function (_super) {
    __extends(DoWhile, _super);
    function DoWhile(condicion, instrucciones, line, colum) {
        var _this = _super.call(this, line, colum) || this;
        _this.condicion = condicion;
        _this.instrucciones = instrucciones;
        return _this;
    }
    DoWhile.prototype.ejecutar = function (env) {
        var band = true;
        var new_env = new enviroment_1.Enviroment(env);
        this.instrucciones.ejecutar(new_env);
        while (band == true) {
            console.log("no entra aqui dowhile");
            var cond = this.condicion.ejecutar(env);
            console.log(cond);
            if (cond.value == false) {
                break;
            }
            if (cond.type != type_1.Type.BOOLEAN) {
                throw new Error("la condicion tiene que ser un boolean");
            }
            this.instrucciones.ejecutar(new_env);
        }
    };
    return DoWhile;
}(instruccion_1.Instruccion));
exports.DoWhile = DoWhile;
