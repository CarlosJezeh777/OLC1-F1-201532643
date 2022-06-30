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
exports.VectorD1 = void 0;
var instruccion_1 = require("../abstract/instruccion");
var Singleton_1 = require("../Singleton/Singleton");
var VectorD1 = /** @class */ (function (_super) {
    __extends(VectorD1, _super);
    function VectorD1(tipo, id, tipo2, valor, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.tipo = tipo;
        _this.id = id;
        _this.tipo2 = tipo2;
        _this.valor = valor;
        return _this;
    }
    VectorD1.prototype.ejecutar = function (env) {
        if (this.valor == null) {
            throw new Error("error semantico");
        }
        var valor = this.valor.ejecutar(env);
        if (this.tipo == this.tipo2) {
            env.guardar_vector(this.id, [], this.tipo, valor.value, 1);
        }
        //console.log(env);
    };
    VectorD1.prototype.ast = function () {
        var s = Singleton_1.Singleton.getInstance();
        var nombre_nodo = "node_".concat(this.line, "_").concat(this.colum, "_");
        s.addAst("\n        ".concat(nombre_nodo, "[label=\"Splice\"];\n        ").concat(nombre_nodo, "1[label=\"Nombre: ").concat(this.id, "\"];\n        ").concat(nombre_nodo, "2[label=\"Tipo: ").concat(this.tipo, "\"];\n        ").concat(nombre_nodo, "->").concat(nombre_nodo, "1;\n        ").concat(nombre_nodo, "->").concat(nombre_nodo, "2;\n        ").concat(nombre_nodo, "->").concat(this.valor.ast(), "\n        "));
    };
    return VectorD1;
}(instruccion_1.Instruccion));
exports.VectorD1 = VectorD1;
