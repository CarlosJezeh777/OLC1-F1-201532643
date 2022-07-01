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
exports.Splice = void 0;
var instruccion_1 = require("../abstract/instruccion");
var Errores_1 = require("../Singleton/Errores");
var Singleton_1 = require("../Singleton/Singleton");
var s = Singleton_1.Singleton.getInstance();
var Splice = /** @class */ (function (_super) {
    __extends(Splice, _super);
    function Splice(nombre, indice, valor, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.nombre = nombre;
        _this.indice = indice;
        _this.valor = valor;
        return _this;
    }
    Splice.prototype.ejecutar = function (env) {
        //console.log(this);
        var arreglo = env.get_vector(this.nombre);
        console.log(arreglo);
        if (arreglo == null) {
            s.addErrores(new Errores_1.Errores("no se encontro el vector", "semantico", this.line, this.colum));
            throw new Error("Error semantico");
        }
        var valor = this.valor.ejecutar(env);
        var indi = this.indice.ejecutar(env);
        //console.log(valor);
        if (valor.type != arreglo.type) {
            s.addErrores(new Errores_1.Errores("No son del mismo tipo", "semantico", this.line, this.colum));
            throw new Error("error semantico");
        }
        arreglo.value.splice(Number(indi.value), 0, valor.value);
        arreglo.index = arreglo.index + 1;
        // console.log(arreglo);
        env.actualizar_vector(this.nombre, arreglo);
        //console.log(expresion);
    };
    Splice.prototype.ast = function () {
        var nombre_nodo = "node_".concat(this.line, "_").concat(this.colum, "_");
        s.addAst("\n        ".concat(nombre_nodo, "[label=\"Splice\"];\n        ").concat(nombre_nodo, "1[label=\"Nombre: ").concat(this.nombre, "\"];\n        ").concat(nombre_nodo, "2[label=\"indice: ").concat(this.indice, "\"];\n        ").concat(nombre_nodo, "->").concat(nombre_nodo, "1;\n        ").concat(nombre_nodo, "->").concat(nombre_nodo, "2;\n        ").concat(nombre_nodo, "->").concat(this.valor.ast(), "\n        "));
    };
    return Splice;
}(instruccion_1.Instruccion));
exports.Splice = Splice;
