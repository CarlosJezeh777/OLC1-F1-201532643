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
var Errores_1 = require("../Singleton/Errores");
var Singleton_1 = require("../Singleton/Singleton");
var enviroment_1 = require("../Symbols/enviroment");
var s = Singleton_1.Singleton.getInstance();
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
        var valores = [];
        for (var _i = 0, _a = metodo === null || metodo === void 0 ? void 0 : metodo.parametros; _i < _a.length; _i++) {
            var dec = _a[_i];
            nombres.push(dec.nombre);
        }
        for (var _b = 0, _c = this.parametros; _b < _c.length; _b++) {
            var elemento = _c[_b];
            var elem = elemento.ejecutar(env_parametros);
            valores.push(elem);
        }
        for (var i = 0; i < nombres.length; i++) {
            env_parametros.guardar_varible(nombres[i], valores[i].value, valores[i].type, true);
        }
        if (metodo == null) {
            s.addErrores(new Errores_1.Errores("no se encontro la funcion", "semantico", this.line, this.colum));
            throw "Error semantico, no ecnontre esta funcion";
        }
        metodo.instrucciones.ejecutar(env_instrucciones);
    };
    LlamadaP.prototype.ast = function () {
        var name_node = "node_".concat(this.line, "_").concat(this.colum, "_");
        s.addAst("\n        ".concat(name_node, "[label=\"Call\"];\n        ").concat(name_node, "1[label=\"").concat(this.id, "\"];\n        ").concat(name_node, "->").concat(name_node, "1;\n        "));
    };
    return LlamadaP;
}(instruccion_1.Instruccion));
exports.LlamadaP = LlamadaP;
