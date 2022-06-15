"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var instruccion_1 = require("../abstract/instruccion");
var enviroment_1 = require("../Symbols/enviroment");
var Bloque = /** @class */ (function (_super) {
    __extends(Bloque, _super);
    function Bloque(instruccion, line, colum) {
        var _this = _super.call(this, line, colum) || this;
        _this.instruccion = instruccion;
        return _this;
    }
    Bloque.prototype.ejecutar = function (env) {
        var new_env = new enviroment_1.Enviroment(env);
        for (var _i = 0, _a = this.instruccion; _i < _a.length; _i++) {
            var elemento = _a[_i];
            try {
                elemento.ejecutar(new_env);
            }
            catch (error) {
                console.log(error);
            }
        }
        //console.log(env);
    };
    return Bloque;
}(instruccion_1.Instruccion));
exports.Bloque = Bloque;
