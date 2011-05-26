var win = Ti.UI.currentWindow;
Ti.include('../tio2/TiO2.ALL.js');
TiO2Load('../tio2/');

/*
	EXAMPLE: Demonstrate getting a form from JSON
 */

// Show loading...

// Load remote JSON file (XXX local now!)
var f = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, 'examples', 'data_form_remote.json');
var contents = f.read();
Ti.API.info(contents.text);
var data = JSON.parse(contents.text);

var form = new TiO2.FormLayout.Default({
	// Override the default width?
	// fieldWidth: 500,
	items: data.items,
	buttons: [
		{
			name: 'submit',
			label: 'Save',
		},
		{
			name: 'cancel',
			label: 'Cancel',
		},
	],
});
form.view.top = 50;
form.view.left = 1;
win.add(form.view);

