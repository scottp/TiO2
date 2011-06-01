// ----------------------------------------------------------------------
TiO2.Field.ClickPicker = TiO2.Field.Base.extend({
	list: undefined,
	value: undefined,
	init: function(attr, options) {
		this._super(attr, options);
		// XXX move the left, width etc before these are called !
		this.ui = Titanium.UI.createButton(TiO2.Util.defaults(options));
		this.addHandlers();
		this.view = this.ui;

		var that = this;

		var saved = undefined;
		this.ui.addEventListener('click', function() {
			Ti.API.info('TYPE = ' + that.pickerType);
			var picker = Titanium.UI.createPicker(TiO2.Util.defaults(options, {
				top:43
			}));
			picker.selectionIndicator=true;
			if (that.list) {
				picker.add( that.buildPickerList(that.list), that.getValue() );
			}

			var wt = new TiO2.Helper.Popup({
				ui: picker,
				onDone: function(f, w) {
					that.setValue(f.getSelectedRow(0).title);
				}
			});
			wt.open();
		});

	},

	getValue: function() {
		return this.value;
	},
	
	setValue: function(v) {
		this.value = v;
		this.ui.title = v;
	}

});

