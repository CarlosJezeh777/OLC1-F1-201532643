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
exports.Switch_I = void 0;
var instruccion_1 = require("../abstract/instruccion");
var Acceso_1 = require("../Expresiones/Acceso");
var UtilesArrays_1 = require("../Singleton/UtilesArrays");
var enviroment_1 = require("../Symbols/enviroment");
var Switch_I = /** @class */ (function (_super) {
    __extends(Switch_I, _super);
    function Switch_I(nombre, casos, line, colum) {
        var _this = _super.call(this, line, colum) || this;
        _this.nombre = nombre;
        _this.casos = casos;
        return _this;
    }
    Switch_I.prototype.ejecutar = function (env) {
        console.log("esoy en el switch");
        var new_env = new enviroment_1.Enviroment(env);
        //console.log(this.nombre);
        var verificar = new Acceso_1.Acces(this.nombre, this.line, this.colum);
        var valor = verificar.ejecutar(env);
        //console.log(valor);
        for (var _i = 0, _a = this.casos; _i < _a.length; _i++) {
            var elemento = _a[_i];
            elemento.ejecutar(env);
        }
        var util = UtilesArrays_1.utilesArrays.getInstance();
        var elementos = util.getCasos();
        //console.log(elementos);
        for (var _b = 0, elementos_1 = elementos; _b < elementos_1.length; _b++) {
            var element = elementos_1[_b];
            var valor_caso = element.valor.ejecutar();
            //console.log(valor_caso);
            //console.log(valor);
            var Instrucciones = element.instrucccion;
            if (valor.value == valor_caso.value) {
                //console.log("no entra en el caso");
                for (var _c = 0, Instrucciones_1 = Instrucciones; _c < Instrucciones_1.length; _c++) {
                    var iterator = Instrucciones_1[_c];
                    iterator.ejecutar(new_env);
                }
                break;
            }
        }
        util.deleteCasos();
    };
    return Switch_I;
}(instruccion_1.Instruccion));
exports.Switch_I = Switch_I;
