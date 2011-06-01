// ----------------------------------------------------------------------
// Popup - helper for special field inputs - e.g. ClickPicker, Combo et al
TiO2.Helper.Popup = TiO2.Base.extend({
	picker_win: undefined,
	picker_view: undefined,
	// TODO: Consider putting variables like this at the top level
	//	This not only then gives a central config style approach
	//	but also allows for different defaults depending on platform
	//	and screen resolution (specifically Android)
	pos: 251,
	
	init: function(attr) {
		// attr.field

		if (attr.keyboard) {
			this.pos = 550;
		}

		this.ui = attr.ui;

		this.picker_view = Titanium.UI.createView({
			height: this.pos,
			bottom: this.pos * -1,
			backgroundColor: 'white',
			transparent: 1
		});
		var cancel =  Titanium.UI.createButton({
			title:'Cancel',
			style:Titanium.UI.iPhone.SystemButtonStyle.BORDERED
		});
		var done =  Titanium.UI.createButton({
			title:'Done',
			style:Titanium.UI.iPhone.SystemButtonStyle.DONE
		});
		var spacer =  Titanium.UI.createButton({
			systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
		});
		var toolbar =  Titanium.UI.createToolbar({
			top:0,
			items:[cancel,spacer,done]
		});

		this.picker_view.add(toolbar);
		this.picker_view.add(this.ui);

		this.picker_win = Ti.UI.createWindow();

		// Mask the background
		if (attr.mask) {
			var view = Ti.UI.createView({
				width: '100%',
				height: '100%',
				top: 1,
				left: 1,
				backgroundColor:'black',
				opacity: 0.7
			});
			this.picker_win.add(view);
		}
		this.picker_win.add(this.picker_view);

		var that = this;

		cancel.addEventListener('click',function() {
			if (attr.onCancel) {
				attr.onCancel(that.ui, that);
			}
			that.close();
		});

		done.addEventListener('click',function() {
			if (attr.onDone) {
				attr.onDone(that.ui, that);
			}
			that.close();
		});

		// Fire on enter
		this.ui.addEventListener('return', function() {
			done.fireEvent('click');
		});

	},
	open: function() {
		this.picker_win.open();
		var that = this;
		this.picker_view.animate({bottom: 0}, function() {
			that.ui.focus();
		});
	},
	close: function() {
		var that = this;
		this.picker_view.animate({bottom: this.pos * -1}, function() {
			that.picker_win.close();
		});
	}
});

