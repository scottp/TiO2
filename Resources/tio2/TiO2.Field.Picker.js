// ----------------------------------------------------------------------
TiO2.Field.Picker = TiO2.Field.Base.extend({
	list: undefined,
	init: function(attr, options) {
		this._super(attr, options);
		this.view = Ti.UI.createView({
			// Consider using defaults?
			height: 150,
		});
		this.ui = Titanium.UI.createPicker(TiO2.Util.defaults(options, {
			height:150,
			top:1,
			left:1,
		}));

		this.addHandlers();
		this.ui.add(that.buildPickerList(this.list, this.value));
	
		this.view.add(this.ui);

		// Increased height
		this.height = 150;

		// XXX on change set this.value !
	}
});

