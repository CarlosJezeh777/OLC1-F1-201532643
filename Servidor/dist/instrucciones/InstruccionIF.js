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
exports.Iif = void 0;
var instruccion_1 = require("../abstract/instruccion");
var enviroment_1 = require("../Symbols/enviroment");
var Iif = /** @class */ (function (_super) {
    __extends(Iif, _super);
    function Iif(expresion, instruc, line, colum) {
        var _this = _super.call(this, line, colum) || this;
        _this.expresion = expresion;
        _this.instruc = instruc;
        return _this;
    }
    Iif.prototype.ejecutar = function (env) {
        var new_env = new enviroment_1.Enviroment(env);
        var expresion = this.expresion.ejecutar(env);
        //console.log(expresion);
        if (expresion.value == true) {
            //console.log("aqui van las instrucicones");
            this.instruc.ejecutar(new_env);
        }
        //console.log(expresion);
    };
    Iif.prototype.ast = function () {
    };
    return Iif;
}(instruccion_1.Instruccion));
exports.Iif = Iif;
