TiO2.Data.DBTable = TiO2.Data.Base.extend({
	table: undefined,
	db: undefined,
	fields: [],
	init: function(attr) {
		this._super(attr);
		this.getDB();
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
		var ret = [];
		var sql = 'SELECT * FROM ' + this.table;
		//if (this.filterLocal) {
			// XXX add WHERE clause
		//}
		if (this.sortLocal) {
			sql = sql + ' ORDER BY ' + this.sortLocal[0];
		}
		Ti.API.info("SQL = " + sql);
		var rows = this.db.execute(sql);
		while (rows.isValidRow()) {
			ret.push({
				first: rows.fieldByName('first'),
				last: rows.fieldByName('last'),
				email: rows.fieldByName('email')
			});
			rows.next();
		}
		rows.close();
		return ret;
	}

});
