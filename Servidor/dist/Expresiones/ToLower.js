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
exports.ToLower = void 0;
var expression_1 = require("../abstract/expression");
var type_1 = require("../Symbols/type");
var ToLower = /** @class */ (function (_super) {
    __extends(ToLower, _super);
    function ToLower(expresion, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.expresion = expresion;
        return _this;
    }
    ToLower.prototype.ejecutar = function (env) {
        var resultado = {
            value: null,
            type: type_1.Type.error
        };
        var tmp = this.expresion.ejecutar(env);
        if (tmp.type != type_1.Type.STRING) {
            throw new Error("error");
        }
        var minusculas = String(tmp.value);
        resultado = {
            value: minusculas.toLowerCase(),
            type: type_1.Type.STRING
        };
        return resultado;
    };
    ToLower.prototype.ast = function () {
        var name_nodo = "node_".concat(this.line, "_").concat(this.column, "_");
        return "\n        ".concat(name_nodo, ";\n        ").concat(name_nodo, "[label=\"To Lower\"];\n        ").concat(name_nodo, "->").concat(this.expresion.ast(), "\n        \n        ");
    };
    return ToLower;
}(expression_1.Expression));
exports.ToLower = ToLower;
