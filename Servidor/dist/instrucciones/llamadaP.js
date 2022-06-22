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
exports.LlamadaP = void 0;
var instruccion_1 = require("../abstract/instruccion");
var enviroment_1 = require("../Symbols/enviroment");
var asignar_1 = require("./asignar");
var LlamadaP = /** @class */ (function (_super) {
    __extends(LlamadaP, _super);
    function LlamadaP(id, parametros, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.id = id;
        _this.parametros = parametros;
        return _this;
    }
    LlamadaP.prototype.ejecutar = function (env) {
        var metodo = env.get_metodoP(this.id);
        var env_parametros = new enviroment_1.Enviroment(env);
        var env_instrucciones = new enviroment_1.Enviroment(env_parametros);
        var nombres = [];
        var asignaciones = [];
        for (var _i = 0, _a = metodo === null || metodo === void 0 ? void 0 : metodo.parametros; _i < _a.length; _i++) {
            var dec = _a[_i];
            nombres.push(dec.nombre);
            try {
                dec.ejecutar(env_parametros);
            }
            catch (error) {
                console.log(error);
            }
        }
        for (var i = 0; i < nombres.length; i++) {
            asignaciones.push(new asignar_1.Asignar(nombres[i], this.parametros[i], this.line, this.colum));
        }
        for (var _b = 0, asignaciones_1 = asignaciones; _b < asignaciones_1.length; _b++) {
            var elemento = asignaciones_1[_b];
            try {
                elemento.ejecutar(env_parametros);
            }
            catch (error) {
                console.log(error);
            }
        }
        //.log(env_parametros);
        if (metodo == null) {
            throw "Error semantico, no ecnontre esta funcion";
        }
        metodo.instrucciones.ejecutar(env_instrucciones);
    };
    return LlamadaP;
}(instruccion_1.Instruccion));
exports.LlamadaP = LlamadaP;
