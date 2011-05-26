TiO2.Table.Base = TiO2.Base.extend({
	view: undefined,
	table: undefined,
	data: undefined,
	columns: undefined,
	separatorColor: '#333333',
	padding: 5,
	headerHeight: 50,
	rowHeight: 25,
	limit: 1000,

	// ======================================================================
	init: function(attr) {
		this._super(attr);
		this.buildData();
		this.buildColumns();
		this.table = this.createTable();
		// XXX here so we can add a view that has fixed headers etc
		//	i.e. createView here, that has View for header, then Table
		// How to move this out of here for better inheritance
		this.view = this.table;
	},


	// ======================================================================
	buildData: function() {
		if (this.data && this.data.length) {
			// Turn data back into a data object ?
			this.data = new TiO2.Data.Array({
				data: this.data
			});
		}
		// XXX how do we know it is an object?
		/*
		else if ( this.data instanceof TiO2.Data.Base ) {
			// XXX move down
		}
		*/
		else {
			// XXX how to throw an error here
		}

		// If change, add the rows again
		var that = this;
		this.data.addCustomEventListener('change', function(attr) {
			// Replaces existing rows
			that.table.setData(that.createRows());
		});
	},

	// ======================================================================
	buildColumns: function() {
		if (this.columns.length == 0) {
			// Populate columns with a guess based on the first row
		}
	},

	// ======================================================================
	createTable: function() {
		// Create the table
		return Ti.UI.createTableView(TiO2.Util.defaults(this.options, {
			separatorColor: this.separatorColor,
			headerView: this.createHeader(),
			data: this.createRows(),
		}));
	},

	// ======================================================================
	createRows: function() {
		// XXX clear all rows
		//	this.clearRows();
		// Generate rows
		var rows = [];
		// XXX limit and Data access
		var tempData = this.data.getAll();
		for(var i = 0; i < tempData.length; i++) {
			// XXX
			rows.push(this.createRow(tempData[i]));
		}
		return rows;
	},

	// ======================================================================
	createRow: function(data) {
		var row = Ti.UI.createTableViewRow({ height: this.rowHeight });
		var left = 0;
		for (var r = 0; r < this.columns.length; r++) {
			left = this.createCell(
				row,
				left,
				this.columns[r].width,
				this.getCellData(this.columns[r], data)
			);
		}
		return row;
	},

	// How to get data from a column
	getCellData: function(column, data) {
		if (column.callback) {
			return column.callback(data);
		}
		return data[column.key];
	},

	// ======================================================================
	// createHeader - a view is expected on return, even if empty
	createHeader: function() {
		// XXX add a header
		var headerView = Ti.UI.createView({
			height: this.headerHeight,
			borderWidth: 1,
			borderColor: this.separatorColor,
		});
		var leftHeader = 0;
		var that = this;
		for (var r = 0; r < this.columns.length; r++) {
			var key = this.columns[r].key;
			leftHeader = this.createCell(
				headerView, 
				leftHeader, 
				this.columns[r].width,
				this.columns[r].label,
				{
					shadowColor:'#aaa',
					shadowOffset:{x:2,y:2},
				},
				function(content) {
					// Add 'sort' on click column heading
					if (key) {
						var local = key;
						content.addEventListener('click', function() {
							that.data.sort(local);
						});
					}
				}
			);
		}
		return headerView;
	},

});
