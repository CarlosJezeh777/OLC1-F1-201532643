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
exports.IndexOf = void 0;
var expression_1 = require("../abstract/expression");
var type_1 = require("../Symbols/type");
var IndexOf = /** @class */ (function (_super) {
    __extends(IndexOf, _super);
    function IndexOf(nombre, expresion, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.nombre = nombre;
        _this.expresion = expresion;
        return _this;
    }
    IndexOf.prototype.ejecutar = function (env) {
        var resultado = {
            value: 0,
            type: type_1.Type.INT
        };
        var vector = env.get_vector(this.nombre);
        var tmp = this.expresion.ejecutar(env);
        if (vector == null) {
            throw new Error("error semantico");
        }
        for (var _i = 0, _a = vector.value; _i < _a.length; _i++) {
            var elemento = _a[_i];
            if (elemento == tmp.value) {
                resultado = {
                    value: 1,
                    type: type_1.Type.INT
                };
                break;
            }
        }
        return resultado;
    };
    IndexOf.prototype.ast = function () {
        var name_nodo = "node_".concat(this.line, "_").concat(this.column, "_");
        return "\n        ".concat(name_nodo, ";\n        ").concat(name_nodo, "[label=\"indexOf\"];\n        ").concat(name_nodo, "->").concat(this.expresion.ast(), "\n        ");
    };
    return IndexOf;
}(expression_1.Expression));
exports.IndexOf = IndexOf;
