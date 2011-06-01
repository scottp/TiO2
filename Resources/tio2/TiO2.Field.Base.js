// ==============================================================================
// Available field types - extensible (just add to the object)
//	NOTE: Must return [ field, view ]
//	We could make it always field, and create class for special fields

/* Issues, Problems, Todo

	We can make complicated fields and have them just simply return 
	the actual field. Then if we need more complicated views etc
	we implemnt our own field bits...

	Or we could return a class, with some accessors such as:
		field - get the internal field
		view - the object you can add to a view or window

 */

// ----------------------------------------------------------------------
TiO2.Field.Base = TiO2.Base.extend({
	ui: undefined,
	view: undefined,
	label: '',
	options: {},
	height: 25,		// Standard height of a form field?
	setValue: function(val) {
		if (this.ui) {
			this.ui.value = val;
		}
	},
	getValue: function() {
		if (this.ui) {
			return this.ui.value;
		}
	},
	isValid: function() {
		/* Possible validations ?

			- length minimum
			- length maximum
			- regular expression match
			- callback
		 */

		// lengthMin
		if (this.lengthMin && (this.getValue().length < this.lengthMin)) {
			this.invalidReason = 'too short';
			return false;
		}

		// length<ax
		if (this.lengthMax && (this.getValue().length > this.lengthMax)) {
			this.invalidReason = 'too long';
			return false;
		}

		// Regex ?

		this.invalidReason = '';
		return true;
	},

	// Expanding a list from an array or callback... (maybe move to Util)
	getList: function(list) {
		if (list == undefined) { list = this.list; }
		if (typeof(list) == 'function') {
			list = list();
		}
		// Check array if (typeof(list) != '
		if (list == undefined) {
			return [];
		}
		return list;
	},

	// XXX Get rid of this... really !
	buildPickerList: function(list, current) {
		list = this.getList(list);
		if (typeof(current) == 'function') {
			current = current();
		}
		var ret = [];
		var count = 0;
		for (var k in list) {
			if (list[k]) {
				var entry = list[k];
				ret.push(
					{
						// XXX see AusRasp code for objects vs array etc
						value: count,
						title: entry,
						// XXX Painful way of doing selected - consider programmatic set instead
						selected: entry == current ? true : false
					}
				);
				count++;
			}
		}
		return ret;
	},

	// Set the picker
	setPicker: function(picker, list, value) {
		Ti.API.info('setPicker');
		list = this.getList(list);
		var count = 0;
		for (var k in list) {
			Ti.API.info('list entry');
			if (list[k]) {
				Ti.API.info('Trying ' + value + ' against ' + list[k]);
				if (list[k] == value) {
					Ti.API.info('Matched ' + value + ' at ' + count);
					// picker.setSelectedRow(0, count, true);
				}
				contt++;
			}
		}
	}

});

