TiO2.Util = {

	// Make namespace object, if it does not exist
	namespace: function(entry) {
	},

	// ======================================================================
	// XXX - there should be a generic method for this, like Ext?
	// Build a default hash
	defaults: function(input, defaults, override) {
		// Make sure they are all aobject
		input = typeof(input) != 'undefined' ? input : {};
		defaults = typeof(defaults) != 'undefined' ? defaults : {};
		override = typeof(override) != 'undefined' ? override : {};

		// Write defaults to 'input' if they don't exist in input
		for(var k in defaults) {
			if (defaults[k]) {
				if (typeof(input[k]) == 'undefined') {
					input[k] = defaults[k];
				}
			}
		}

		// Overrides
		for(k in override) {
			if (override[k]) {
				input[k] = override[k];
			}
		}

		return input;
	},

	// XXX compare with defaults above and consider improvements
	copy: function(to, from, defaults){
		if (defaults) {
			TiO2.Util.copy(to, defaults);
		}
		if(to && from && typeof from == 'object'){
			for (var key in from) {
				// Deep copy? - consider a deep copy (call copy) on object
				to[key] = from[key];
			}
		}
		return to;
	}

};
