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
exports.Relacional = void 0;
var expression_1 = require("../abstract/expression");
var type_1 = require("../Symbols/type");
var RelacionalOpc_1 = require("./RelacionalOpc");
var Relacional = /** @class */ (function (_super) {
    __extends(Relacional, _super);
    function Relacional(izquierda, derecha, tipo, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.izquierda = izquierda;
        _this.derecha = derecha;
        _this.tipo = tipo;
        return _this;
    }
    Relacional.prototype.ejecutar = function (env) {
        var resultado = {
            value: null,
            type: type_1.Type.error
        };
        var nodIzq = this.izquierda.ejecutar(env);
        var nodDer = this.derecha.ejecutar(env);
        if (this.tipo == RelacionalOpc_1.OpcionRelacional.MAYORQUE) {
            if (nodIzq.type == type_1.Type.INT && nodDer.type == type_1.Type.INT) {
                resultado = {
                    value: (nodIzq.value > nodDer.value),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.INT && nodDer.type == type_1.Type.DOUBLE) {
                resultado = {
                    value: (nodIzq.value > nodDer.value),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.INT && nodDer.type == type_1.Type.CHAR) {
                resultado = {
                    value: (nodIzq.value > nodDer.value.charCodeAt()),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.DOUBLE && nodDer.type == type_1.Type.INT) {
                resultado = {
                    value: (nodIzq.value > nodDer.value),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.DOUBLE && nodDer.type == type_1.Type.DOUBLE) {
                resultado = {
                    value: (nodIzq.value > nodDer.value),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.DOUBLE && nodDer.type == type_1.Type.CHAR) {
                resultado = {
                    value: (nodIzq.value > nodDer.value.charCodeAt()),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.CHAR && nodDer.type == type_1.Type.INT) {
                resultado = {
                    value: (nodIzq.value.charCodeAt() > nodDer.value),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.CHAR && nodDer.type == type_1.Type.DOUBLE) {
                resultado = {
                    value: (nodIzq.value.charCodeAt() > nodDer.value),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.CHAR && nodDer.type == type_1.Type.CHAR) {
                resultado = {
                    value: (nodIzq.value.charCodeAt() > nodDer.value.charCodeAt()),
                    type: type_1.Type.BOOLEAN
                };
            }
        }
        else if (this.tipo == RelacionalOpc_1.OpcionRelacional.MENORQUE) {
            if (nodIzq.type == type_1.Type.INT && nodDer.type == type_1.Type.INT) {
                resultado = {
                    value: (nodIzq.value < nodDer.value),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.INT && nodDer.type == type_1.Type.DOUBLE) {
                resultado = {
                    value: (nodIzq.value < nodDer.value),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.INT && nodDer.type == type_1.Type.CHAR) {
                resultado = {
                    value: (nodIzq.value < nodDer.value.charCodeAt()),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.DOUBLE && nodDer.type == type_1.Type.INT) {
                resultado = {
                    value: (nodIzq.value < nodDer.value),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.DOUBLE && nodDer.type == type_1.Type.DOUBLE) {
                resultado = {
                    value: (nodIzq.value < nodDer.value),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.DOUBLE && nodDer.type == type_1.Type.CHAR) {
                resultado = {
                    value: (nodIzq.value < nodDer.value.charCodeAt()),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.CHAR && nodDer.type == type_1.Type.INT) {
                resultado = {
                    value: (nodIzq.value.charCodeAt() < nodDer.value),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.CHAR && nodDer.type == type_1.Type.DOUBLE) {
                resultado = {
                    value: (nodIzq.value.charCodeAt() < nodDer.value),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.CHAR && nodDer.type == type_1.Type.CHAR) {
                resultado = {
                    value: (nodIzq.value.charCodeAt() < nodDer.value.charCodeAt()),
                    type: type_1.Type.BOOLEAN
                };
            }
        }
        else if (this.tipo == RelacionalOpc_1.OpcionRelacional.MAYORIGUAL) {
            if (nodIzq.type == type_1.Type.INT && nodDer.type == type_1.Type.INT) {
                resultado = {
                    value: (nodIzq.value >= nodDer.value),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.INT && nodDer.type == type_1.Type.DOUBLE) {
                resultado = {
                    value: (nodIzq.value >= nodDer.value),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.INT && nodDer.type == type_1.Type.CHAR) {
                resultado = {
                    value: (nodIzq.value >= nodDer.value.charCodeAt()),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.DOUBLE && nodDer.type == type_1.Type.INT) {
                resultado = {
                    value: (nodIzq.value >= nodDer.value),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.DOUBLE && nodDer.type == type_1.Type.DOUBLE) {
                resultado = {
                    value: (nodIzq.value >= nodDer.value),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.DOUBLE && nodDer.type == type_1.Type.CHAR) {
                resultado = {
                    value: (nodIzq.value >= nodDer.value.charCodeAt()),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.CHAR && nodDer.type == type_1.Type.INT) {
                resultado = {
                    value: (nodIzq.value.charCodeAt() >= nodDer.value),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.CHAR && nodDer.type == type_1.Type.DOUBLE) {
                resultado = {
                    value: (nodIzq.value.charCodeAt() >= nodDer.value),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.CHAR && nodDer.type == type_1.Type.CHAR) {
                resultado = {
                    value: (nodIzq.value.charCodeAt() >= nodDer.value.charCodeAt()),
                    type: type_1.Type.BOOLEAN
                };
            }
        }
        else if (this.tipo == RelacionalOpc_1.OpcionRelacional.MENORIGUAL) {
            if (nodIzq.type == type_1.Type.INT && nodDer.type == type_1.Type.INT) {
                resultado = {
                    value: (nodIzq.value <= nodDer.value),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.INT && nodDer.type == type_1.Type.DOUBLE) {
                resultado = {
                    value: (nodIzq.value <= nodDer.value),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.INT && nodDer.type == type_1.Type.CHAR) {
                resultado = {
                    value: (nodIzq.value <= nodDer.value.charCodeAt()),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.DOUBLE && nodDer.type == type_1.Type.INT) {
                resultado = {
                    value: (nodIzq.value <= nodDer.value),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.DOUBLE && nodDer.type == type_1.Type.DOUBLE) {
                resultado = {
                    value: (nodIzq.value <= nodDer.value),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.DOUBLE && nodDer.type == type_1.Type.CHAR) {
                resultado = {
                    value: (nodIzq.value <= nodDer.value.charCodeAt()),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.CHAR && nodDer.type == type_1.Type.INT) {
                resultado = {
                    value: (nodIzq.value.charCodeAt() <= nodDer.value),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.CHAR && nodDer.type == type_1.Type.DOUBLE) {
                resultado = {
                    value: (nodIzq.value.charCodeAt() <= nodDer.value),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.CHAR && nodDer.type == type_1.Type.CHAR) {
                resultado = {
                    value: (nodIzq.value.charCodeAt() <= nodDer.value.charCodeAt()),
                    type: type_1.Type.BOOLEAN
                };
            }
        }
        else if (this.tipo == RelacionalOpc_1.OpcionRelacional.IGUALQUE) {
            if (nodIzq.type == type_1.Type.INT && nodDer.type == type_1.Type.INT) {
                resultado = {
                    value: (nodIzq.value == nodDer.value),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.INT && nodDer.type == type_1.Type.DOUBLE) {
                resultado = {
                    value: (nodIzq.value == nodDer.value),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.INT && nodDer.type == type_1.Type.CHAR) {
                resultado = {
                    value: (nodIzq.value == nodDer.value.charCodeAt()),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.DOUBLE && nodDer.type == type_1.Type.INT) {
                resultado = {
                    value: (nodIzq.value == nodDer.value),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.DOUBLE && nodDer.type == type_1.Type.DOUBLE) {
                resultado = {
                    value: (nodIzq.value == nodDer.value),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.DOUBLE && nodDer.type == type_1.Type.CHAR) {
                resultado = {
                    value: (nodIzq.value == nodDer.value.charCodeAt()),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.CHAR && nodDer.type == type_1.Type.INT) {
                resultado = {
                    value: (nodIzq.value.charCodeAt() == nodDer.value),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.CHAR && nodDer.type == type_1.Type.DOUBLE) {
                resultado = {
                    value: (nodIzq.value.charCodeAt() == nodDer.value),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.CHAR && nodDer.type == type_1.Type.CHAR) {
                resultado = {
                    value: (nodIzq.value.charCodeAt() == nodDer.value.charCodeAt()),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.STRING && nodDer.type == type_1.Type.STRING) {
                resultado = {
                    value: (nodIzq.value == nodDer.value),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.BOOLEAN && nodDer.type == type_1.Type.BOOLEAN) {
                resultado = {
                    value: (nodIzq.value == nodDer.value),
                    type: type_1.Type.BOOLEAN
                };
            }
        }
        else if (this.tipo == RelacionalOpc_1.OpcionRelacional.NOIGUAL) {
            if (nodIzq.type == type_1.Type.INT && nodDer.type == type_1.Type.INT) {
                resultado = {
                    value: (nodIzq.value != nodDer.value),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.INT && nodDer.type == type_1.Type.DOUBLE) {
                resultado = {
                    value: (nodIzq.value != nodDer.value),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.INT && nodDer.type == type_1.Type.CHAR) {
                resultado = {
                    value: (nodIzq.value != nodDer.value.charCodeAt()),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.DOUBLE && nodDer.type == type_1.Type.INT) {
                resultado = {
                    value: (nodIzq.value != nodDer.value),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.DOUBLE && nodDer.type == type_1.Type.DOUBLE) {
                resultado = {
                    value: (nodIzq.value != nodDer.value),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.DOUBLE && nodDer.type == type_1.Type.CHAR) {
                resultado = {
                    value: (nodIzq.value != nodDer.value.charCodeAt()),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.CHAR && nodDer.type == type_1.Type.INT) {
                resultado = {
                    value: (nodIzq.value.charCodeAt() != nodDer.value),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.CHAR && nodDer.type == type_1.Type.DOUBLE) {
                resultado = {
                    value: (nodIzq.value.charCodeAt() != nodDer.value),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.CHAR && nodDer.type == type_1.Type.CHAR) {
                resultado = {
                    value: (nodIzq.value.charCodeAt() != nodDer.value.charCodeAt()),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.STRING && nodDer.type == type_1.Type.STRING) {
                resultado = {
                    value: (nodIzq.value != nodDer.value),
                    type: type_1.Type.BOOLEAN
                };
            }
            else if (nodIzq.type == type_1.Type.BOOLEAN && nodDer.type == type_1.Type.BOOLEAN) {
                resultado = {
                    value: (nodIzq.value != nodDer.value),
                    type: type_1.Type.BOOLEAN
                };
            }
        }
        return resultado;
    };
    Relacional.prototype.ast = function () {
        var nombreNodo = "node_".concat(this.line, "_").concat(this.column, "_");
        return "\n        ".concat(nombreNodo, ";\n        ").concat(nombreNodo, "[label=\"").concat((0, RelacionalOpc_1.getSimbolo)(this.tipo), "\"];\n        ").concat(nombreNodo, "->").concat(this.izquierda.ast(), "\n        ").concat(nombreNodo, "->").concat(this.derecha.ast(), "\n        ");
    };
    return Relacional;
}(expression_1.Expression));
exports.Relacional = Relacional;
