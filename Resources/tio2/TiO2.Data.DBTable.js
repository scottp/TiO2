TiO2.Data.DBTable = TiO2.Data.Base.extend({
	table: undefined,
	db: undefined,
	fields: [],

	// Update the fields
	init: function(attr) {
		this._super(attr);
		this.getDB();
		this.setFields();
	},

	setFields: function() {
		// Get the fields from the database if not provided
		if (this.fields.length) {
			// XXX get from the database
		}
	},

	getDB: function() {
		// Support DB objects or a string to the DB
		if (typeof(this.db) == 'string') {
			this.db = Titanium.Database.open(this.db);
		}
	},

	getByName: function(key, val) {
		// Return a record matching key=val (e.g. id=3)
		// XXX SELECT fields FROM table WHERE key=val
		return undefined;
	},

	// Get all rows
	getAll: function() {
		// SQL Query = 
		//	SELECT this.fields[] FROM this.table WHERE this.localFilter ORDER BY this.sortFields
		var ret = [];
		return ret;
	},

	// Number of records

	// Add a row (always to the end for now)
	addRow: function(d) {
		// XXX Insert a new row in the DB
	},

	// Sort the data
	sortFields: [],
	sort: function(fields) {
		if (typeof(fields) == 'string') { fields = [ fields ]; }
		// TODO: Check they exist in fileds
		this.sortFields = fields;
	},

	filterLocal: {},
	filter: function(d) {
		// Filter d is object - key = value in each record
		this.filterLocal = d;
	},

});
