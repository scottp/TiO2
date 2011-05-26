// ----------------------------------------------------------------------
TiO2.Field.Switch = TiO2.Field.Base.extend({
	onValue: true,
	offValue: false,
	init: function(attr, options) {
		this._super(attr, options);
		this.ui = Titanium.UI.createSwitch({
			value: attr.value == this.onValue,
		});
		this.view = this.ui;
		// value !
		Ti.API.info(this.onValue);
	},
	getValue: function() {
		return this.ui.value ? this.onValue : this.offValue;
	},
	// setValue for onValue and offValue
});

