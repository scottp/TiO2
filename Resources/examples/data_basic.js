var win = Ti.UI.currentWindow;

Ti.include('../tio2/TiO2.ALL.js');
TiO2Load('../tio2/');

// XXX move to separate file for reuse
var data = [];
for (var i = 0; i < 3; i++) {
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
		id: i * 10 + 5, first: 'Fred', last: 'Smith'
	});
	data.push({
		id: i * 10 + 6, first: 'George', last: 'Noodle'
	});
	data.push({
		id: i * 10 + 7, first: 'Wilma', last: 'Banks'
	});
	data.push({
		id: i * 10 + 8, first: 'Nanna', last: 'Thatcher'
	});
	data.push({
		id: i * 10 + 9, first: 'Pappa', last: 'Marvel'
	});
}
var dataobject = new TiO2.Data.Array({
	data: data,
});

// Ti.API.info(dataobject.getAll());

// sort by filter
var grid = new TiO2.Table.Grid({
	// XXX remove from example
	columns: [
		{key: 'id', label: 'ID', width: 50, },
		{key: 'first', label: 'First', width: 180, },
		{key: 'last', label: 'Last', width: 180, },
		{key: 'email', label: 'Email address', width: 250, },
		{label: 'Calc', width: 50, 
			callback: function(data) {
				return data.first.length;
			}	
		},
	],
	data: dataobject,
	options: {
		top: 0,
		height: 350,
	},
});
win.add(grid.view);

var btn = Ti.UI.createButton({
	title: 'Filter on Scott',
	top: 400,
	height: 50,
});
btn.addEventListener('click', function() {
	dataobject.filter({ first: 'Scott' });
});;

win.add(btn);

/* XXX  PROPER EXAMPLE...

	* Add data to grid
	* Add some buttons:
		- filter
		- sort

And watch the grid update automatically 

*/
