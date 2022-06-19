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
exports.Aritmeticas = void 0;
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
    Aritmeticas.prototype.ejecutar = function (env) {
        var resultado = {
            value: null,
            type: type_1.Type.error
        };
        var nodIzq = this.izquierda.ejecutar(env);
        var nodDer = this.derecha.ejecutar(env);
        if (this.tipo == aritmeticasOpc_1.AritmeticasOptions.MAS) {
            if (nodIzq.type == type_1.Type.INT && nodDer.type == type_1.Type.INT) {
                resultado = {
                    value: (Number(nodIzq.value) + Number(nodDer.value)),
                    type: type_1.Type.INT
                };
                return resultado;
            }
            else if (nodIzq.type == type_1.Type.INT && nodDer.type == type_1.Type.DOUBLE) {
                resultado = {
                    value: (Number(nodIzq.value) + Number(nodDer.value)).toFixed(2),
                    type: type_1.Type.DOUBLE
                };
            }
            else if (nodIzq.type == type_1.Type.INT && nodDer.type == type_1.Type.CHAR) {
                resultado = {
                    value: (nodIzq.value + nodDer.value.charCodeAt()),
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
                    value: (Number(nodIzq.value) + Number(nodDer.value)).toFixed(2),
                    type: type_1.Type.DOUBLE
                };
            }
            else if (nodIzq.type == type_1.Type.DOUBLE && nodDer.type == type_1.Type.DOUBLE) {
                resultado = {
                    value: (Number(nodIzq.value) + Number(nodDer.value)).toFixed(2),
                    type: type_1.Type.DOUBLE
                };
            }
            else if (nodIzq.type == type_1.Type.DOUBLE && nodDer.type == type_1.Type.CHAR) {
                resultado = {
                    value: (Number(nodIzq.value) + Number(nodDer.value.charCodeAt())).toFixed(2),
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
                    value: (nodIzq.value.charCodeAt() + nodDer.value),
                    type: type_1.Type.INT
                };
            }
            else if (nodIzq.type == type_1.Type.CHAR && nodDer.type == type_1.Type.DOUBLE) {
                resultado = {
                    value: (Number(nodIzq.value.charCodeAt()) + Number(nodDer.value)).toFixed(2),
                    type: type_1.Type.DOUBLE
                };
            }
            else if (nodIzq.type == type_1.Type.CHAR && nodDer.type == type_1.Type.CHAR) {
                resultado = {
                    value: (nodIzq.value.charCodeAt() + nodDer.value.charCodeAt()),
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
                    value: (Number(nodIzq.value) - Number(nodDer.value)).toFixed(2),
                    type: type_1.Type.DOUBLE
                };
            }
            else if (nodIzq.type == type_1.Type.INT && nodDer.type == type_1.Type.CHAR) {
                resultado = {
                    value: (nodIzq.value - nodDer.value.charCodeAt()),
                    type: type_1.Type.INT
                };
            }
            else if (nodIzq.type == type_1.Type.DOUBLE && nodDer.type == type_1.Type.INT) {
                resultado = {
                    value: (Number(nodIzq.value) - Number(nodDer.value)).toFixed(2),
                    type: type_1.Type.DOUBLE
                };
            }
            else if (nodIzq.type == type_1.Type.DOUBLE && nodDer.type == type_1.Type.DOUBLE) {
                resultado = {
                    value: (Number(nodIzq.value) - Number(nodDer.value)).toFixed(2),
                    type: type_1.Type.DOUBLE
                };
            }
            else if (nodIzq.type == type_1.Type.DOUBLE && nodDer.type == type_1.Type.CHAR) {
                resultado = {
                    value: (Number(nodIzq.value) - Number(nodDer.value.charCodeAt())).toFixed(2),
                    type: type_1.Type.DOUBLE
                };
            }
            else if (nodIzq.type == type_1.Type.CHAR && nodDer.type == type_1.Type.INT) {
                resultado = {
                    value: (nodIzq.value.charCodeAt() - nodDer.value),
                    type: type_1.Type.INT
                };
            }
            else if (nodIzq.type == type_1.Type.CHAR && nodDer.type == type_1.Type.DOUBLE) {
                resultado = {
                    value: (Number(nodIzq.value.charCodeAt()) - Number(nodDer.value)).toFixed(2),
                    type: type_1.Type.DOUBLE
                };
            }
            else if (nodIzq.type == type_1.Type.CHAR && nodDer.type == type_1.Type.CHAR) {
                resultado = {
                    value: (nodIzq.value.charCodeAt() - nodDer.value.charCodeAt()),
                    type: type_1.Type.INT
                };
            }
            //AQUI EMPIEZA LA MULTIPLICACION
        }
        else if (this.tipo == aritmeticasOpc_1.AritmeticasOptions.MULTIPLICAR) {
            if (nodIzq.type == type_1.Type.INT && nodDer.type == type_1.Type.INT) {
                resultado = {
                    value: (nodIzq.value * nodDer.value),
                    type: type_1.Type.INT
                };
            }
            else if (nodIzq.type == type_1.Type.INT && nodDer.type == type_1.Type.DOUBLE) {
                resultado = {
                    value: (Number(nodIzq.value) * Number(nodDer.value)).toFixed(2),
                    type: type_1.Type.DOUBLE
                };
            }
            else if (nodIzq.type == type_1.Type.INT && nodDer.type == type_1.Type.CHAR) {
                resultado = {
                    value: (nodIzq.value * nodDer.value.charCodeAt()),
                    type: type_1.Type.INT
                };
            }
            else if (nodIzq.type == type_1.Type.DOUBLE && nodDer.type == type_1.Type.INT) {
                resultado = {
                    value: (Number(nodIzq.value) * Number(nodDer.value)).toFixed(2),
                    type: type_1.Type.DOUBLE
                };
            }
            else if (nodIzq.type == type_1.Type.DOUBLE && nodDer.type == type_1.Type.DOUBLE) {
                resultado = {
                    value: (Number(nodIzq.value) * Number(nodDer.value)).toFixed(2),
                    type: type_1.Type.DOUBLE
                };
            }
            else if (nodIzq.type == type_1.Type.DOUBLE && nodDer.type == type_1.Type.CHAR) {
                resultado = {
                    value: (Number(nodIzq.value) * Number(nodDer.value.charCodeAt())).toFixed(2),
                    type: type_1.Type.DOUBLE
                };
            }
            else if (nodIzq.type == type_1.Type.CHAR && nodDer.type == type_1.Type.INT) {
                resultado = {
                    value: (nodIzq.value.charCodeAt() * nodDer.value),
                    type: type_1.Type.INT
                };
            }
            else if (nodIzq.type == type_1.Type.CHAR && nodDer.type == type_1.Type.DOUBLE) {
                resultado = {
                    value: (Number(nodIzq.value.charCodeAt()) * Number(nodDer.value)).toFixed(2),
                    type: type_1.Type.DOUBLE
                };
            }
            else if (nodIzq.type == type_1.Type.CHAR && nodDer.type == type_1.Type.CHAR) {
                resultado = {
                    value: (nodIzq.value.charCodeAt() * nodDer.value.charCodeAt()),
                    type: type_1.Type.INT
                };
            }
            //AQUI EMPIEZA LA DIVISION
        }
        else if (this.tipo == aritmeticasOpc_1.AritmeticasOptions.DIVIDIR) {
            if (nodIzq.type == type_1.Type.INT && nodDer.type == type_1.Type.INT) {
                resultado = {
                    value: Math.trunc(nodIzq.value / nodDer.value),
                    type: type_1.Type.INT
                };
            }
            else if (nodIzq.type == type_1.Type.INT && nodDer.type == type_1.Type.DOUBLE) {
                resultado = {
                    value: (Number(nodIzq.value) / Number(nodDer.value)).toFixed(2),
                    type: type_1.Type.DOUBLE
                };
            }
            else if (nodIzq.type == type_1.Type.INT && nodDer.type == type_1.Type.CHAR) {
                resultado = {
                    value: Math.trunc(nodIzq.value / nodDer.value.charCodeAt()),
                    type: type_1.Type.INT
                };
            }
            else if (nodIzq.type == type_1.Type.DOUBLE && nodDer.type == type_1.Type.INT) {
                resultado = {
                    value: (Number(nodIzq.value) / Number(nodDer.value)).toFixed(2),
                    type: type_1.Type.DOUBLE
                };
            }
            else if (nodIzq.type == type_1.Type.DOUBLE && nodDer.type == type_1.Type.DOUBLE) {
                resultado = {
                    value: (Number(nodIzq.value) / Number(nodDer.value)).toFixed(2),
                    type: type_1.Type.DOUBLE
                };
            }
            else if (nodIzq.type == type_1.Type.DOUBLE && nodDer.type == type_1.Type.CHAR) {
                resultado = {
                    value: (Number(nodIzq.value) / Number(nodDer.value.charCodeAt())).toFixed(2),
                    type: type_1.Type.DOUBLE
                };
            }
            else if (nodIzq.type == type_1.Type.CHAR && nodDer.type == type_1.Type.INT) {
                resultado = {
                    value: Math.trunc(nodIzq.value.charCodeAt() / nodDer.value),
                    type: type_1.Type.INT
                };
            }
            else if (nodIzq.type == type_1.Type.CHAR && nodDer.type == type_1.Type.DOUBLE) {
                resultado = {
                    value: (Number(nodIzq.value.charCodeAt()) / Number(nodDer.value)).toFixed(2),
                    type: type_1.Type.DOUBLE
                };
            }
            else if (nodIzq.type == type_1.Type.CHAR && nodDer.type == type_1.Type.CHAR) {
                resultado = {
                    value: Math.trunc(nodIzq.value.charCodeAt() / nodDer.value.charCodeAt()),
                    type: type_1.Type.INT
                };
            }
            //AQUI EMPIZA LA POTENCIA
        }
        else if (this.tipo == aritmeticasOpc_1.AritmeticasOptions.POTENCIA) {
            if (nodIzq.type == type_1.Type.INT && nodDer.type == type_1.Type.INT) {
                resultado = {
                    value: Math.pow(nodIzq.value, nodDer.value).toFixed(2),
                    type: type_1.Type.DOUBLE
                };
            }
            else if (nodIzq.type == type_1.Type.INT && nodDer.type == type_1.Type.DOUBLE) {
                resultado = {
                    value: Math.pow(nodIzq.value, nodDer.value).toFixed(2),
                    type: type_1.Type.DOUBLE
                };
            }
            else if (nodIzq.type == type_1.Type.INT && nodDer.type == type_1.Type.CHAR) {
                resultado = {
                    value: Math.pow(nodIzq.value, nodDer.value.charCodeAt()).toFixed(2),
                    type: type_1.Type.DOUBLE
                };
            }
            else if (nodIzq.type == type_1.Type.DOUBLE && nodDer.type == type_1.Type.INT) {
                resultado = {
                    value: Math.pow(nodIzq.value, nodDer.value).toFixed(2),
                    type: type_1.Type.DOUBLE
                };
            }
            else if (nodIzq.type == type_1.Type.DOUBLE && nodDer.type == type_1.Type.DOUBLE) {
                resultado = {
                    value: Math.pow(nodIzq.value, nodDer.value).toFixed(2),
                    type: type_1.Type.DOUBLE
                };
            }
            else if (nodIzq.type == type_1.Type.DOUBLE && nodDer.type == type_1.Type.CHAR) {
                resultado = {
                    value: Math.pow(nodIzq.value, nodDer.value.charCodeAt()).toFixed(2),
                    type: type_1.Type.DOUBLE
                };
            }
            else if (nodIzq.type == type_1.Type.CHAR && nodDer.type == type_1.Type.INT) {
                resultado = {
                    value: Math.pow(nodIzq.value.charCodeAt(), nodDer.value).toFixed(2),
                    type: type_1.Type.DOUBLE
                };
            }
            else if (nodIzq.type == type_1.Type.CHAR && nodDer.type == type_1.Type.DOUBLE) {
                resultado = {
                    value: Math.pow(nodIzq.value.charCodeAt(), nodDer.value).toFixed(2),
                    type: type_1.Type.DOUBLE
                };
            }
            else if (nodIzq.type == type_1.Type.CHAR && nodDer.type == type_1.Type.CHAR) {
                resultado = {
                    value: Math.pow(nodIzq.value.charCodeAt(), nodDer.value.charCodeAt()).toFixed(2),
                    type: type_1.Type.DOUBLE
                };
            }
            //AQUI EMPIZA EL MODULO
        }
        else if (this.tipo == aritmeticasOpc_1.AritmeticasOptions.MODULO) {
            if (nodIzq.type == type_1.Type.INT && nodDer.type == type_1.Type.INT) {
                resultado = {
                    value: (Number(nodIzq.value) % Number(nodDer.value)).toFixed(2),
                    type: type_1.Type.DOUBLE
                };
            }
            else if (nodIzq.type == type_1.Type.INT && nodDer.type == type_1.Type.DOUBLE) {
                resultado = {
                    value: (Number(nodIzq.value) % Number(nodDer.value)).toFixed(2),
                    type: type_1.Type.DOUBLE
                };
            }
            else if (nodIzq.type == type_1.Type.INT && nodDer.type == type_1.Type.CHAR) {
                resultado = {
                    value: (Number(nodIzq.value) % Number(nodDer.value.charCodeAt())).toFixed(2),
                    type: type_1.Type.DOUBLE
                };
            }
            else if (nodIzq.type == type_1.Type.DOUBLE && nodDer.type == type_1.Type.INT) {
                resultado = {
                    value: (Number(nodIzq.value) % Number(nodDer.value)),
                    type: type_1.Type.DOUBLE
                };
            }
            else if (nodIzq.type == type_1.Type.DOUBLE && nodDer.type == type_1.Type.DOUBLE) {
                resultado = {
                    value: (Number(nodIzq.value) % Number(nodDer.value)).toFixed(2),
                    type: type_1.Type.DOUBLE
                };
            }
            else if (nodIzq.type == type_1.Type.DOUBLE && nodDer.type == type_1.Type.CHAR) {
                resultado = {
                    value: (Number(nodIzq.value) % Number(nodDer.value.charCodeAt())).toFixed(2),
                    type: type_1.Type.DOUBLE
                };
            }
            else if (nodIzq.type == type_1.Type.CHAR && nodDer.type == type_1.Type.INT) {
                resultado = {
                    value: (Number(nodIzq.value.charCodeAt()) % Number(nodDer.value)).toFixed(2),
                    type: type_1.Type.DOUBLE
                };
            }
            else if (nodIzq.type == type_1.Type.CHAR && nodDer.type == type_1.Type.DOUBLE) {
                resultado = {
                    value: (Number(nodIzq.value.charCodeAt()) % Number(nodDer.value)).toFixed(2),
                    type: type_1.Type.DOUBLE
                };
            }
            else if (nodIzq.type == type_1.Type.CHAR && nodDer.type == type_1.Type.CHAR) {
                resultado = {
                    value: Math.trunc(Number(nodIzq.value.charCodeAt()) % Number(nodDer.value.charCodeAt())).toFixed(2),
                    type: type_1.Type.DOUBLE
                };
            }
        }
        return resultado;
    };
    return Aritmeticas;
}(expression_1.Expression));
exports.Aritmeticas = Aritmeticas;
