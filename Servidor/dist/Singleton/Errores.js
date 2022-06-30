"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Errores = void 0;
var Errores = /** @class */ (function () {
    function Errores(descripcion, tipo, linea, columna) {
        this.descripcion = descripcion;
        this.tipo = tipo;
        this.linea = linea;
        this.columna = columna;
    }
    return Errores;
}());
exports.Errores = Errores;
