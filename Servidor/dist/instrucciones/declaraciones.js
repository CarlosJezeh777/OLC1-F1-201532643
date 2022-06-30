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
exports.Declaracion = void 0;
var instruccion_1 = require("../abstract/instruccion");
var Errores_1 = require("../Singleton/Errores");
var Singleton_1 = require("../Singleton/Singleton");
var type_1 = require("../Symbols/type");
var s = Singleton_1.Singleton.getInstance();
var Declaracion = /** @class */ (function (_super) {
    __extends(Declaracion, _super);
    function Declaracion(tipo, nombre, expresion, editable, line, colum) {
        var _this = _super.call(this, line, colum) || this;
        _this.tipo = tipo;
        _this.nombre = nombre;
        _this.expresion = expresion;
        _this.editable = editable;
        return _this;
    }
    Declaracion.prototype.ejecutar = function (env) {
        //console.log("Declarando variable: " + this.nombre );
        if (this.expresion == null) {
            if (this.tipo == type_1.Type.INT) {
                if (this.editable == true) {
                    env.guardar_varible(this.nombre, 0, this.tipo, true);
                }
                else {
                    env.guardar_varible(this.nombre, 0, this.tipo, this.editable);
                }
            }
            else if (this.tipo == type_1.Type.BOOLEAN) {
                if (this.editable == true) {
                    env.guardar_varible(this.nombre, true, this.tipo, this.editable);
                }
                else {
                    env.guardar_varible(this.nombre, true, this.tipo, this.editable);
                }
            }
            else if (this.tipo == type_1.Type.STRING) {
                if (this.editable == true) {
                    env.guardar_varible(this.nombre, "", this.tipo, this.editable);
                }
                else {
                    env.guardar_varible(this.nombre, "", this.tipo, this.editable);
                }
            }
            else if (this.tipo == type_1.Type.CHAR) {
                if (this.editable == true) {
                    env.guardar_varible(this.nombre, '', this.tipo, this.editable);
                }
                else {
                    env.guardar_varible(this.nombre, '', this.tipo, this.editable);
                }
            }
            else if (this.tipo == type_1.Type.DOUBLE) {
                if (this.editable == true) {
                    env.guardar_varible(this.nombre, 0, this.tipo, this.editable);
                }
                else {
                    env.guardar_varible(this.nombre, 0, this.tipo, this.editable);
                }
            }
            else {
                s.addErrores(new Errores_1.Errores("Declaracion: variable nula", "Semantico", this.line, this.colum));
            }
        }
        var expresion = this.expresion.ejecutar(env);
        //console.log(expresion.value);
        //console.log(expresion.type);
        if (env.buscar_variable(this.nombre)) {
            s.addErrores(new Errores_1.Errores("declaracion: la variable ya exite, y no se puede repetir", "Semantico", this.line, this.colum));
            throw "Error semantico, la variable ya exite, y no se puede repetir";
        }
        if (this.editable == true) {
            env.guardar_varible(this.nombre, expresion.value, expresion.type, this.editable);
        }
        else {
            env.guardar_varible(this.nombre, expresion.value, expresion.type, this.editable);
        }
    };
    Declaracion.prototype.ast = function () {
        var nombreNodo = "node_".concat(this.line, "_").concat(this.colum, "_");
        s.addAst("\n        ".concat(nombreNodo, "[label=\"Declaracion\"];\n        ").concat(nombreNodo, "1[label=\"Nombre: ").concat(this.nombre, "\"];\n        ").concat(nombreNodo, "2[label=\"Tipo: ").concat(this.tipo, "\"];\n        ").concat(nombreNodo, "->").concat(nombreNodo, "1\n        ").concat(nombreNodo, "->").concat(nombreNodo, "2\n        ").concat(nombreNodo, "->").concat(this.expresion.ast()));
    };
    return Declaracion;
}(instruccion_1.Instruccion));
exports.Declaracion = Declaracion;
