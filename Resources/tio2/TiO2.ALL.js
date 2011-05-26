// XXX Move this just to TiO2.js, and make it TiO2.load('tio2/');
function TiO2Load(path) {
	if (path == undefined) {
		path = 'tio2/';
	}

	Ti.API.info("LOADING IT = " + path);

	// Base
	Ti.include(path + 'TiO2.js');
	Ti.include(path + 'TiO2Class.js');
	Ti.include(path + 'TiO2.Base.js');
	Ti.include(path + 'TiO2.Util.js');

	// Fields
	Ti.include(path + 'TiO2.Field.js');
	Ti.include(path + 'TiO2.Field.Base.js');
	Ti.include(path + 'TiO2.Field.Label.js');
	Ti.include(path + 'TiO2.Field.Text.js');
	Ti.include(path + 'TiO2.Field.ClickPicker.js');
	Ti.include(path + 'TiO2.Field.Combo.js');
	Ti.include(path + 'TiO2.Field.Email.js');
	Ti.include(path + 'TiO2.Field.Password.js');
	Ti.include(path + 'TiO2.Field.Picker.js');
	Ti.include(path + 'TiO2.Field.Slider.js');
	Ti.include(path + 'TiO2.Field.Switch.js');
	Ti.include(path + 'TiO2.Field.DateTime.js');
	Ti.include(path + 'TiO2.Field.Radio.js');

	// Data
	Ti.include(path + 'TiO2.Data.js');
	Ti.include(path + 'TiO2.Data.Base.js');
	Ti.include(path + 'TiO2.Data.Properties.js');
	Ti.include(path + 'TiO2.Data.Array.js');
	Ti.include(path + 'TiO2.Data.DBTable.js');

	// Form Layout
	Ti.include(path + 'TiO2.FormLayout.js');
	Ti.include(path + 'TiO2.FormLayout.Base.js');
	Ti.include(path + 'TiO2.FormLayout.Simple.js');
	Ti.include(path + 'TiO2.FormLayout.Default.js');

	// Tables
	Ti.include(path + 'TiO2.Table.js');
	Ti.include(path + 'TiO2.Table.Base.js');
	Ti.include(path + 'TiO2.Table.Single.js');
	Ti.include(path + 'TiO2.Table.Grid.js');
	Ti.include(path + 'TiO2.Table.GridDemo1.js');	// Consider moving demo to examples/
	Ti.include(path + 'TiO2.Table.GridDemo2.js');
	Ti.include(path + 'TiO2.Table.GridDemo3.js');

}
