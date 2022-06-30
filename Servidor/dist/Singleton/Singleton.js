"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singleton = void 0;
var Singleton = /** @class */ (function () {
    function Singleton() {
        this.consola = " ";
        this.ast = " ";
        this.Gts = " ";
        this.errores = [];
        this.elses_if = [];
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
    Singleton.prototype.addGts = function (data) {
        this.Gts += data;
    };
    Singleton.prototype.getGts = function () {
        return this.Gts;
    };
    Singleton.prototype.addAst = function (data) {
        this.ast += data;
    };
    Singleton.prototype.getAst = function () {
        return this.ast;
    };
    Singleton.prototype.addErrores = function (data) {
        this.errores.push(data);
    };
    Singleton.prototype.getErrores = function () {
        return this.errores;
    };
    Singleton.prototype.addElseIf = function (data) {
        this.elses_if.push(data);
    };
    Singleton.prototype.getElseIF = function () {
        return this.elses_if;
    };
    Singleton.prototype.deleteElemets = function () {
        this.elses_if.length = 0;
    };
    return Singleton;
}());
exports.Singleton = Singleton;
