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
exports.DoWhile = void 0;
var instruccion_1 = require("../abstract/instruccion");
var Errores_1 = require("../Singleton/Errores");
var Singleton_1 = require("../Singleton/Singleton");
var enviroment_1 = require("../Symbols/enviroment");
var type_1 = require("../Symbols/type");
var s = Singleton_1.Singleton.getInstance();
var DoWhile = /** @class */ (function (_super) {
    __extends(DoWhile, _super);
    function DoWhile(condicion, instrucciones, line, colum) {
        var _this = _super.call(this, line, colum) || this;
        _this.condicion = condicion;
        _this.instrucciones = instrucciones;
        return _this;
    }
    DoWhile.prototype.ejecutar = function (env) {
        var band = true;
        var new_env = new enviroment_1.Enviroment(env);
        this.instrucciones.ejecutar(new_env);
        while (band == true) {
            //console.log("no entra aqui dowhile");
            var cond = this.condicion.ejecutar(env);
            //console.log(cond);
            if (cond.value == false) {
                break;
            }
            if (cond.type != type_1.Type.BOOLEAN) {
                s.addErrores(new Errores_1.Errores("Do While: La condicion tiene que ser un boolean", "Semantico", this.line, this.colum));
                throw new Error("la condicion tiene que ser un boolean");
            }
            this.instrucciones.ejecutar(new_env);
        }
    };
    DoWhile.prototype.ast = function () {
        var name_node = "node_".concat(this.line, "_").concat(this.colum, "_");
        s.addAst("\n        ".concat(name_node, "[label=\"Do While\"];\n        ").concat(name_node, "1[label=\"Condicion\"];\n        ").concat(name_node, "->").concat(name_node, "1;\n        ").concat(name_node, "1->").concat(this.condicion.ast(), "\n        ").concat(name_node, "->node_").concat(this.instrucciones.line, "_").concat(this.instrucciones.colum, "_;        \n        "));
        this.instrucciones.ast();
    };
    return DoWhile;
}(instruccion_1.Instruccion));
exports.DoWhile = DoWhile;
