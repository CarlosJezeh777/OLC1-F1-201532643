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
var aritmeticasOpc_1 = require("./aritmeticasOpc");
var Aritmeticas = /** @class */ (function (_super) {
    __extends(Aritmeticas, _super);
    function Aritmeticas(izquierda, derecha, tipo, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.izquierda = izquierda;
        _this.derecha = derecha;
        _this.tipo = tipo;
        return _this;
    }
    Aritmeticas.prototype.ejecutar = function () {
        var resultado = {
            value: null,
            type: type_1.Type.error
        };
        var nodIzq = this.izquierda.ejecutar();
        var nodDer = this.derecha.ejecutar();
        if (this.tipo == aritmeticasOpc_1.AritmeticasOptions.MAS) {
            if (nodIzq.type == type_1.Type.INT && nodDer.type == type_1.Type.INT) {
                resultado = {
                    value: (nodIzq.value + nodDer.value),
                    type: type_1.Type.INT
                };
            }
            else if (nodIzq.type == type_1.Type.INT && nodDer.type == type_1.Type.DOUBLE) {
                resultado = {
                    value: (nodIzq.value + nodDer.value),
                    type: type_1.Type.DOUBLE
                };
            }
            else if (nodIzq.type == type_1.Type.INT && nodDer.type == type_1.Type.CHAR) {
                resultado = {
                    value: (nodIzq.value + nodDer.value.charCodeAt(0)),
                    type: type_1.Type.INT
                };
            }
            else if (nodIzq.type == type_1.Type.INT && nodDer.type == type_1.Type.STRING) {
                resultado = {
                    value: (String(nodIzq.value) + String(nodDer.value)),
                    type: type_1.Type.STRING
                };
            }
            else if (nodIzq.type == type_1.Type.DOUBLE && nodDer.type == type_1.Type.INT) {
                resultado = {
                    value: (nodIzq.value + nodDer.value),
                    type: type_1.Type.DOUBLE
                };
            }
            else if (nodIzq.type == type_1.Type.DOUBLE && nodDer.type == type_1.Type.DOUBLE) {
                resultado = {
                    value: (nodIzq.value + nodDer.value),
                    type: type_1.Type.DOUBLE
                };
            }
            else if (nodIzq.type == type_1.Type.DOUBLE && nodDer.type == type_1.Type.CHAR) {
                resultado = {
                    value: (nodIzq.value + nodDer.value.charCodeAt(0)),
                    type: type_1.Type.DOUBLE
                };
            }
            else if (nodIzq.type == type_1.Type.DOUBLE && nodDer.type == type_1.Type.STRING) {
                resultado = {
                    value: (String(nodIzq.value) + String(nodDer.value)),
                    type: type_1.Type.STRING
                };
            }
            else if (nodIzq.type == type_1.Type.CHAR && nodDer.type == type_1.Type.INT) {
                resultado = {
                    value: (nodIzq.value.charCodeAt + nodDer.value),
                    type: type_1.Type.INT
                };
            }
            else if (nodIzq.type == type_1.Type.CHAR && nodDer.type == type_1.Type.DOUBLE) {
                resultado = {
                    value: (nodIzq.value.charCodeAt + nodDer.value),
                    type: type_1.Type.DOUBLE
                };
            }
            else if (nodIzq.type == type_1.Type.CHAR && nodDer.type == type_1.Type.CHAR) {
                resultado = {
                    value: (nodIzq.value.charCodeAt + nodDer.value.charCodeAt),
                    type: type_1.Type.INT
                };
            }
            else if (nodIzq.type == type_1.Type.CHAR && nodDer.type == type_1.Type.STRING) {
                resultado = {
                    value: (String(nodIzq.value) + String(nodDer.value)),
                    type: type_1.Type.STRING
                };
            }
            else if (nodIzq.type == type_1.Type.STRING && nodDer.type == type_1.Type.INT) {
                resultado = {
                    value: (String(nodIzq.value) + String(nodDer.value)),
                    type: type_1.Type.STRING
                };
            }
            else if (nodIzq.type == type_1.Type.STRING && nodDer.type == type_1.Type.DOUBLE) {
                resultado = {
                    value: (String(nodIzq.value) + String(nodDer.value)),
                    type: type_1.Type.STRING
                };
            }
            else if (nodIzq.type == type_1.Type.STRING && nodDer.type == type_1.Type.CHAR) {
                resultado = {
                    value: (String(nodIzq.value) + String(nodDer.value)),
                    type: type_1.Type.STRING
                };
            }
            else if (nodIzq.type == type_1.Type.STRING && nodDer.type == type_1.Type.STRING) {
                resultado = {
                    value: (String(nodIzq.value) + String(nodDer.value)),
                    type: type_1.Type.STRING
                };
            }
            else if (nodIzq.type == type_1.Type.STRING && nodDer.type == type_1.Type.BOOLEAN) {
                resultado = {
                    value: (String(nodIzq.value) + String(nodDer.value)),
                    type: type_1.Type.STRING
                };
            }
            //AQUI EMPIEZA LA RESTA
        }
        else if (this.tipo == aritmeticasOpc_1.AritmeticasOptions.MENOS) {
            if (nodIzq.type == type_1.Type.INT && nodDer.type == type_1.Type.INT) {
                resultado = {
                    value: (nodIzq.value - nodDer.value),
                    type: type_1.Type.INT
                };
            }
            else if (nodIzq.type == type_1.Type.INT && nodDer.type == type_1.Type.DOUBLE) {
                resultado = {
                    value: (nodIzq.value - nodDer.value),
                    type: type_1.Type.DOUBLE
                };
            }
            else if (nodIzq.type == type_1.Type.INT && nodDer.type == type_1.Type.CHAR) {
                resultado = {
                    value: (nodIzq.value - nodDer.value.charCodeAt(0)),
                    type: type_1.Type.INT
                };
            }
            else if (nodIzq.type == type_1.Type.DOUBLE && nodDer.type == type_1.Type.INT) {
                resultado = {
                    value: (nodIzq.value - nodDer.value),
                    type: type_1.Type.DOUBLE
                };
            }
            else if (nodIzq.type == type_1.Type.DOUBLE && nodDer.type == type_1.Type.DOUBLE) {
                resultado = {
                    value: (nodIzq.value - nodDer.value),
                    type: type_1.Type.DOUBLE
                };
            }
            else if (nodIzq.type == type_1.Type.DOUBLE && nodDer.type == type_1.Type.CHAR) {
                resultado = {
                    value: (nodIzq.value - nodDer.value.charCodeAt(0)),
                    type: type_1.Type.DOUBLE
                };
            }
            else if (nodIzq.type == type_1.Type.CHAR && nodDer.type == type_1.Type.INT) {
                resultado = {
                    value: (nodIzq.value.charCodeAt - nodDer.value),
                    type: type_1.Type.INT
                };
            }
            else if (nodIzq.type == type_1.Type.CHAR && nodDer.type == type_1.Type.DOUBLE) {
                resultado = {
                    value: (nodIzq.value.charCodeAt + nodDer.value),
                    type: type_1.Type.DOUBLE
                };
            }
            else if (nodIzq.type == type_1.Type.CHAR && nodDer.type == type_1.Type.CHAR) {
                resultado = {
                    value: (nodIzq.value.charCodeAt + nodDer.value.charCodeAt),
                    type: type_1.Type.INT
                };
            }
        }
        console.log("no se porque no hace nada");
        return resultado;
    };
    return Aritmeticas;
}(expression_1.Expression));
exports.Aritmeticas = Aritmeticas;
