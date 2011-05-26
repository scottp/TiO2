// DEMO - Manipulating the data before the grid (can extend any other grid)
//	try extending standard grid
TiO2.Table.GridDemo2 = TiO2.Table.GridDemo1.extend({
	createRow: function(data) {
		var newData = {};
		TiO2.Util.copy(newData, data);

		if (newData.email) {
			var re = new RegExp('@', "g");
			newData.email = newData.email.replace(re, ' at ');
		}
		return this._super(newData);
	}
});
