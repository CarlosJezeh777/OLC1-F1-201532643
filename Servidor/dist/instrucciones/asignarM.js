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
exports.AsignarM = void 0;
var instruccion_1 = require("../abstract/instruccion");
var Errores_1 = require("../Singleton/Errores");
var Singleton_1 = require("../Singleton/Singleton");
var singleton = Singleton_1.Singleton.getInstance();
var AsignarM = /** @class */ (function (_super) {
    __extends(AsignarM, _super);
    function AsignarM(nombre, index, index2, valor, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.nombre = nombre;
        _this.index = index;
        _this.index2 = index2;
        _this.valor = valor;
        return _this;
    }
    AsignarM.prototype.ejecutar = function (env) {
        var Matriz = env.get_Matriz(this.nombre);
        //console.log(Matriz);
        if (Matriz == null) {
            singleton.addErrores(new Errores_1.Errores("El nombre del vector no existe", "Semantico", this.line, this.colum));
            throw new Error("Error semantico");
        }
        var i = Matriz.index - 1;
        var j = Matriz.index2 - 1;
        //console.log(i);
        var indice1 = this.index.ejecutar(env);
        var indice2 = this.index2.ejecutar(env);
        var valor = this.valor.ejecutar(env);
        //console.log(valor);
        if (indice1.value > i || indice2.value > j) {
            singleton.addErrores(new Errores_1.Errores("vector: el indice no existe", "Semantico", this.line, this.colum));
            throw new Error("error semantico");
        }
        if (valor.type != Matriz.type) {
            singleton.addErrores(new Errores_1.Errores("vector: No son del mismo tipo", "Semantico", this.line, this.colum));
            throw new Error("error semantico");
        }
        Matriz.value[indice1.value][indice2.value] = valor.value;
        //console.log(Matriz.value);
        env.actualizar_Matriz(this.nombre, Matriz);
        //console.log(expresion);
    };
    AsignarM.prototype.ast = function () {
        var s = Singleton_1.Singleton.getInstance();
        var nombre_nodo = "node_".concat(this.line, "_").concat(this.colum, "_");
        s.addAst("\n        ".concat(nombre_nodo, "[label=\"Asignacion Matriz\"];\n        ").concat(nombre_nodo, "1[label=\"Nombre: ").concat(this.nombre, "\"];\n        ").concat(nombre_nodo, "->").concat(nombre_nodo, "1;\n        ").concat(nombre_nodo, "->").concat(this.valor.ast(), "\n        "));
    };
    return AsignarM;
}(instruccion_1.Instruccion));
exports.AsignarM = AsignarM;
