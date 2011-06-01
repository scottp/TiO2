// ----------------------------------------------------------------------
// Combo box...
//	TODO: Jump to closest match
TiO2.Field.Combo = TiO2.Field.Text.extend({
	list: undefined,
	init: function(attr, options) {
		var that = this;

		// Ideas taken from - http://cssgallery.info/making-a-combo-box-in-titanium-appcelerator-code-and-video/
		var tr = Titanium.UI.create2DMatrix();
		tr = tr.rotate(90);
		var drop_button =  Titanium.UI.createButton({
				style:Titanium.UI.iPhone.SystemButton.DISCLOSURE,
				transform:tr
		});

		// Add the button et al
		this._super(attr, TiO2.Util.defaults(options, {
			rightButton:drop_button,
			rightButtonMode:Titanium.UI.INPUT_BUTTONMODE_ALWAYS
		}));

		drop_button.addEventListener('click', function() {
			that.ui.blur();

			var picker = Titanium.UI.createPicker({
				top:43
			});
			picker.selectionIndicator=true;
			picker.add( that.buildPickerList(that.list), that.getValue() );

			var wt = new TiO2.Helper.Popup({
				ui: picker,
				onDone: function(f, w) {
					that.setValue(f.getSelectedRow(0).title);
				}
			});
			wt.open();
		});

	}

});

