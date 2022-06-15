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
var expression_1 = require("../abstract/expression");
var type_1 = require("../Symbols/type");
var LogicasOpc_1 = require("./LogicasOpc");
var Logica = /** @class */ (function (_super) {
    __extends(Logica, _super);
    function Logica(izquierda, derecha, tipo, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.izquierda = izquierda;
        _this.derecha = derecha;
        _this.tipo = tipo;
        return _this;
    }
    Logica.prototype.ejecutar = function (env) {
        var resultado = {
            value: null,
            type: type_1.Type.error
        };
        var nodIzq = this.izquierda.ejecutar(env);
        var nodDer = this.derecha.ejecutar(env);
        if (this.tipo == LogicasOpc_1.OpcionesLogicas.AND) {
            if (nodIzq.type == type_1.Type.BOOLEAN && nodDer.type == type_1.Type.BOOLEAN) {
                resultado = {
                    value: nodIzq.value && nodDer.value,
                    type: type_1.Type.BOOLEAN
                };
            }
        }
        else if (this.tipo == LogicasOpc_1.OpcionesLogicas.OR) {
            if (nodIzq.type == type_1.Type.BOOLEAN && nodDer.type == type_1.Type.BOOLEAN) {
                resultado = {
                    value: nodIzq.value || nodDer.value,
                    type: type_1.Type.BOOLEAN
                };
            }
        }
        else if (this.tipo == LogicasOpc_1.OpcionesLogicas.XOR) {
            if (nodIzq.type == type_1.Type.BOOLEAN && nodDer.type == type_1.Type.BOOLEAN) {
                resultado = {
                    value: (nodIzq.value || nodDer.value) && !(nodIzq.value && nodDer.value),
                    type: type_1.Type.BOOLEAN
                };
            }
        }
        else if (this.tipo == LogicasOpc_1.OpcionesLogicas.NOT) {
            if (nodDer.type == type_1.Type.BOOLEAN) {
                resultado = {
                    value: !(nodDer.value),
                    type: type_1.Type.BOOLEAN
                };
            }
        }
        return resultado;
    };
    return Logica;
}(expression_1.Expression));
exports.Logica = Logica;
