"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Expression = void 0;
var Expression = /** @class */ (function () {
    function Expression(line, column) {
        this.line = line;
        this.column = column;
        this.line = line;
        this.column = column + 1;
    }
    return Expression;
}());
exports.Expression = Expression;
