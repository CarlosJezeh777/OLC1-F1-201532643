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
exports.GTS = void 0;
var instruccion_1 = require("../abstract/instruccion");
var Singleton_1 = require("../Singleton/Singleton");
var GTS = /** @class */ (function (_super) {
    __extends(GTS, _super);
    function GTS(line, column) {
        return _super.call(this, line, column) || this;
    }
    GTS.prototype.ejecutar = function (env) {
        var _this = this;
        var s = Singleton_1.Singleton.getInstance();
        var esteEnv = env.getEnv();
        //console.log(esteEnv);
        var tabla = "";
        var name = "nodo_".concat(this.line, "_").concat(this.colum);
        var nameNodo = "linea: " + this.line + " columna: " + this.colum;
        tabla += name + "[label=<\n" +
            "<TABLE  border=\"1\" cellspacing=\"0.1\">\n" +
            "<TR><TD colspan=\"3\" bgcolor=\"#ff6961\">" + nameNodo + " </TD></TR>" +
            "<TR><TD   bgcolor=\"#77dd77\">Nombre</TD>\n" +
            "<TD   bgcolor=\"#77dd77\">Valor</TD>\n" +
            "<TD   bgcolor=\"#77dd77\">Tipo</TD>\n" +
            "</TR>\n";
        esteEnv.forEach(function (value, key) {
            tabla += "<TR><TD bgcolor=\"#fdfd96\">" + value.id + "</TD>\n" +
                "<TD  bgcolor=\"#fdfd96\">" + value.value + "</TD>\n" +
                "<TD  bgcolor=\"#fdfd96\">" + _this.tipoD(Number(value.type)) + "</TD>\n" +
                "</TR>\n";
        });
        tabla += "</TABLE>>];\n";
        s.addGts(tabla);
    };
    GTS.prototype.ast = function () {
        var s = Singleton_1.Singleton.getInstance();
        var nombre_nodo = "node_".concat(this.line, "_").concat(this.colum, "_");
        s.addAst("\n        ".concat(nombre_nodo, "[label=\"Graficar TS\"];\n        "));
    };
    GTS.prototype.tipoD = function (tipo) {
        var palabra = "";
        if (tipo == 0) {
            palabra = "int";
        }
        else if (tipo == 1) {
            palabra = "string";
        }
        else if (tipo == 2) {
            palabra = "double";
        }
        else if (tipo == 3) {
            palabra = "char";
        }
        else if (tipo == 4) {
            palabra = "boolean";
        }
        return palabra;
    };
    return GTS;
}(instruccion_1.Instruccion));
exports.GTS = GTS;
