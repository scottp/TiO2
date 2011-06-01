TiO2.Data.Base = TiO2.Base.extend({
	fields: [],

	// Sort the data - default is to store sort fields for later use
	sortLocal: undefined,
	sort: function(fields) {
		if (typeof(fields) == 'string') { fields = [ fields ]; }
		this.sortLocal = fields;
		this.fireCustomEvent('change', { data: this, type: 'sort', fields: fields});
	},

	// Filter - effects all other get queries - default is to store filters for later use
	filterLocal: {},
	filter: function(d) {
		// Filter d is object - key = value in each record
		this.filterLocal = d;
		this.fireCustomEvent('change', { data: this, type: 'filter', sort: d});
	}

});
