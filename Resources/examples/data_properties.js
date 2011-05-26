var win = Ti.UI.currentWindow;

Ti.include('../tio2/TiO2.ALL.js');
TiO2Load('../tio2/');

// Set some properties just in case...
Titanium.App.Properties.setString('Test A', 'This is the first test');
Titanium.App.Properties.setString('Test B', 'This is another test');


var dataobject = new TiO2.Data.Properties();

var grid = new TiO2.Table.Grid({
	columns: [
		{key: 'key', label: 'Key', width: 250, },
		{key: 'value', label: 'Value', width: 180, },
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
