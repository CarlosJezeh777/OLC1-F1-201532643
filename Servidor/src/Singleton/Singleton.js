"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Singleton = /** @class */ (function () {
    function Singleton() {
        this.consola = " ";
        this.errores = [];
    }
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    Singleton.prototype.addConsola = function (data) {
        this.consola += data;
    };
    Singleton.prototype.getConsola = function () {
        return this.consola;
    };
    Singleton.prototype.addErrores = function (data) {
        this.errores.push(data);
    };
    Singleton.prototype.getErrores = function () {
        return this.errores;
    };
    return Singleton;
}());
exports.Singleton = Singleton;
