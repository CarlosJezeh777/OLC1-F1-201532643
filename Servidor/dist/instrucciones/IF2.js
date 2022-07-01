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
exports.If_Else_If = void 0;
var instruccion_1 = require("../abstract/instruccion");
var Singleton_1 = require("../Singleton/Singleton");
var UtilesArrays_1 = require("../Singleton/UtilesArrays");
var enviroment_1 = require("../Symbols/enviroment");
var type_1 = require("../Symbols/type");
var If_Else_If = /** @class */ (function (_super) {
    __extends(If_Else_If, _super);
    function If_Else_If(expresion, instruccion, else_if, line, colum) {
        var _this = _super.call(this, line, colum) || this;
        _this.expresion = expresion;
        _this.instruccion = instruccion;
        _this.else_if = else_if;
        return _this;
    }
    If_Else_If.prototype.ejecutar = function (env) {
        var new_env = new enviroment_1.Enviroment(env);
        var expresion = this.expresion.ejecutar(env);
        //console.log(expresion);
        if (expresion.value == true) {
            //console.log("aqui van las instrucicones");
            this.instruccion.ejecutar(new_env);
        }
        else if (expresion.value == false) {
            //console.log("si entro en el false");
            for (var _i = 0, _a = this.else_if; _i < _a.length; _i++) {
                var elemento = _a[_i];
                elemento.ejecutar(env);
            }
            var util = UtilesArrays_1.utilesArrays.getInstance();
            var elementos = util.getElseIF();
            //console.log(elementos);
            for (var _b = 0, elementos_1 = elementos; _b < elementos_1.length; _b++) {
                var element = elementos_1[_b];
                var expre2 = element.expresion.ejecutar(env);
                if (expre2.type != type_1.Type.BOOLEAN) {
                    throw new Error("Error semantico");
                }
                if (expre2.value == true) {
                    element.instrucccion.ejecutar(new_env);
                    break;
                }
            }
            util.deleteElses();
        }
        //console.log(expresion);
    };
    If_Else_If.prototype.ast = function () {
        var s = Singleton_1.Singleton.getInstance();
        var name_node = "node_".concat(this.line, "_").concat(this.colum, "_");
        s.addAst("\n        ".concat(name_node, "[label=\"if else\"];\n        ").concat(name_node, "->").concat(this.expresion.ast(), "\n        ").concat(name_node, "->").concat(this.instruccion.ast(), ";        \n        "));
    };
    return If_Else_If;
}(instruccion_1.Instruccion));
exports.If_Else_If = If_Else_If;
