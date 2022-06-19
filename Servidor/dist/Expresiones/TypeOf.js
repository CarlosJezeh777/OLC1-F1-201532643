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
exports.Type_Of = void 0;
var expression_1 = require("../abstract/expression");
var Singleton_1 = require("../Singleton/Singleton");
var type_1 = require("../Symbols/type");
var Type_Of = /** @class */ (function (_super) {
    __extends(Type_Of, _super);
    function Type_Of(expresion, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.expresion = expresion;
        return _this;
    }
    Type_Of.prototype.ejecutar = function (env) {
        var resultado = {
            value: null,
            type: type_1.Type.error
        };
        var tmp = this.expresion.ejecutar(env);
        var s = Singleton_1.Singleton.getInstance();
        if (tmp.type == type_1.Type.INT) {
            resultado = {
                value: "Integer",
                type: type_1.Type.STRING
            };
        }
        else if (tmp.type == type_1.Type.BOOLEAN) {
            resultado = {
                value: "Boolean",
                type: type_1.Type.STRING
            };
        }
        else if (tmp.type == type_1.Type.CHAR) {
            resultado = {
                value: "Caracter",
                type: type_1.Type.STRING
            };
        }
        else if (tmp.type == type_1.Type.STRING) {
            resultado = {
                value: "Cadena",
                type: type_1.Type.STRING
            };
        }
        else if (tmp.type == type_1.Type.DOUBLE) {
            resultado = {
                value: "Double",
                type: type_1.Type.STRING
            };
        }
        return resultado;
    };
    return Type_Of;
}(expression_1.Expression));
exports.Type_Of = Type_Of;
