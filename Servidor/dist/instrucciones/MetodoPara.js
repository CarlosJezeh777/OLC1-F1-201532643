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
exports.MetodosP = void 0;
var instruccion_1 = require("../abstract/instruccion");
var Errores_1 = require("../Singleton/Errores");
var Singleton_1 = require("../Singleton/Singleton");
var s = Singleton_1.Singleton.getInstance();
var MetodosP = /** @class */ (function (_super) {
    __extends(MetodosP, _super);
    function MetodosP(nombre, parametros, instrucciones, line, colum) {
        var _this = _super.call(this, line, colum) || this;
        _this.nombre = nombre;
        _this.parametros = parametros;
        _this.instrucciones = instrucciones;
        return _this;
    }
    MetodosP.prototype.ejecutar = function (env) {
        //console.log(this);
        if (this.parametros == null) {
            s.addErrores(new Errores_1.Errores("no tiene parametros", "semantico", this.line, this.colum));
            throw new Error("Error semantico: tiene que traer parametros");
        }
        env.guardar_funcion(this.nombre, this);
    };
    MetodosP.prototype.ast = function () {
        var nombre_nodo = "node_".concat(this.line, "_").concat(this.colum, "_");
        s.addAst("\n        ".concat(nombre_nodo, "[label=\"metodo\"];\n        ").concat(nombre_nodo, "1[label=\"Nombre: ").concat(this.nombre, "\"];\n        ").concat(nombre_nodo, "->").concat(nombre_nodo, "1;\n        "));
    };
    return MetodosP;
}(instruccion_1.Instruccion));
exports.MetodosP = MetodosP;
