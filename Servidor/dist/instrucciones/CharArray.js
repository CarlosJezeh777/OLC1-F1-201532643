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
exports.CharArray = void 0;
var instruccion_1 = require("../abstract/instruccion");
var Singleton_1 = require("../Singleton/Singleton");
var type_1 = require("../Symbols/type");
var CharArray = /** @class */ (function (_super) {
    __extends(CharArray, _super);
    function CharArray(nombre, valor, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.nombre = nombre;
        _this.valor = valor;
        return _this;
    }
    CharArray.prototype.ejecutar = function (env) {
        if (this.valor == null) {
            throw new Error("error semantico");
        }
        var valor = this.valor.ejecutar(env);
        if (valor.type != type_1.Type.STRING) {
            throw new Error("error semantico");
        }
        var ArrayChar = Array.from(String(valor.value));
        env.guardar_vector(this.nombre, ArrayChar, type_1.Type.CHAR, ArrayChar.length, 1);
        //console.log(env);
    };
    CharArray.prototype.ast = function () {
        var s = Singleton_1.Singleton.getInstance();
        var nombre_nodo = "node_".concat(this.line, "_").concat(this.colum, "_");
        s.addAst("\n        ".concat(nombre_nodo, "[label=\"toCharArray\"];\n        ").concat(nombre_nodo, "1[label=\"Nombre: ").concat(this.nombre, "\"];\n        ").concat(nombre_nodo, "->").concat(nombre_nodo, "1;\n        ").concat(nombre_nodo, "->").concat(this.valor.ast(), "\n        "));
    };
    return CharArray;
}(instruccion_1.Instruccion));
exports.CharArray = CharArray;
