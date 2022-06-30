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
exports.EMatriz = void 0;
var expression_1 = require("../abstract/expression");
var type_1 = require("../Symbols/type");
var EMatriz = /** @class */ (function (_super) {
    __extends(EMatriz, _super);
    function EMatriz(nombre, i1, i2, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.nombre = nombre;
        _this.i1 = i1;
        _this.i2 = i2;
        return _this;
    }
    EMatriz.prototype.ejecutar = function (env) {
        var resultado = {
            value: null,
            type: type_1.Type.error
        };
        var Matriz = env.get_Matriz(this.nombre);
        var index1 = this.i1.ejecutar(env);
        var index2 = this.i2.ejecutar(env);
        if (Matriz == null) {
            throw new Error("error semantico");
        }
        resultado = {
            value: Matriz.value[index1.value][index2.value],
            type: Matriz.type
        };
        return resultado;
    };
    EMatriz.prototype.ast = function () {
        var name_nodo = "node_".concat(this.line, "_").concat(this.column, "_");
        return "\n        ".concat(name_nodo, ";\n        ").concat(name_nodo, "[label=\"Vector\"];\n        ").concat(name_nodo, "->").concat(this.i1.ast(), "\n        ").concat(name_nodo, "->").concat(this.i2.ast(), "\n        ");
    };
    return EMatriz;
}(expression_1.Expression));
exports.EMatriz = EMatriz;
