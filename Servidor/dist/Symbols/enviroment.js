"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enviroment = void 0;
var symbols_1 = require("./symbols");
var type_1 = require("./type");
var Enviroment = /** @class */ (function () {
    function Enviroment(anterior) {
        this.anterior = anterior;
        this.tablaSimbolos = new Map();
        this.tablaSimbolos_metodos = new Map();
        this.tablaSimbolos_vectores = new Map();
        this.tablaSimbolos_Matrices = new Map();
    }
    Enviroment.prototype.getEnv = function () {
        return this.tablaSimbolos;
    };
    Enviroment.prototype.guardar_funcion = function (nombre, valor) {
        if (!this.buscar_metodo(nombre)) {
            this.tablaSimbolos_metodos.set(nombre, valor);
            return true;
        }
        console.log("este metodo [" + nombre + "] ya existe...");
        return false;
    };
    Enviroment.prototype.buscar_metodo = function (nombre) {
        for (var _i = 0, _a = Array.from(this.tablaSimbolos_metodos.entries()); _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry[0] == nombre)
                return true;
        }
        return false;
    };
    Enviroment.prototype.guardar_varible = function (nombre, valor, type, editable) {
        if (!this.buscar_variable(nombre)) {
            this.tablaSimbolos.set(nombre, new symbols_1.Symbolos(valor, nombre, type, editable));
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
    Enviroment.prototype.guardar_vector = function (nombre, valor, type, index, dimension) {
        if (!this.buscar_vector(nombre)) {
            this.tablaSimbolos_vectores.set(nombre, new symbols_1.Symbol_Vector(valor, nombre, type, index, dimension));
            return true;
        }
        console.log("esta variable [" + nombre + "] ya existe...");
        return false;
    };
    Enviroment.prototype.buscar_vector = function (nombre) {
        for (var _i = 0, _a = Array.from(this.tablaSimbolos_vectores.entries()); _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry[0] == nombre)
                return true;
        }
        return false;
    };
    Enviroment.prototype.get_vector = function (nombre) {
        var env = this;
        while (env != null) {
            if (env.tablaSimbolos_vectores.has(nombre))
                return env.tablaSimbolos_vectores.get(nombre);
            env = env.anterior;
        }
        return null;
    };
    Enviroment.prototype.actualizar_vector = function (nombre, new_valor) {
        for (var _i = 0, _a = Array.from(this.tablaSimbolos.entries()); _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry[0] == nombre) {
                entry[1].value = new_valor;
            }
        }
    };
    Enviroment.prototype.guardar_Matriz = function (nombre, valor, type, index, index2) {
        if (!this.buscar_vector(nombre)) {
            this.tablaSimbolos_Matrices.set(nombre, new symbols_1.Symbol_Matriz(valor, nombre, type, index, index2));
            return true;
        }
        console.log("esta variable [" + nombre + "] ya existe...");
        return false;
    };
    Enviroment.prototype.buscar_Matriz = function (nombre) {
        for (var _i = 0, _a = Array.from(this.tablaSimbolos_Matrices.entries()); _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry[0] == nombre)
                return true;
        }
        return false;
    };
    Enviroment.prototype.get_Matriz = function (nombre) {
        var env = this;
        while (env != null) {
            if (env.tablaSimbolos_Matrices.has(nombre))
                return env.tablaSimbolos_Matrices.get(nombre);
            env = env.anterior;
        }
        return null;
    };
    Enviroment.prototype.actualizar_Matriz = function (nombre, new_valor) {
        for (var _i = 0, _a = Array.from(this.tablaSimbolos.entries()); _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry[0] == nombre) {
                entry[1].value = new_valor;
            }
        }
    };
    Enviroment.prototype.getTipo_variable = function (nombre) {
        for (var _i = 0, _a = Array.from(this.tablaSimbolos.entries()); _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry[0] == nombre)
                return entry[1].type;
        }
        return type_1.Type.error;
    };
    Enviroment.prototype.getValor_variable = function (nombre) {
        for (var _i = 0, _a = Array.from(this.tablaSimbolos.entries()); _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry[0] == nombre)
                return { value: entry[1], type: entry[1].type };
        }
        return { value: null, type: type_1.Type.error };
    };
    Enviroment.prototype.actualizar_variable = function (nombre, new_valor) {
        for (var _i = 0, _a = Array.from(this.tablaSimbolos.entries()); _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry[0] == nombre) {
                entry[1].value = new_valor;
            }
        }
    };
    Enviroment.prototype.actualizar_variable2 = function (nombre, new_valor, env) {
        for (var _i = 0, _a = Array.from(env.tablaSimbolos.entries()); _i < _a.length; _i++) {
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
    Enviroment.prototype.get_metodo = function (nombre) {
        var env = this;
        while (env != null) {
            if (env.tablaSimbolos_metodos.has(nombre))
                return env.tablaSimbolos_metodos.get(nombre);
            env = env.anterior;
        }
        return null;
    };
    Enviroment.prototype.get_metodoP = function (nombre) {
        var env = this;
        while (env != null) {
            if (env.tablaSimbolos_metodos.has(nombre))
                return env.tablaSimbolos_metodos.get(nombre);
            env = env.anterior;
        }
        return null;
    };
    Enviroment.prototype.get_Funcion = function (nombre) {
        var env = this;
        while (env != null) {
            if (env.tablaSimbolos_metodos.has(nombre))
                return env.tablaSimbolos_metodos.get(nombre);
            env = env.anterior;
        }
        return null;
    };
    Enviroment.prototype.get_Enviroment = function (nombre) {
        var env = this;
        while (env != null) {
            if (env.buscar_variable(nombre)) {
                return env;
            }
            env = env.anterior;
        }
        return null;
    };
    return Enviroment;
}());
exports.Enviroment = Enviroment;
