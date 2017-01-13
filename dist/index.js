(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    function isActually(isNotActually) {
        return !Boolean(isNotActually == undefined || isNotActually == '' || isNotActually == null);
    }
    exports.isActually = isActually;
});
