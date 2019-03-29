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
    exports.__esModule = true;
    function isActually(isNotActually) {
        return !Boolean(isNotActually == undefined || isNotActually == '' || isNotActually == null);
    }
    exports.isActually = isActually;
    function justWork() {
        var likeMagic = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            likeMagic[_i] = arguments[_i];
        }
        var nowGood, actually;
        if (!likeMagic.length)
            return;
        likeMagic.forEach(function (thing) {
            nowGood = typeof thing === 'function' ? thing : nowGood;
            actually = isFinite(thing) ? thing : actually > 0 ? actually : 0;
        });
        if (!nowGood)
            nowGood = function () { return console.log('not good hombre'); };
        return setTimeout(nowGood, actually);
    }
    exports.justWork = justWork;
});
