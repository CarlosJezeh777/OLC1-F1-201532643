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
exports.Acces = void 0;
var expression_1 = require("../abstract/expression");
var Acces = /** @class */ (function (_super) {
    __extends(Acces, _super);
    function Acces(id, line, column) {
        var _this = _super.call(this, line, column) || this;
        _this.id = id;
        return _this;
    }
    Acces.prototype.ejecutar = function (env) {
        var variable_ts = env.get_variable(this.id);
        if (variable_ts == null || variable_ts == undefined) {
            throw "Error Semantico, esta variable no existe";
        }
        return {
            value: variable_ts.value,
            type: variable_ts.type
        };
    };
    return Acces;
}(expression_1.Expression));
exports.Acces = Acces;
