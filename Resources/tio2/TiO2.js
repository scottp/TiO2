TiO2 = {};

// Inspired by base2 and Prototype - from http://ejohn.org/blog/simple-javascript-inheritance/
//	XXX further references and license
(function(){
  var initializing = false, fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;
  // The base Class implementation (does nothing)
  this.TiO2Class = function(){};
  
  // Create a new Class that inherits from this class
  TiO2Class.extend = function(prop) {
    var _super = this.prototype;
    
    // Instantiate a base class (but only create the instance,
    // don't run the init constructor)
    initializing = true;
    var prototype = new this();
    initializing = false;
    
    // Copy the properties over onto the new prototype
    for (var name in prop) {
      // Check if we're overwriting an existing function
      prototype[name] = typeof prop[name] == "function" && 
        typeof _super[name] == "function" && fnTest.test(prop[name]) ?
        (function(name, fn){
          return function() {
            var tmp = this._super;
            
            // Add a new ._super() method that is the same method
            // but on the super-class
            this._super = _super[name];
            
            // The method only need to be bound temporarily, so we
            // remove it when we're done executing
            var ret = fn.apply(this, arguments);        
            this._super = tmp;
            
            return ret;
          };
        })(name, prop[name]) :
        prop[name];
    }
    
    // The dummy class constructor
    function TiO2Class() {
      // All construction is actually done in the init method
      if ( !initializing && this.init )
        this.init.apply(this, arguments);
    }
    
    // Populate our constructed prototype object
    TiO2Class.prototype = prototype;
    
    // Enforce the constructor to be what we expect
    TiO2Class.constructor = TiO2Class;

    // And make this class extendable
    TiO2Class.extend = arguments.callee;
    
    return TiO2Class;
  };
})();

// Load all objects
//	TODO: Consider loading components
TiO2.Load = function(path) {
	if (path == undefined) {
		path = 'tio2/';
	}

	// Base
	Ti.include(path + 'TiO2.Base.js');
	Ti.include(path + 'TiO2.Util.js');

	// Fields
	Ti.include(path + 'TiO2.Field.js');
	Ti.include(path + 'TiO2.Field.Base.js');
	Ti.include(path + 'TiO2.Field.Label.js');
	Ti.include(path + 'TiO2.Field.Text.js');
	Ti.include(path + 'TiO2.Field.ClickPicker.js');
	Ti.include(path + 'TiO2.Field.Combo.js');
	Ti.include(path + 'TiO2.Field.Email.js');
	Ti.include(path + 'TiO2.Field.Password.js');
	Ti.include(path + 'TiO2.Field.Picker.js');
	Ti.include(path + 'TiO2.Field.Slider.js');
	Ti.include(path + 'TiO2.Field.Switch.js');
	Ti.include(path + 'TiO2.Field.DateTime.js');
	Ti.include(path + 'TiO2.Field.Radio.js');

	// Data
	Ti.include(path + 'TiO2.Data.js');
	Ti.include(path + 'TiO2.Data.Base.js');
	Ti.include(path + 'TiO2.Data.Properties.js');
	Ti.include(path + 'TiO2.Data.Array.js');
	Ti.include(path + 'TiO2.Data.DBTable.js');

	// Form Layout
	Ti.include(path + 'TiO2.FormLayout.js');
	Ti.include(path + 'TiO2.FormLayout.Base.js');
	Ti.include(path + 'TiO2.FormLayout.Simple.js');
	Ti.include(path + 'TiO2.FormLayout.Default.js');

	// Tables
	Ti.include(path + 'TiO2.Table.js');
	Ti.include(path + 'TiO2.Table.Base.js');
	Ti.include(path + 'TiO2.Table.Single.js');
	Ti.include(path + 'TiO2.Table.Grid.js');
	Ti.include(path + 'TiO2.Table.GridDemo1.js');	// Consider moving demo to examples/
	Ti.include(path + 'TiO2.Table.GridDemo2.js');
	Ti.include(path + 'TiO2.Table.GridDemo3.js');

};

