"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSimbol = exports.OpcionesLogicas = void 0;
var OpcionesLogicas;
(function (OpcionesLogicas) {
    OpcionesLogicas[OpcionesLogicas["OR"] = 0] = "OR";
    OpcionesLogicas[OpcionesLogicas["AND"] = 1] = "AND";
    OpcionesLogicas[OpcionesLogicas["NOT"] = 2] = "NOT";
    OpcionesLogicas[OpcionesLogicas["XOR"] = 3] = "XOR";
})(OpcionesLogicas = exports.OpcionesLogicas || (exports.OpcionesLogicas = {}));
function getSimbol(objeto) {
    switch (objeto) {
        case 0:
            return "\\|\\|";
        case 1:
            return "&&";
        case 2:
            return "!";
        case 3:
            return "^";
    }
    return "";
}
exports.getSimbol = getSimbol;
