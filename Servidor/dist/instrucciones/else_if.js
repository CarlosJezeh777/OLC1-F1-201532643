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
exports.Else_If = void 0;
var instruccion_1 = require("../abstract/instruccion");
var Singleton_1 = require("../Singleton/Singleton");
var UtilesArrays_1 = require("../Singleton/UtilesArrays");
var s = Singleton_1.Singleton.getInstance();
var Else_If = /** @class */ (function (_super) {
    __extends(Else_If, _super);
    function Else_If(expresion, instrucccion, line, colum) {
        var _this = _super.call(this, line, colum) || this;
        _this.expresion = expresion;
        _this.instrucccion = instrucccion;
        return _this;
    }
    Else_If.prototype.ejecutar = function (env) {
        /*const new_env = new  Enviroment(env);
        const result = this.expresion.ejecutar(env);
        
        if(result.type != Type.BOOLEAN){
            throw new Error("la condidicion tiene que ser una expresion booleana");
            
        }

        if(result.value == true){
            this.instrucccion.ejecutar(new_env);
        }*/
        var util = UtilesArrays_1.utilesArrays.getInstance();
        util.addElseIf(this);
        //console.log(expresion);
    };
    Else_If.prototype.ast = function () {
        var name_node = "node_".concat(this.line, "_").concat(this.colum, "_");
        s.addAst("\n        ".concat(name_node, "[label=\"else if\"];\n        ").concat(name_node, "1->").concat(this.expresion.ast(), "\n        ").concat(name_node, "->node").concat(this.instrucccion.ast(), ";        \n        "));
    };
    return Else_If;
}(instruccion_1.Instruccion));
exports.Else_If = Else_If;
