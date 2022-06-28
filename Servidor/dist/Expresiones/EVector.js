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
exports.EVector = void 0;
var expression_1 = require("../abstract/expression");
var type_1 = require("../Symbols/type");
var EVector = /** @class */ (function (_super) {
    __extends(EVector, _super);
    function EVector(nombre, expresion, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.nombre = nombre;
        _this.expresion = expresion;
        return _this;
    }
    EVector.prototype.ejecutar = function (env) {
        var resultado = {
            value: null,
            type: type_1.Type.error
        };
        var vector = env.get_vector(this.nombre);
        var tmp = this.expresion.ejecutar(env);
        if (vector == null) {
            throw new Error("error semantico");
        }
        resultado = {
            value: vector.value[tmp.value],
            type: vector.type
        };
        return resultado;
    };
    return EVector;
}(expression_1.Expression));
exports.EVector = EVector;
