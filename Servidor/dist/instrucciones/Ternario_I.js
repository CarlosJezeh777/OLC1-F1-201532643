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
exports.TernarioI = void 0;
var instruccion_1 = require("../abstract/instruccion");
var enviroment_1 = require("../Symbols/enviroment");
var type_1 = require("../Symbols/type");
var TernarioI = /** @class */ (function (_super) {
    __extends(TernarioI, _super);
    function TernarioI(expresion, instruccionTrue, instruccionFalse, line, colum) {
        var _this = _super.call(this, line, colum) || this;
        _this.expresion = expresion;
        _this.instruccionTrue = instruccionTrue;
        _this.instruccionFalse = instruccionFalse;
        return _this;
    }
    TernarioI.prototype.ejecutar = function (env) {
        var new_env = new enviroment_1.Enviroment(env);
        var expresion = this.expresion.ejecutar(env);
        if (expresion.type != type_1.Type.BOOLEAN) {
            throw new Error("error");
        }
        //console.log(expresion);
        if (expresion.value == true) {
            for (var _i = 0, _a = this.instruccionTrue; _i < _a.length; _i++) {
                var elemeto = _a[_i];
                try {
                    elemeto.ejecutar(new_env);
                }
                catch (error) {
                    console.log(error);
                }
            }
            //console.log("aqui van las instrucicones");
        }
        else if (expresion.value == false) {
            for (var _b = 0, _c = this.instruccionFalse; _b < _c.length; _b++) {
                var elemeto = _c[_b];
                try {
                    elemeto.ejecutar(new_env);
                }
                catch (error) {
                    console.log(error);
                }
            }
        }
        //console.log(expresion);
    };
    return TernarioI;
}(instruccion_1.Instruccion));
exports.TernarioI = TernarioI;
