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
exports.InDe = void 0;
var expression_1 = require("../abstract/expression");
var type_1 = require("../Symbols/type");
var IncrementosOpc_1 = require("./IncrementosOpc");
var InDe = /** @class */ (function (_super) {
    __extends(InDe, _super);
    function InDe(lado, expresion, tipo, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.lado = lado;
        _this.expresion = expresion;
        _this.tipo = tipo;
        return _this;
    }
    InDe.prototype.ejecutar = function (env) {
        var resultado = {
            value: null,
            type: type_1.Type.error
        };
        console.log(this.expresion);
        var expr = this.expresion.ejecutar(env);
        if (this.lado == 0 && this.tipo == IncrementosOpc_1.OpcionesInDe.MAMA) {
            resultado = {
                value: ++(expr.value),
                type: type_1.Type.INT
            };
        }
        else if (this.lado == 1 && this.tipo == IncrementosOpc_1.OpcionesInDe.MAMA) {
            resultado = {
                value: (expr.value)++,
                type: type_1.Type.INT
            };
        }
        else if (this.lado == 0 && this.tipo == IncrementosOpc_1.OpcionesInDe.MEME) {
            resultado = {
                value: --(expr.value),
                type: type_1.Type.INT
            };
        }
        else if (this.lado == 1 && this.tipo == IncrementosOpc_1.OpcionesInDe.MEME) {
            resultado = {
                value: (expr.value)--,
                type: type_1.Type.INT
            };
        }
        return resultado;
    };
    return InDe;
}(expression_1.Expression));
exports.InDe = InDe;
