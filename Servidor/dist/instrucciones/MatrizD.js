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
exports.MatrizD = void 0;
var instruccion_1 = require("../abstract/instruccion");
var Errores_1 = require("../Singleton/Errores");
var Singleton_1 = require("../Singleton/Singleton");
var s = Singleton_1.Singleton.getInstance();
var MatrizD = /** @class */ (function (_super) {
    __extends(MatrizD, _super);
    function MatrizD(tipo, id, valor, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.tipo = tipo;
        _this.id = id;
        _this.valor = valor;
        return _this;
    }
    MatrizD.prototype.ejecutar = function (env) {
        var diferente = false;
        var index1 = 0;
        var index2 = 0;
        for (var i = 0; i < this.valor.length; i++) {
            index2 = 0;
            for (var j = 0; j < this.valor[i].length; j++) {
                index2++;
            }
            index1++;
        }
        //console.log(index1);
        //console.log(index2);
        var valor2 = new Array(2);
        valor2[0] = new Array(index1);
        valor2[1] = new Array(index2);
        for (var i = 0; i < this.valor.length; i++) {
            for (var j = 0; j < this.valor[i].length; j++) {
                var val = this.valor[i][j].ejecutar(env);
                //console.log(val);
                valor2[i][j] = val.value;
            }
        }
        if (diferente == false) {
            env.guardar_Matriz(this.id, valor2, this.tipo, index1, index2);
        }
        else {
            s.addErrores(new Errores_1.Errores("No son del mismo tipo", "semantico", this.line, this.colum));
        }
    };
    MatrizD.prototype.ast = function () {
        var nombre_nodo = "node_".concat(this.line, "_").concat(this.colum, "_");
        s.addAst("\n        ".concat(nombre_nodo, "[label=\"Splice\"];\n        ").concat(nombre_nodo, "1[label=\"Nombre: ").concat(this.id, "\"];\n        ").concat(nombre_nodo, "2[label=\"Tipo: ").concat(this.tipo, "\"];\n        ").concat(nombre_nodo, "->").concat(nombre_nodo, "1;\n        ").concat(nombre_nodo, "->").concat(nombre_nodo, "2;\n        "));
    };
    return MatrizD;
}(instruccion_1.Instruccion));
exports.MatrizD = MatrizD;
