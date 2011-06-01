// ----------------------------------------------------------------------
TiO2.Field.Password = TiO2.Field.Text.extend({
	init: function(attr, options) {
		this._super(attr, TiO2.Util.defaults(options, {
			passwordMask: true,
			autocorrect: false
		}));

		if (this.retype) {
			var that = this;
			// XXX must be ABOVE data entry
			this.ui.addEventListener('blur', function(e) {
				// XXX validation first (note this could be outside of a 'retype')

				// XXX need ENTER to be same as DONE
				var field = Titanium.UI.createTextField({
					passwordMask: true,
					autocorrect: false,
					width: 250,
					height: 55,
					top: 43,
					borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
					value: '',
					hintText: 'Enter password again'
				});
				var wt = new TiO2.Helper.Popup({
					keyboard: true,	// Space for the keyboard
					mask: true,
					ui: field,
					onCancel: function(f, w) {
						alert("Clearing password...");
						that.setValue("");
						that.ui.focus();
					},
					onDone: function(f, w) {
						// Reset et al.
						if (f.value == that.ui.value) {
							alert("Password matches. Horrah");
							// XXX what had focus - put it back !
						}
						else {
							alert("Sorry, passwords do not match.");
							that.ui.value = "";
							that.ui.focus();
						}
					}
				});
				wt.open();
			});
		}

		this.view = this.ui;
	}
});

