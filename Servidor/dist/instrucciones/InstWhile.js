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
exports.IWhile = void 0;
var instruccion_1 = require("../abstract/instruccion");
var Singleton_1 = require("../Singleton/Singleton");
var enviroment_1 = require("../Symbols/enviroment");
var type_1 = require("../Symbols/type");
var IWhile = /** @class */ (function (_super) {
    __extends(IWhile, _super);
    function IWhile(condicion, instrucciones, line, colum) {
        var _this = _super.call(this, line, colum) || this;
        _this.condicion = condicion;
        _this.instrucciones = instrucciones;
        return _this;
    }
    IWhile.prototype.ejecutar = function (env) {
        var band = true;
        var new_env = new enviroment_1.Enviroment(env);
        while (band == true) {
            //console.log(index);
            var cond = this.condicion.ejecutar(env);
            //console.log(cond);
            if (cond.value == false) {
                break;
            }
            if (cond.type != type_1.Type.BOOLEAN) {
                throw new Error("la condicion tiene que ser un boolean");
            }
            this.instrucciones.ejecutar(env);
        }
    };
    //console.log(expresion);
    IWhile.prototype.ast = function () {
        var s = Singleton_1.Singleton.getInstance();
        var name_node = "node_".concat(this.line, "_").concat(this.colum, "_");
        s.addAst("\n        ".concat(name_node, "[label=\" while\"];\n        ").concat(name_node, "1[label=\"Condicion\"];\n        ").concat(name_node, "->").concat(name_node, "1;\n        ").concat(name_node, "1->").concat(this.condicion.ast(), "\n        ").concat(name_node, "->node_").concat(this.instrucciones.line, "_").concat(this.instrucciones.colum, "_;        \n        "));
        this.instrucciones.ast();
    };
    return IWhile;
}(instruccion_1.Instruccion));
exports.IWhile = IWhile;
