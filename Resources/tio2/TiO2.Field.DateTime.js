// ----------------------------------------------------------------------
TiO2.Field.DateTime = TiO2.Field.Base.extend({
	list: undefined,
	init: function(attr, options) {
		this._super(attr, options);

		// date, time or both?
		var pickerType = Titanium.UI.PICKER_TYPE_DATE;
		if (attr.date && attr.time) {
			pickerType = Titanium.UI.PICKER_TYPE_DATE_AND_TIME;
		}
		else if (attr.time) {
			pickerType = Titanium.UI.PICKER_TYPE_TIME;
		}
			
		this.ui = Titanium.UI.createButton(TiO2.Util.defaults(options));
		this.addHandlers();
		this.view = this.ui;

		var that = this;
		var saved = undefined;
		this.ui.addEventListener('click', function() {
			var picker = Titanium.UI.createPicker(TiO2.Util.defaults(options, {
				top:43,
				type: pickerType,
				value: saved
			}));
			picker.selectionIndicator=true;
			var wt = new TiO2.Helper.Popup({
				ui: picker,
				onDone: function(f, w) {
					// XXX not returning value?
					Ti.API.info('New = ' + f.value);
					that.ui.title =  f.value;
					that.ui.value =  f.value;
					saved = f.value;
				}
			});
			wt.open();
		});

	}
});

