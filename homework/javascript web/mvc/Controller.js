(function($, exports){
  var mod = {};

  mod.create = function(includes){
    var result = function(){
      this.init.apply(this, arguments);
    }

    result.fn = result.prototype;
    result.fn.init= function(){};

    result.proxy = function(func){ 
      return $.proxy(func, this); 
    };
    result.fn.proxy = result.proxy;

    result.include = function(ob){ $.extend(this.fn, ob); };
    result.extend = function(ob){ $.extend(this, ob); };

    if (includes) result.include(includes);

    return result;

  }

  exports.Controller = mod;

})(jQuery, this);