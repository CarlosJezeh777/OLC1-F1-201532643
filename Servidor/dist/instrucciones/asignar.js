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
exports.Asignar = void 0;
var instruccion_1 = require("../abstract/instruccion");
var Acceso_1 = require("../Expresiones/Acceso");
var Singleton_1 = require("../Singleton/Singleton");
var Asignar = /** @class */ (function (_super) {
    __extends(Asignar, _super);
    function Asignar(nombre, expresion, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.nombre = nombre;
        _this.expresion = expresion;
        return _this;
    }
    Asignar.prototype.ejecutar = function (env) {
        var verificar = new Acceso_1.Acces(this.nombre, this.line, this.colum);
        var acces = verificar.ejecutar(env);
        var expresion = this.expresion.ejecutar(env);
        var tmp = env.get_Enviroment(this.nombre);
        tmp === null || tmp === void 0 ? void 0 : tmp.actualizar_variable(this.nombre, expresion.value);
    };
    Asignar.prototype.ast = function () {
        var s = Singleton_1.Singleton.getInstance();
        var nombre_nodo = "node_".concat(this.line, "_").concat(this.colum, "_");
        s.addAst("\n        ".concat(nombre_nodo, "[label=\"Asignacion\"];\n        ").concat(nombre_nodo, "1[label=\"Nombre: ").concat(this.nombre, "\"];\n        ").concat(nombre_nodo, "->").concat(nombre_nodo, "1;\n        ").concat(nombre_nodo, "->").concat(this.expresion.ast(), "\n        "));
    };
    return Asignar;
}(instruccion_1.Instruccion));
exports.Asignar = Asignar;
