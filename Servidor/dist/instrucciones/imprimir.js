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
exports.Imprimir = void 0;
var instruccion_1 = require("../abstract/instruccion");
var Errores_1 = require("../Singleton/Errores");
var Singleton_1 = require("../Singleton/Singleton");
var s = Singleton_1.Singleton.getInstance();
var Imprimir = /** @class */ (function (_super) {
    __extends(Imprimir, _super);
    function Imprimir(tipo, expresion, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.tipo = tipo;
        _this.expresion = expresion;
        return _this;
    }
    Imprimir.prototype.ejecutar = function (env) {
        if (this.expresion == null) {
            s.addErrores(new Errores_1.Errores("Print: salta de linea", "Semantico", this.line, this.colum));
            throw "Es un salto de linea";
        }
        var tmp = this.expresion.ejecutar(env);
        if (this.tipo == 0) {
            s.addConsola(tmp.value);
        }
        else if (this.tipo == 1) {
            s.addConsola(tmp.value + "\n");
        }
        else if (this.tipo == 2) {
            s.addConsola("\n\r");
        }
    };
    Imprimir.prototype.ast = function () {
        var nombreNodo = "node_".concat(this.line, "_").concat(this.colum, "_");
        if (this.tipo == 0) {
            s.addAst("".concat(nombreNodo, "[label=\"Print\"];"));
        }
        else if (this.tipo == 1) {
            s.addAst("".concat(nombreNodo, "[label=\"Println\"];"));
        }
        if (this.expresion != null) {
            s.addAst("".concat(nombreNodo, "->").concat(this.expresion.ast()));
        }
    };
    return Imprimir;
}(instruccion_1.Instruccion));
exports.Imprimir = Imprimir;
