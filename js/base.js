(function(S){
    var isUndefined,
        isNull,
        isBoolean,
        isNumber,
        isString,
        isArray,
        isObject,
        isFunction,
        isArguments,


        checkJSON,
        random,
        extend,
        clone,
        now,
        timedChunk,

        getLength,


        rebuild,
        pass,
        bind,
        bindNoEvent,

        Class;


        isUndefined = function(o) {
            return typeof(o) === "undefined";
        };

        isNull = function(o) {
            return o === null;
        };

        isBoolean = function(o) {
            return (o === false || o) && (o.constructor === Boolean);
        };

        isNumber = function(o) {
            return (o === 0 || o) && (o.constructor === Number);
        };

        isString = function(o) {
            return (o === "" || o) && (o.constructor === String);
        };

        isArray = function(o) {
            return (o && o.constructor === Array) || (Object.prototype.toString.call(o) === "[object Array]");
        };

        isObject = function(o) {
            return (o && o.constructor === Object) || (Object.prototype.toString.call(o) === "[object Object]");
        };

        isFunction = function(o) {
            return o && (o.constructor === Function);
        };

        isArguments = function(o) {
            return o && o.callee && isNumber(o.length) ? true: false;
        };

        checkJSON = function() {

        };

        random = function(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };

        clone = function(o) {

            var tempClass = function() {};
            tempClass.prototype = o;

            return (new tempClass());
        }

})();