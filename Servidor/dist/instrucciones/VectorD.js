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
exports.VectorD1D = void 0;
var instruccion_1 = require("../abstract/instruccion");
var Errores_1 = require("../Singleton/Errores");
var Singleton_1 = require("../Singleton/Singleton");
var s = Singleton_1.Singleton.getInstance();
var VectorD1D = /** @class */ (function (_super) {
    __extends(VectorD1D, _super);
    function VectorD1D(tipo, id, valor, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.tipo = tipo;
        _this.id = id;
        _this.valor = valor;
        return _this;
    }
    VectorD1D.prototype.ejecutar = function (env) {
        var diferente = false;
        var valor = [];
        for (var _i = 0, _a = this.valor; _i < _a.length; _i++) {
            var element = _a[_i];
            var e = element.ejecutar(env);
            valor.push(e.value);
            if (e.type != this.tipo) {
                diferente = true;
                break;
            }
        }
        var tamanio = valor.length;
        if (diferente == false) {
            env.guardar_vector(this.id, valor, this.tipo, tamanio, 1);
        }
        else {
            s.addErrores(new Errores_1.Errores("No son del mismo tipo", "semantico", this.line, this.colum));
        }
    };
    VectorD1D.prototype.ast = function () {
        var nombre_nodo = "node_".concat(this.line, "_").concat(this.colum, "_");
        s.addAst("\n        ".concat(nombre_nodo, "[label=\"Splice\"];\n        ").concat(nombre_nodo, "1[label=\"Nombre: ").concat(this.id, "\"];\n        ").concat(nombre_nodo, "2[label=\"Tipo: ").concat(this.tipo, "\"];\n        ").concat(nombre_nodo, "->").concat(nombre_nodo, "1;\n        ").concat(nombre_nodo, "->").concat(nombre_nodo, "2;\n        "));
    };
    return VectorD1D;
}(instruccion_1.Instruccion));
exports.VectorD1D = VectorD1D;
