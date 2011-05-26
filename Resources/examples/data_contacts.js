var win = Ti.UI.currentWindow;

Ti.include('../tio2/TiO2.ALL.js');
TiO2Load('../tio2/');

// This example just maps contacts to an array

var dataobject = new TiO2.Data.Array({
	// MAGIC - Here we just wrap up the contacts
	//	FUTURE: By having a TiO2.Data.Contacts we can do more advanced control
	//	including automatic columns
	data: Titanium.Contacts.getAllContacts()
});
Ti.API.info(dataobject.data);

var grid = new TiO2.Table.Grid({
	columns: [
		{key: 'firstName', label: 'First name', width: 150, },
		{key: 'lastName', label: 'Last name', width: 150, },
		{key: 'email', label: 'Email', width: 150, },
		{key: 'phone', label: 'Phone', width: 50, },
	],
	data: dataobject,
	options: {
		top: 0,
		height: 550,
	},
});
win.add(grid.view);

var btn = Ti.UI.createButton({
	title: 'Filter on Penrose',
	top: 560,
	height: 50,
});
btn.addEventListener('click', function() {
	dataobject.filter({ lastName: 'Penrose' });
});;

win.add(btn);
