// Simple array of objects
TiO2.Data.Array = TiO2.Data.Base.extend({
	// The actual array
	data: [],

	// Update the fields
	init: function(attr) {
		this._super(attr);
		this.setFields();
	},

	// Replace 'data'
	setData: function(data) {
		this.data = data;
		this.setFields();
	},

	// Set the 'fields' fromt he first row
	setFields: function() {
		// Expect 'data' to be now filled
		this.fields = [];
		for (var k in this.data[0]) {
			if (this.data[0][k]) {
				this.fields.push(k);
			}
		}
	},

	getByName: function(key, val) {
		// Return a record matching key=val (e.g. id=3)
		for (var i=0; i < this.data.length; i++) {
			if (this.data[i][key] == val) {
				return this.data[i]
			}
		}
		return undefined;
	},

	// Get a row (by?)
	//get: function(n) {
	//},

	// Get all rows
	getAll: function() {
		// XXX check filter !
		var ret = [];
		for (var i=0; i < this.data.length; i++) {
			var count = 0;
			var match = 0;
			for (var k in this.filterLocal) {
				count++;
				if (
					this.filterLocal[k]
					&& (this.filterLocal[k] == this.data[i][k])
				) {
					match++;
				}
			}
			if (count == match) {
				ret.push(this.data[i]);
			}
		}
		return ret;
	},

	// Number of records

	// Add a row (always to the end for now)
	addRow: function(d) {
		this.data.push(d);
	},

	// Sort the data - Done on the real array !
	sort: function(fields) {
		if (typeof(fields) == 'string') { fields = [ fields ]; }

		// XXX notethat this only sorts on the first record for now
		this.data.sort(function(a,b) {
			var nameA = a[fields[0]]; //.toLowerCase();
			var nameB = b[fields[0]]; //.toLowerCase();
			if (nameA < nameB) return -1 
			if (nameA > nameB) return 1
			return 0;
		});

		this.fireCustomEvent('change', { data: this, type: 'sort', fields: fields});
	},

});

// ======================================================================
// DBQuery - Provide a set of DB advanced DB queries ???
// ======================================================================
// Callback - Some call backs ???
// ======================================================================
// XHRJson
//	Inherits Array and...
//		Do remote queries, returning JSON
//		Some things local: sort, getAll, getByName
//		Some things remote: getAll (on empty / filter change)

