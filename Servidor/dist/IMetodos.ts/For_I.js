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
exports.For_Inst = void 0;
var instruccion_1 = require("../abstract/instruccion");
var enviroment_1 = require("../Symbols/enviroment");
var type_1 = require("../Symbols/type");
var For_Inst = /** @class */ (function (_super) {
    __extends(For_Inst, _super);
    function For_Inst(variable, condicion, in_de, instrucciones, line, colum) {
        var _this = _super.call(this, line, colum) || this;
        _this.variable = variable;
        _this.condicion = condicion;
        _this.in_de = in_de;
        _this.instrucciones = instrucciones;
        return _this;
    }
    For_Inst.prototype.ejecutar = function (env) {
        console.log("Estoy en el for");
        console.log(this);
        var band = true;
        var env_for = new enviroment_1.Enviroment(env);
        var env_Block = new enviroment_1.Enviroment(env_for);
        this.variable.ejecutar(env_for);
        while (band) {
            //console.log(index);
            var cond = this.condicion.ejecutar(env_for);
            this.in_de.ejecutar(env_for);
            console.log(cond);
            if (cond.type != type_1.Type.BOOLEAN) {
                throw new Error("la condicion tiene que ser un boolean");
            }
            if (cond.value == false) {
                break;
            }
            this.instrucciones.ejecutar(env_Block);
        }
    };
    return For_Inst;
}(instruccion_1.Instruccion));
exports.For_Inst = For_Inst;
