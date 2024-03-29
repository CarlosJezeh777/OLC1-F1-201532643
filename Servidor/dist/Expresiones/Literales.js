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
exports.Literal = void 0;
var expression_1 = require("../abstract/expression");
var type_1 = require("../Symbols/type");
var Literal = /** @class */ (function (_super) {
    __extends(Literal, _super);
    function Literal(valor, tipo, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.valor = valor;
        _this.tipo = tipo;
        return _this;
    }
    Literal.prototype.ejecutar = function (env) {
        //console.log(this);
        var resultado = {
            value: this.valor,
            type: type_1.Type.error
        };
        //console.log("tipo dato: "+ this.tipo);
        if (this.tipo == type_1.Type.INT) {
            resultado = {
                value: Number(this.valor),
                type: type_1.Type.INT
            };
        }
        else if (this.tipo == type_1.Type.STRING) {
            var valor_1 = String(this.valor);
            valor_1 = valor_1.substring(1, valor_1.length - 1);
            //this.valor = (this.valor).replaceAll("\"","")
            resultado = {
                value: valor_1,
                type: type_1.Type.STRING
            };
        }
        else if (this.tipo == type_1.Type.CHAR) {
            var valor1 = this.valor[1];
            resultado = {
                value: valor1,
                type: type_1.Type.CHAR
            };
        }
        else if (this.tipo == type_1.Type.DOUBLE) {
            resultado = {
                value: Number(this.valor),
                type: type_1.Type.DOUBLE
            };
        }
        else if (this.tipo == type_1.Type.BOOLEAN) {
            if (this.valor == "true")
                resultado = {
                    value: Boolean(true),
                    type: type_1.Type.BOOLEAN
                };
            else
                resultado = {
                    value: Boolean(false),
                    type: type_1.Type.BOOLEAN
                };
        }
        return resultado;
    };
    Literal.prototype.ast = function () {
        var nombre = "node_".concat(this.line, "_").concat(this.column, "_");
        if (this.tipo == type_1.Type.STRING)
            return "\n        ".concat(nombre, ";\n        ").concat(nombre, "[label=").concat(this.valor.toString(), "];");
        else
            return "\n        ".concat(nombre, ";\n        ").concat(nombre, "[label=\"").concat(this.valor.toString(), "\"];");
    };
    return Literal;
}(expression_1.Expression));
exports.Literal = Literal;
