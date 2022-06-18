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
exports.InDe = void 0;
var instruccion_1 = require("../abstract/instruccion");
var Acceso_1 = require("../Expresiones/Acceso");
var IncrementosOpc_1 = require("./IncrementosOpc");
var InDe = /** @class */ (function (_super) {
    __extends(InDe, _super);
    function InDe(lado, nombre, tipo, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.lado = lado;
        _this.nombre = nombre;
        _this.tipo = tipo;
        return _this;
    }
    InDe.prototype.ejecutar = function (env) {
        var nuevo;
        var id = new Acceso_1.Acces(this.nombre, this.line, this.colum);
        var valor = id.ejecutar(env);
        console.log(valor);
        var tmp = env.get_Enviroment(this.nombre);
        if (this.lado == 0 && this.tipo == IncrementosOpc_1.OpcionesInDe.MAMA) {
            nuevo = ++valor.value;
            tmp === null || tmp === void 0 ? void 0 : tmp.actualizar_variable(this.nombre, nuevo);
        }
        else if (this.lado == 1 && this.tipo == IncrementosOpc_1.OpcionesInDe.MAMA) {
            nuevo = valor.value + 1;
            tmp === null || tmp === void 0 ? void 0 : tmp.actualizar_variable(this.nombre, nuevo);
        }
        else if (this.lado == 0 && this.tipo == IncrementosOpc_1.OpcionesInDe.MEME) {
            nuevo = --valor.value;
            tmp === null || tmp === void 0 ? void 0 : tmp.actualizar_variable(this.nombre, nuevo);
        }
        else if (this.lado == 1 && this.tipo == IncrementosOpc_1.OpcionesInDe.MEME) {
            nuevo = valor.value - 1;
            tmp === null || tmp === void 0 ? void 0 : tmp.actualizar_variable(this.nombre, nuevo);
        }
    };
    return InDe;
}(instruccion_1.Instruccion));
exports.InDe = InDe;
