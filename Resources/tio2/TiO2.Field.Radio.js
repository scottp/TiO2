// ----------------------------------------------------------------------
TiO2.Field.Radio = TiO2.Field.Base.extend({
	init: function(attr, options) {
		this._super(attr, options);
		this.ui = Titanium.UI.createTabbedBar(TiO2.Util.defaults(options, {
			labels: this.list,
			backgroundColor:'maroon',
			// Note that 'index' is the location in the label, not the value of the label
			// Therefore might want to do getIndex(this.value) to find
			index: this.value
		}));
		this.view = this.ui;
	},
	getValue: function() {
		Ti.API.info('BEFORE RETURN');
		Ti.API.info(this.ui.index);
		Ti.API.info(this.list[this.ui.index]);
		return this.list[this.ui.index];
	},
	setValue: function() {
		// XXX Find the index in the list to set
	}
});

