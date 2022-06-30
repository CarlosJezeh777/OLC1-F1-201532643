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
exports.Acces = void 0;
var expression_1 = require("../abstract/expression");
var type_1 = require("../Symbols/type");
var Acces = /** @class */ (function (_super) {
    __extends(Acces, _super);
    function Acces(id, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.id = id;
        return _this;
    }
    Acces.prototype.ejecutar = function (env) {
        var resultado = {
            value: null,
            type: type_1.Type.error
        };
        var variable_ts = env.get_variable(this.id);
        var variable_vector = env.get_vector(this.id);
        //console.log(variable_ts);
        if (variable_ts != null || variable_ts != undefined) {
            resultado = {
                value: variable_ts.value,
                type: variable_ts.type
            };
        }
        else if (variable_vector != null) {
            resultado = {
                value: "[" + variable_vector.value + "]",
                type: variable_vector.type
            };
        }
        else {
            throw new Error("error semantico aqui");
        }
        return resultado;
    };
    Acces.prototype.ast = function () {
        var name_nodo = "node_".concat(this.line, "_").concat(this.column, "_");
        return "\n        ".concat(name_nodo, ";\n        ").concat(name_nodo, "[label=\"").concat(this.id, "\"];\n        ");
    };
    return Acces;
}(expression_1.Expression));
exports.Acces = Acces;
