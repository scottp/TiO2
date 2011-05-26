TiO2.FormLayout.Base = TiO2.Base.extend({
	data: {},
	view: undefined,
	fields: {},
	buttons: {},
	lastTop: 10,

	getValues: function() {
		var ret = {};
		for (var k in this.fields) {
			if (this.fields[k] && this.fields[k].component) {
				Ti.API.info('Running ' + k);
				ret[k] = this.fields[k].component.getValue();
			}
		}
		return ret;
	},

	// Pass in object of values to set
	setValues: function(data) {
		for (var k in data) {
			if (data[k] && this.fields[k] && this.fields[k].component) {
				this.fields[k].component.setValue(data[k]);
			}
		}
	},
	
	addButtons: function() {
		count = 0;
		for(var n in this.data.buttons) {
			if (this.data.buttons[n]) {
				count++;
				var entry = TiO2.Util.defaults(this.data.buttons[n], {
					name: 'automatic_' + count,
				});
				var btn = Titanium.UI.createButton(TiO2.Util.defaults(entry.options, {
					title: entry.label,
					height: this.data.defaultHeight,
					// top: this.lastTop + 100,		// XXX Hack to move button down
					left: this.data.labelLeft + this.data.labelWidth + this.data.labelSep,
				}));
				this.buttons[entry.name] = btn;
				// XXX TiO2.FormLayout.Util.addHandler(btn, entry, this);
				this.view.add(btn);
			}
		}
	},

	// inform true = to tell the user and set focus
	isValid: function(inform) {
		for(var key in this.fields) {
			if (this.fields[key]) {
				var f = this.fields[key].component;
				if (f && !f.isValid() ) {
					if (inform) {
						// XXX get the validation message and label
						alert("INVALID " + key + " is not valid");
						f.ui.focus();	// TODO: what if ui can't focus? (e.g. label)
					}
					return false;
				}
			}
		}
		return true;
	},
		

});

