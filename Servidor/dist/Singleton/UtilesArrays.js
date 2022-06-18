"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utilesArrays = void 0;
var utilesArrays = /** @class */ (function () {
    function utilesArrays() {
        this.elses_if = [];
        this.casos = [];
    }
    utilesArrays.getInstance = function () {
        if (!utilesArrays.instance) {
            utilesArrays.instance = new utilesArrays();
        }
        return utilesArrays.instance;
    };
    utilesArrays.prototype.addElseIf = function (data) {
        this.elses_if.push(data);
    };
    utilesArrays.prototype.getElseIF = function () {
        return this.elses_if;
    };
    utilesArrays.prototype.deleteElses = function () {
        this.elses_if.length = 0;
    };
    utilesArrays.prototype.addCasos = function (data) {
        this.casos.push(data);
    };
    utilesArrays.prototype.getCasos = function () {
        return this.casos;
    };
    utilesArrays.prototype.deleteCasos = function () {
        this.casos.length = 0;
    };
    return utilesArrays;
}());
exports.utilesArrays = utilesArrays;
