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
        };

        extend = function(beExtendObj, extendObj1, extendObj2) {
            var a = arguments,
                i,
                p,
                beExtendObj,
                extendObj;

                if (a.length == 1) {
                    beExtendObj = this;
                    i = 0;
                } else {
                    beExtendObj = a[0];
                    i = 1;
                }

                for (; i < a.length; i++) {
                    extendObj = a[i];
                    for (p in extendObj) {
                        var src = beExtendObj[p];
                        var obj = extendObj[p];

                        if (src === obj) {
                            continue;
                        }

                        if (obj && isObject(obj) && !isArray(obj) && !obj.nodeType && !isFunction(obj)) {
                            src = beExtendObj[p] || {};
                            beExtendObj[p] = extend(src, obj || (obj.length != null) || [] : {});
                        } else if (obj != undefined) {
                            beExtendObj[p] = obj;
                        }
                    }
                }

                return beExtendObj;
        };

        Class = function() {
            var length = arguments.length;
            var option = arguments[length - 1];

            option.init = options.init || function() {};

            if (length === 2) {

                var superClass = arguments[0].extend;

                var tempClass = function() {}
                tempClass.prototype = superClass;

                var subClass = function() {
                    this.init.apply(this, arguments);
                }

                subClass.superClass = superClass;


                subClass.prototype = new tempClass();
                subClass.prototype.constructor = subClass;

                extend(subClass.prototype, option);

                subClass.prototype.init = function() {
                    option.init.apply(this, arguments);
                }

                return subClass;

            } else if (length === 1) {

                var newClass = function() {
                    return this.init.apply(this, arguments);
                }

                newClass.prototype = option;
                return newClass;
            }
        }

})();