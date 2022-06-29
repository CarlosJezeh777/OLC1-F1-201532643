"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSimbolo = exports.AritmeticasOptions = void 0;
var AritmeticasOptions;
(function (AritmeticasOptions) {
    AritmeticasOptions[AritmeticasOptions["MAS"] = 0] = "MAS";
    AritmeticasOptions[AritmeticasOptions["MENOS"] = 1] = "MENOS";
    AritmeticasOptions[AritmeticasOptions["MULTIPLICAR"] = 2] = "MULTIPLICAR";
    AritmeticasOptions[AritmeticasOptions["DIVIDIR"] = 3] = "DIVIDIR";
    AritmeticasOptions[AritmeticasOptions["POTENCIA"] = 4] = "POTENCIA";
    AritmeticasOptions[AritmeticasOptions["MODULO"] = 5] = "MODULO";
    AritmeticasOptions[AritmeticasOptions["NEGACION"] = 6] = "NEGACION";
})(AritmeticasOptions = exports.AritmeticasOptions || (exports.AritmeticasOptions = {}));
function getSimbolo(objeto) {
    switch (objeto) {
        case 0:
            return "+";
        case 1:
            return "-";
        case 2:
            return "*";
        case 3:
            return "/";
        case 5:
            return "%";
        case 4:
            return "**";
        default:
            return "";
    }
}
exports.getSimbolo = getSimbolo;
