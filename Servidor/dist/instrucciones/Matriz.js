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
exports.Matriz = void 0;
var instruccion_1 = require("../abstract/instruccion");
var Errores_1 = require("../Singleton/Errores");
var Singleton_1 = require("../Singleton/Singleton");
var s = Singleton_1.Singleton.getInstance();
var Matriz = /** @class */ (function (_super) {
    __extends(Matriz, _super);
    function Matriz(tipo, id, tipo2, valor, valor2, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.tipo = tipo;
        _this.id = id;
        _this.tipo2 = tipo2;
        _this.valor = valor;
        _this.valor2 = valor2;
        return _this;
    }
    Matriz.prototype.ejecutar = function (env) {
        //console.log(this);
        if (this.valor == null) {
            s.addErrores(new Errores_1.Errores("Vector: Especifique el tamaño", "Semantico", this.line, this.colum));
            throw new Error("error semantico");
        }
        if (this.valor2 == null) {
            s.addErrores(new Errores_1.Errores("Vector: Especifique el tamaño", "Semantico", this.line, this.colum));
            throw new Error("error semantico");
        }
        var valor = this.valor.ejecutar(env);
        var valor2 = this.valor2.ejecutar(env);
        var nuevoArray = new Array(2);
        nuevoArray[0] = new Array(valor.value);
        nuevoArray[1] = new Array(valor2.value);
        if (this.tipo == this.tipo2) {
            env.guardar_Matriz(this.id, nuevoArray, this.tipo, valor.value, valor2.value);
        }
        //console.log(env);
    };
    Matriz.prototype.ast = function () {
        var nombre_nodo = "node_".concat(this.line, "_").concat(this.colum, "_");
        s.addAst("\n        ".concat(nombre_nodo, "[label=\"vector dimensional\"];\n        ").concat(nombre_nodo, "1[label=\"Nombre: ").concat(this.id, "\"];\n        ").concat(nombre_nodo, "2[label=\"Tipo: ").concat(this.tipo, "\"];\n        ").concat(nombre_nodo, "->").concat(nombre_nodo, "1;\n        ").concat(nombre_nodo, "->").concat(nombre_nodo, "2;\n        ").concat(nombre_nodo, "->").concat(this.valor.ast(), "\n        ").concat(nombre_nodo, "->").concat(this.valor2.ast(), "\n        "));
    };
    return Matriz;
}(instruccion_1.Instruccion));
exports.Matriz = Matriz;
