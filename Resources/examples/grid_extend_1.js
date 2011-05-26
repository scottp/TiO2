var win = Ti.UI.currentWindow;

Ti.include('../tio2/TiO2.ALL.js');
TiO2Load('../tio2/');

var data = [];
for (var i = 0; i < 50; i++) {
	data.push({
		id: i * 10 + 1, first: 'Scott', last: 'Penrose', email: 'scottp@dd.com.au',
	});
	data.push({
		id: i * 10 + 2, first: 'John', last: 'Smith'
	});
	data.push({
		id: i * 10 + 3, first: 'Bill', last: 'McKay'
	});
	data.push({
		id: i * 10 + 4, first: 'Fred', last: 'Smith'
	});
}

var grid = new TiO2.Table.GridDemo1({
	columns: [
		{key: 'id', label: 'ID', width: 50, },
		{key: 'first', label: 'First', width: 200, },
		{key: 'last', label: 'Last', width: 200, },
		{key: 'email', label: 'Email address', width: 250, },
	],
	data: data,
});

win.add(grid.view);
