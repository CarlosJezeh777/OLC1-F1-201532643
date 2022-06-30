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
exports.Pop = void 0;
var instruccion_1 = require("../abstract/instruccion");
var Singleton_1 = require("../Singleton/Singleton");
var Pop = /** @class */ (function (_super) {
    __extends(Pop, _super);
    function Pop(nombre, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.nombre = nombre;
        return _this;
    }
    Pop.prototype.ejecutar = function (env) {
        var arreglo = env.get_vector(this.nombre);
        //console.log(arreglo);
        if (arreglo == null) {
            throw new Error("Error semantico");
        }
        arreglo.value.pop();
        arreglo.index = arreglo.index - 1;
        //console.log(arreglo);
        env.actualizar_vector(this.nombre, arreglo);
        //console.log(expresion);
    };
    Pop.prototype.ast = function () {
        var s = Singleton_1.Singleton.getInstance();
        var nombre_nodo = "node_".concat(this.line, "_").concat(this.colum, "_");
        s.addAst("\n        ".concat(nombre_nodo, "[label=\"Pop\"];\n        ").concat(nombre_nodo, "1[label=\"Nombre: ").concat(this.nombre, "\"];\n        ").concat(nombre_nodo, "->").concat(nombre_nodo, "1;\n        "));
    };
    return Pop;
}(instruccion_1.Instruccion));
exports.Pop = Pop;
