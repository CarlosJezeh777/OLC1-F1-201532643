"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Symbol_Vector = exports.Symbolos = void 0;
var Symbolos = /** @class */ (function () {
    function Symbolos(value, id, type, editable) {
        this.value = value;
        this.id = id;
        this.type = type;
        this.editable = editable;
    }
    return Symbolos;
}());
exports.Symbolos = Symbolos;
var Symbol_Vector = /** @class */ (function () {
    function Symbol_Vector(value, id, type, index, dimension) {
        this.value = value;
        this.id = id;
        this.type = type;
        this.index = index;
        this.dimension = dimension;
    }
    return Symbol_Vector;
}());
exports.Symbol_Vector = Symbol_Vector;
