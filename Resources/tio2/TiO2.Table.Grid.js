/* Some ideas:

	Initial:
		- Basic grid - spredsheet like
		- Integration with TiO2.Data
		- Fixed header, doesn't move with scroll?

	Stage 2:
		- Column sorting
		- Filtering (search field standard ?)

	Supper Advanced:
		- Editable grid, using TiO2.Field.*
		- Advanced effects for presentation
		- Paginated
		  	. By toolbar (page n of n)
			. or by adding more (ala App store)
			. or automatic while scrolling ?


	Further ideas:
		- Presentation of a graph

*/

TiO2.Table.Grid = TiO2.Table.Base.extend({
	// ======================================================================
	/* Create a single cell, including padding and borders
		view - what you want to add it to
		left - starting position?
		width - how wide for content (note, does not include padding and borders
		content - the content to add (text only sorry... consider View options)
			Could be object = add as view, vs text add as text etc
		options - the options for the view (e.g. do you want to add shadows
		NOTE: Could make this return array & left? or remove left?
	*/
	createCell: function(view, left, width, content, options, callback) {

		// Left padding
		view.add(Ti.UI.createLabel({
			left: left,
			width: this.padding
		}));
		left += this.padding;

		// Content
		var content2 = Ti.UI.createLabel(TiO2.Util.defaults(options, {
			left: left,
			width: width,
			text: content
		}));
		// XXX Really, a callback for this?
		if (callback) callback(content2);
		view.add(content2);

		left += width;

		// Right padding
		view.add(Ti.UI.createLabel({
			left: left,
			width: this.padding
		}));
		left+= this.padding;

		view.add(Ti.UI.createLabel({
			left: left,
			width: 1,
			borderColor: this.separatorColor,
			borderWidth: 1
		}));
		left += 1;

		return left;
	}

});

