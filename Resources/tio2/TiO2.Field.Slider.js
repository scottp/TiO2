// ----------------------------------------------------------------------
TiO2.Field.Slider = TiO2.Field.Base.extend({
	min: 0,
	max: 100,
	init: function(attr, options) {
		this._super(attr, options);
		this.ui = Titanium.UI.createSlider(TiO2.Util.defaults(options, {
			min: this.min,
			max: this.max,
			value:1,
			width:100,
			height:'auto',
			top:30
		}));
		this.view = this.ui;
	}
});

