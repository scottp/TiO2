var data = [
	{title:'Form - basic', hasChild:true, example:'examples/form_basic.js'},
	{title:'Form - remote', hasChild:true, example:'examples/form_remote.js'},
	{title:'Grid - basic', hasChild:true, example:'examples/grid_basic.js'},
	{title:'Grid - extend 1', hasChild:true, example:'examples/grid_extend_1.js'},
	{title:'Grid - extend 2', hasChild:true, example:'examples/grid_extend_2.js'},
	{title:'Data - basic', hasChild:true, example:'examples/data_basic.js'},
	{title:'Data - properties', hasChild:true, example:'examples/data_properties.js'},
	{title:'Data - contacts', hasChild:true, example:'examples/data_contacts.js'},
];

var tableview = Titanium.UI.createTableView({
	height: '100%',
	data:data
});

tableview.addEventListener('click', function(e) {
	if (e.rowData.example) {
		var win = Titanium.UI.createWindow({
			url:e.rowData.example,
			title:e.rowData.title,
			backgroundColor:'#fff',
			barColor:'#111'
		});
		Titanium.UI.currentTab.open(win,{animated:true});
	}
});

Titanium.UI.currentWindow.add(tableview);

