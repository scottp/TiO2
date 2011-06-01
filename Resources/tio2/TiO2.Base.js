// A base class
//		XXX this is a duplicate of Class above (well inherited)
//		but copies first attributes.
TiO2.Base = TiO2Class.extend({
	init: function(attr) {
		TiO2.Util.copy(this, attr);
	},
	addHandlers: function(ui, events) {
		if (ui == undefined) ui = this.ui;
		if (events == undefined) events = this.events;
		if (ui) {
			for (var k in events) {
				if (typeof(events[k]) == 'function') { 
					ui.addEventListener(k, events[k]);
				}
			}
		}
	},

	/* Event Handlers - VERY basic !

		- Handlers are free form - any name
		- Any number can be added
		- Fire events passes an object

	 */

	// Custom events ?
	customEvents: {},
	addCustomEventListener: function(name, callback) {
		if (this.customEvents[name] == undefined) this.customEvents[name] = [];
		this.customEvents[name].push(callback);
	},

	// x.fireCustomEvent('blah', {});
	fireCustomEvent: function(name, attr) {
		if (this.customEvents[name]) {
			for (var i = 0; i < this.customEvents[name].length; i++) {
				this.customEvents[name][i](attr);
			}
		}
	}

});

