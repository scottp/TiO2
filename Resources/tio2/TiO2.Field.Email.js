// ----------------------------------------------------------------------
// Simple example of adding defaults to a Text field
TiO2.Field.Email = TiO2.Field.Text.extend({
	init: function(attr, options) {
		this._super(attr, TiO2.Util.defaults(options, {
			keyboardType: Titanium.UI.KEYBOARD_EMAIL
		}));
	}
});

