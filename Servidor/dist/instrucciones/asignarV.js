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
exports.AsignarV = void 0;
var instruccion_1 = require("../abstract/instruccion");
var Singleton_1 = require("../Singleton/Singleton");
var AsignarV = /** @class */ (function (_super) {
    __extends(AsignarV, _super);
    function AsignarV(nombre, index, valor, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.nombre = nombre;
        _this.index = index;
        _this.valor = valor;
        return _this;
    }
    AsignarV.prototype.ejecutar = function (env) {
        var arreglo = env.get_vector(this.nombre);
        //console.log(arreglo);
        if (arreglo == null) {
            throw new Error("Error semantico");
        }
        var i = arreglo.index - 1;
        //console.log(i);
        var indice = this.index.ejecutar(env);
        //console.log(indice);
        var valor = this.valor.ejecutar(env);
        //console.log(valor);
        if (indice.value > i) {
            throw new Error("error semantico");
        }
        if (valor.type != arreglo.type) {
            throw new Error("error semantico");
        }
        arreglo.value[indice.value] = valor.value;
        //console.log(arreglo);
        env.actualizar_vector(this.nombre, arreglo);
        //console.log(expresion);
    };
    AsignarV.prototype.ast = function () {
        var s = Singleton_1.Singleton.getInstance();
        var nombre_nodo = "node_".concat(this.line, "_").concat(this.colum, "_");
        s.addAst("\n        ".concat(nombre_nodo, "[label=\"Asignacion Vector\"];\n        ").concat(nombre_nodo, "1[label=\"Nombre: ").concat(this.nombre, "\"];\n        ").concat(nombre_nodo, "->").concat(nombre_nodo, "1;\n        ").concat(nombre_nodo, "->").concat(this.valor.ast(), "\n        "));
    };
    return AsignarV;
}(instruccion_1.Instruccion));
exports.AsignarV = AsignarV;
