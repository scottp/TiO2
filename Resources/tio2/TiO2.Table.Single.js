TiO2.Table.Single = TiO2.Table.Base.extend({

	// ======================================================================
	createRow: function(data) {
		var row = Ti.UI.createTableViewRow({ height: this.rowHeight });
		// XXX Support other field matching
		//	e.g. abillity to set things like the record data (for click/callback) and child nodes
		row.title = data[this.columns[0].key];
		return row;
	},

	// ======================================================================
	// createHeader - a view is expected on return, even if empty
	createHeader: function() {
		var headerView = Ti.UI.createView({
			height: 1
		});
		return headerView;
	}

});

