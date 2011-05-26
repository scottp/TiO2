Titanium.UI.setBackgroundColor('#000');
var tabGroup = Titanium.UI.createTabGroup();

// ======================================================================
var win1 = Titanium.UI.createWindow({  
    title:'Examples',
    backgroundColor:'#fff',
	url: 'examples.js',
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Examples',
    window:win1
});


// ==============================================================================
var win2 = Titanium.UI.createWindow({  
    title:'Grid example',
    backgroundColor:'#fff',
	url: 'examples/grid_basic.js',
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Grid example',
    window:win2
});

// ======================================================================
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  
tabGroup.open();
