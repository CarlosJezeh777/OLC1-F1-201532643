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
exports.LlamadaF = void 0;
var expression_1 = require("../abstract/expression");
var enviroment_1 = require("../Symbols/enviroment");
var type_1 = require("../Symbols/type");
var LlamadaF = /** @class */ (function (_super) {
    __extends(LlamadaF, _super);
    function LlamadaF(id, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.id = id;
        return _this;
    }
    LlamadaF.prototype.ejecutar = function (env) {
        var resultado = {
            value: null,
            type: type_1.Type.error
        };
        //console.log(this);
        var funcion = env.get_Funcion(this.id);
        //console.log(metodo);
        var env_instrucciones = new enviroment_1.Enviroment(env);
        if (funcion == null) {
            throw "Error semantico, no ecnontre esta funcion";
        }
        for (var _i = 0, _a = funcion === null || funcion === void 0 ? void 0 : funcion.instrucciones; _i < _a.length; _i++) {
            var elemento = _a[_i];
            try {
                elemento.ejecutar(env_instrucciones);
            }
            catch (error) {
                console.log(error);
            }
        }
        return resultado;
    };
    LlamadaF.prototype.ast = function () {
        return "ast";
    };
    return LlamadaF;
}(expression_1.Expression));
exports.LlamadaF = LlamadaF;
