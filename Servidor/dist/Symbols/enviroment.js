"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var symbols_1 = require("./symbols");
var type_1 = require("./type");
var Enviroment = /** @class */ (function () {
    function Enviroment(anterior) {
        this.anterior = anterior;
        this.tablaSimbolos = new Map();
    }
    Enviroment.prototype.getEnv = function () {
        return this.tablaSimbolos;
    };
    Enviroment.prototype.guardar_varible = function (nombre, valor, type) {
        if (!this.buscar_variable(nombre)) {
            this.tablaSimbolos.set(nombre, new symbols_1.Symbolos(valor, nombre, type));
            return true;
        }
        console.log("esta variable [" + nombre + "] ya existe...");
        return false;
    };
    Enviroment.prototype.buscar_variable = function (nombre) {
        for (var _i = 0, _a = Array.from(this.tablaSimbolos.entries()); _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry[0] == nombre)
                return true;
        }
        return false;
    };
    Enviroment.prototype.getTipo_variable = function (nombre) {
        for (var _i = 0, _a = Array.from(this.tablaSimbolos.entries()); _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry[0] == nombre)
                return entry[1].type;
        }
        return type_1.Type.error;
    };
    Enviroment.prototype.actualizar_variable = function (nombre, new_valor) {
        for (var _i = 0, _a = Array.from(this.tablaSimbolos.entries()); _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry[0] == nombre) {
                entry[1].value = new_valor;
            }
        }
    };
    Enviroment.prototype.get_variable = function (nombre) {
        var env = this;
        while (env != null) {
            if (env.tablaSimbolos.has(nombre))
                return env.tablaSimbolos.get(nombre);
            env = env.anterior;
        }
        return null;
    };
    return Enviroment;
}());
exports.Enviroment = Enviroment;
