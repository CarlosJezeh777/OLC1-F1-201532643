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
exports.If_Else = void 0;
var instruccion_1 = require("../abstract/instruccion");
var enviroment_1 = require("../Symbols/enviroment");
var If_Else = /** @class */ (function (_super) {
    __extends(If_Else, _super);
    function If_Else(expresion, instrucTrue, instrucFalse, line, colum) {
        var _this = _super.call(this, line, colum) || this;
        _this.expresion = expresion;
        _this.instrucTrue = instrucTrue;
        _this.instrucFalse = instrucFalse;
        return _this;
    }
    If_Else.prototype.ejecutar = function (env) {
        console.log("Estoy en el for");
        var new_env = new enviroment_1.Enviroment(env);
        var expresion = this.expresion.ejecutar(env);
        //console.log(expresion);
        if (expresion.value == true) {
            //console.log("aqui van las instrucicones");
            this.instrucTrue.ejecutar(new_env);
        }
        else if (expresion.value == false) {
            this.instrucFalse.ejecutar(new_env);
        }
        //console.log(expresion);
    };
    return If_Else;
}(instruccion_1.Instruccion));
exports.If_Else = If_Else;
