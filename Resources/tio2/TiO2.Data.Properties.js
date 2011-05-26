// XXX This can currently only do a string... what about Bool, Array, Int ?
TiO2.Data.Properties = TiO2.Data.Base.extend({

	// Update the fields
	init: function(attr) {
		this._super(attr);
	},

/* NOT YET WRITTEN 

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

	// Add a row (always to the end for now)
	// XXX addRow, removeRow, replaceRow ?
	addRow: function(d) {
		this.data.push(d);
	},

*/

	// Get all rows
	getAll: function() {
		var ret = [];
		var properties = Titanium.App.Properties.listProperties();
		for (var i=0; i < properties.length; i++) {
			/*
			TODO: Filtering
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
			*/

			// TODO: Bool Double Int List String - currently this doesn't really work
			var val = Titanium.App.Properties.getString(properties[i]),
			if (!val) {
				val = Titanium.App.Properties.getList(properties[i]),
			}
			ret.push({
				key: properties[i],
				value: val //Titanium.App.Properties.getString(properties[i]),
			});
		}

		if (this.sortLocal) {
			var that = this;
			ret.sort(function(a,b) {
				var nameA = a[that.sortLocal[0]]; //.toLowerCase();
				var nameB = b[that.sortLocal[0]]; //.toLowerCase();
				if (nameA < nameB) return -1 
				if (nameA > nameB) return 1
				return 0;
			});
		}
		return ret;
	},

});

