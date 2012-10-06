(function(win){

	var Model = {

		inherited: function(){},
		created: function(){},

		prototype: {
			init:function(){}
		},

		create: function(){
			var object = Object.create(this);
			object.parent = this;
			object.prototype = object.fn = Object.create(this.prototype);

			object.created();
			this.inherited(object);
			return object;
		},

		init: function(){
			var instance = Object.create(this.prototype);
			instance.parent = this;
			instance.init.apply(instance, arguments);
			return instance;

		},

		extend: function(o){
			var extended = o.extended;
			for(var k in o) {
				this[k] = o[k];
			}
			if (extended) extended(this);
		},

		include: function(o){
			var included = o.included;
			for (var k in o.prototype) {
				this.prototype[k] = o.prototype[k];
			}
			if (included) included(this);
		}
	}

	var User = Model.create();


})(window)