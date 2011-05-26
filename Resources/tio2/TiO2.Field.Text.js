// ----------------------------------------------------------------------
TiO2.Field.Text = TiO2.Field.Base.extend({
	init: function(attr, options) {
		this._super(attr, options);
		this.ui = Titanium.UI.createTextField(TiO2.Util.defaults(options, {
			hintText: 'Enter text',
			value: '',
		}));
		this.view = this.ui;
		this.addHandlers();

		//if (this.validateInput) {
		//};

	},

	isValid: function() {
		// XXX bogus test
		return (this.getValue() != 'Scott');
	},

/*
	addValidate: function() {
		// Validation handlers can be:
		//	- Translate user input
		//	- Limit keys pressed (TODO paste issues)
		//	- Validate on blur
	},
*/
});

// TODO:
//	radio - radio buttons (max num 3?)
//	checkbox ?

