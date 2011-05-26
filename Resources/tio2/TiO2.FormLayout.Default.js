// =============================================================================
// TYPE = Default - the best way to do iPhone layout
TiO2.FormLayout.Default = TiO2.FormLayout.Base.extend({
	init: function(data) {

		// XXX What about deep copies? XXX document these !
		this.data = TiO2.Util.defaults(data, {
			defaultHeight: 35,	// How big for standard (e.g. Text field)
			defaultSep: 5,		// Space between?
			labelWidth: 140,
			fieldWidth: 490,
			items: [],
			buttons: [],
			labelLeft: 10,
			labelSep: 5,
			// borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		});

		this.view = Ti.UI.createView(TiO2.Util.defaults(data.viewOptions, {
			borderRadius: 12, 
			height: 'auto', 
			width: '100%', 
			// top: 1,
			// left: 1,
			layout: 'vertical',
			backgroundColor:'transparent',
			rowBackgroundColor:'white',
		}));

		var count = 0;

		// Add the fields (With labels)
		var section = undefined;
		var rows = [];
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
				this.fields[entry.name] = {};

				if (entry.type == 'Label') {
					section = Titanium.UI.createTableViewSection();
					section.headerTitle = entry.label;
					// this.view.add(section);
					rows.push(section);
				}
				else {
					// This allows a section with no header
					if (section == undefined) {
						section = Titanium.UI.createTableViewSection();
						// this.view.appendRow(section);
						rows.push(section);
					}

					if (TiO2.Field[entry.type]) {
						var component = new TiO2.Field[entry.type](entry, TiO2.Util.defaults(entry.options, {
							top: 1,
							left: 1,
							hintText: entry.hintText,
							value: entry.value,
							// height: form.data.defaultHeight,
							top: this.lastTop,
							left: this.data.labelLeft + this.data.labelWidth + this.data.labelSep,
							width: this.data.fieldWidth,
							borderStyle: this.data.borderStyle,
							color: '#333399',
						}));
						this.fields[entry.name].component = component;

						var row = Titanium.UI.createTableViewRow({title: entry.label, height:46});
// XXX This still don't work
						row.addEventListener('click', function() {
							Ti.API.info('FIRED click');
							component.ui.focus();
							Ti.API.info('After focus');
						});
						row.add(component.view);
				
						section.add(row);
					}
					else {
						// Standard errors?
						Ti.API.info('ERROR: Invalid field type in FormLayout - ' + entry.type);
					}

				}
			}
		}

		// The main view
		var table = Titanium.UI.createTableView({
			top: 1,
			left: 1,
			height: 630,		// XXX height not working !
			width: '100%',
			style: Titanium.UI.iPhone.TableViewStyle.GROUPED,
			backgroundColor:'transparent',
			rowBackgroundColor:'white',
			data: rows,
		});
		this.view.add(table);

		this.addButtons();
	},

});

