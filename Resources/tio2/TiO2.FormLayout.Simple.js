// =============================================================================
// Simple layout
TiO2.FormLayout.Simple = TiO2.FormLayout.Base.extend({

	init: function(data) {

		// XXX What about deep copies? XXX document these !
		this.data = TiO2.Util.defaults(data, {
			defaultHeight: 35,	// How big for standard (e.g. Text field)
			defaultSep: 5,		// Space between?
			labelWidth: 150,
			fieldWidth: 400,
			items: [],
			buttons: [],
			labelLeft: 10,
			labelSep: 5,
			borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		});

		this.view = Ti.UI.createView(TiO2.Util.defaults(data.viewOptions, {
			borderRadius: 12, 
			height: 'auto', 
			width: 'auto', 
			top: 10 
		}));

		var count = 0;

		// Add the fields (With labels)
		for(var n in this.data.items) {
			if (this.data.items[n]) {
				count++;

				// We always need a unique name, add one if none provided
				entry = TiO2.Util.defaults(this.data.items[n], {
					name: 'automatic_' + count,
					label: 'Label not defined for ' + count,
					type: 'Text',
					value: '',
					hintText: 'Click to enter value',
				});

				// XXX mess between entry vs option - entry is a row in the form, but options
				// is passed directly into the low level field (e.g. Text field)
				// But it is becoming confusing

				// Add the label
				label = Titanium.UI.createLabel(TiO2.Util.defaults(entry.labelOptions, {
					color:'#000',
					text: entry.label,
					textAlign:'right',
					top: this.lastTop,
					height: this.data.defaultHeight,
					left: 10,
					// backgroundColor: '#f00',
					width: this.data.labelWidth,
				}));
				this.view.add(label);

				if (TiO2.Field[entry.type]) {
					var component = new TiO2.Field[entry.type](entry, TiO2.Util.defaults(entry.options, {
						top: this.lastTop,
						left: this.data.labelLeft + this.data.labelWidth + this.data.labelSep,
						height: this.data.defaultHeight,
						width: this.data.fieldWidth,
						hintText: entry.hintText,
						value: entry.value,
						borderStyle: this.data.borderStyle,
					}));
					if (component.view) {
						this.fields[entry.name] = {
							component: field,
							label: label
						};
						this.view.add(component.view);
					}
				}
				else {
					// XXX errors
					Ti.API.info('ERROR: Invalid field type in FormLayout - ' + entry.type);
				}

				// XXX not exists?Ti.API.info('Invalid event type for ' + entry.name + ':' + entry.type);

				// Increase the height
				// XXX custom heights !
				this.lastTop += this.data.defaultHeight + this.data.defaultSep;
			}
		}

		this.addButtons();
	},

});

