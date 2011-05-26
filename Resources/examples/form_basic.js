var win = Ti.UI.currentWindow;

Ti.include('../tio2/TiO2.ALL.js');
TiO2Load('../tio2/');

var form = new TiO2.FormLayout.Default({
	// Override the default width?
	// fieldWidth: 500,
	items: [
		{
			type: 'Label',
			label: 'Personal details'
		},
		{
			name: 'first',
			label: 'First name',
			events: {
				blur: function(b) { alert("You changed first name to: " + b.value); }
			},
		},
		{
			name: 'family',
			label: 'Family name',
			// Example of how to override individual width
			options: {
				width: 250,
			},
		},
		{
			type: 'Label',
			label: 'Account',
		},
		{
			name: 'email',
			label: 'Email address',
			type: 'Email',
		},
		{
			name: 'password',
			label: 'Password',
			type: 'Password',
			retype: true,
		},
		{
			type: 'Label',
			label: 'Place',
		},
		{
			name: 'university',
			label: 'University',
			type: 'ClickPicker',
			list: [
				'The University of Melbourne', 
				'Royal Melbourne Institute of Technology', 
				'Queensland University', 
				'University of Technology Sydney', 
				'Monash University'
			]
		},
		{
			name: 'thing',
			label: 'Thing',
			type: 'Combo',
			list: ['Default', 'Thing', 'Entered'],
		},
		{
			name: 'test',
			label: 'Little pick',
			// type: 'Picker',
			list: ['A', 'B', 'C'],
		},
		{
			type: 'Label',
			label: 'Specials',
		},
		{
			name: 'onoff',
			label: 'Is this on?',
			type: 'Switch',
			onValue: 'Yeah',
			offValue: 'nope',
		},
		{
			name: 'slider',
			label: 'How big?',
			type: 'Slider',
			min: 1,
			max: 3,
		},
		{
			name: 'datetime',
			label: 'When?',
			type: 'DateTime',
			date: true,
			time: true,
		},
		{
			name: 'choose',
			label: 'Choose !',
			type: 'Radio',
			list: ['One', 'Two', 'Three', 'Four'],
		},
		{
			type: 'Label',
			label: 'Padding',
		},
		{
			label: 'One',
		},
		{
			label: 'Two',
		},
		{
			label: 'Three',
		},
	],
	buttons: [
		{
			name: 'submit',
			label: 'Regsister account',
			type: 'Button',
			//options: {
			//	height: 65,
			//},
			events: {
				click: function(b) {
					// alert("You pressed the button"); 
					// XXX how to access this self created object?
				},
			}
		},
		{
			name: 'defaults',
			label: 'Set defaults',
			// XXX how to set scope for this callback?
		},
	],
});
// Ti.API.info(form);

// ======================================================================
// Adding a click handler to an existing button
form.buttons.submit.addEventListener('click', function() {
	if (form.isValid(true)) {
		Ti.API.info("We returned from isValid");
		alert("Inside second one - valid");
	}
	Ti.API.info(form.getValues());
});
form.buttons.defaults.addEventListener('click', function() {
	form.setValues({
		first: 'Scott',
		family: 'Penrose',
		email: 'scottp@dd.com.au',
		choose: 'Three',
	});
});

// ======================================================================
// Add the logo
var logo = Ti.UI.createImageView({ url: '../logo.jpg', height: 'auto' });
var logo_view = Ti.UI.createView({
	backgroundColor: 'black',
	top: 1,
	left: 1,
	widht: '100%',
	height: 'auto',
});
logo_view.add(logo);
win.add(logo_view);

// Look you can even move the form before adding
form.view.top = 150;
form.view.left = 1;
win.add(form.view);

