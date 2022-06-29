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
exports.TernarioE = void 0;
var expression_1 = require("../abstract/expression");
var enviroment_1 = require("../Symbols/enviroment");
var type_1 = require("../Symbols/type");
var TernarioE = /** @class */ (function (_super) {
    __extends(TernarioE, _super);
    function TernarioE(expresion, expresionTrue, expresionFalse, line, colum) {
        var _this = _super.call(this, line, colum) || this;
        _this.expresion = expresion;
        _this.expresionTrue = expresionTrue;
        _this.expresionFalse = expresionFalse;
        return _this;
    }
    TernarioE.prototype.ejecutar = function (env) {
        var resultado = {
            value: null,
            type: type_1.Type.error
        };
        var new_env = new enviroment_1.Enviroment(env);
        var expresion = this.expresion.ejecutar(env);
        //console.log(expresion);
        if (expresion.value == true) {
            //console.log("aqui van las instrucicones");
            var expresionT = this.expresionTrue.ejecutar(new_env);
            resultado = {
                value: expresionT.value,
                type: expresionT.type
            };
        }
        else if (expresion.value == false) {
            var expresionF = this.expresionFalse.ejecutar(new_env);
            resultado = {
                value: expresionF.value,
                type: expresionF.type
            };
        }
        //console.log(expresion);
        return resultado;
    };
    TernarioE.prototype.ast = function () {
        return "ast";
    };
    return TernarioE;
}(expression_1.Expression));
exports.TernarioE = TernarioE;
