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
var Iif = /** @class */ (function (_super) {
    __extends(Iif, _super);
    function Iif(expresion, instruc, line, colum) {
        var _this = _super.call(this, line, colum) || this;
        _this.expresion = expresion;
        _this.instruc = instruc;
        return _this;
    }
    Iif.prototype.ejecutar = function (env) {
        var expresion = this.expresion.ejecutar(env);
        if (expresion.value == true) {
            console.log("aqui van las instrucicones");
            for (var _i = 0, _a = this.instruc; _i < _a.length; _i++) {
                var elemento = _a[_i];
                elemento.ejecutar();
            }
            console.log(this.instruc);
        }
        console.log(expresion);
    };
    return Iif;
}(instruccion_1.Instruccion));
exports.Iif = Iif;
