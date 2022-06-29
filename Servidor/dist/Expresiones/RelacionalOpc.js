"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSimbolo = exports.OpcionRelacional = void 0;
var OpcionRelacional;
(function (OpcionRelacional) {
    OpcionRelacional[OpcionRelacional["MAYORQUE"] = 0] = "MAYORQUE";
    OpcionRelacional[OpcionRelacional["MENORQUE"] = 1] = "MENORQUE";
    OpcionRelacional[OpcionRelacional["MAYORIGUAL"] = 2] = "MAYORIGUAL";
    OpcionRelacional[OpcionRelacional["MENORIGUAL"] = 3] = "MENORIGUAL";
    OpcionRelacional[OpcionRelacional["IGUALQUE"] = 4] = "IGUALQUE";
    OpcionRelacional[OpcionRelacional["NOIGUAL"] = 5] = "NOIGUAL";
})(OpcionRelacional = exports.OpcionRelacional || (exports.OpcionRelacional = {}));
function getSimbolo(objeto) {
    switch (objeto) {
        case 4:
            return "==";
        case 5:
            return "!=";
        case 1:
            return "\\<";
        case 3:
            return "\\<=";
        case 0:
            return "\\>";
        case 2:
            return "\\>=";
        default:
            return "";
    }
}
exports.getSimbolo = getSimbolo;
