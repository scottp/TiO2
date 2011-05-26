// Advanced overload entire centre - e.g. how to use the infrastructure for
// Data, loops, etc but provide your own view builder

// DEMO Advanced extend - replacing the whole row
TiO2.Table.GridDemo1 = TiO2.Table.Grid.extend({
	rowHeight: 100,

	// How to disable the header
	createHeader: function() {
		return Ti.UI.createView({
			height: 1,
		});
	},

	// Replacing the create row
	createRow: function(data) {
		var row = Ti.UI.createTableViewRow({ 
			height: this.rowHeight ,
			className: 'datarow',	// XXX what are these for? Investigate use of class
			clickName: 'row',
		});

        var photo = Ti.UI.createView({
                backgroundImage:'../images/custom_tableview/user.png',
                top:5,
                left:10,
                width:50,
                height:50,
                clickName:'photo',
        });
        row.add(photo);
        
        var user = Ti.UI.createLabel({
                color:'#576996',
                font:{fontSize:16,fontWeight:'bold', fontFamily:'Arial'},
                left:70,
                top:2,
                height:30,
                width:200,
                clickName:'user',
                text:data.first + ' ' + data.last
        });

        row.filter = user.text;
        row.add(user);

        var fontSize = 16;
        if (Titanium.Platform.name == 'android') {
                fontSize = 14;
        }
        var comment = Ti.UI.createLabel({
                color:'#222',
                font:{fontSize:fontSize,fontWeight:'normal', fontFamily:'Arial'},
                left:70,
                top:21,
                height:50,
                width:200,
                clickName:'comment',
                text:data.email
        });
        row.add(comment);

        var calendar = Ti.UI.createView({
                backgroundImage:'../images/custom_tableview/eventsButton.png',
                bottom:2,
                left:70,
                width:32,
                clickName:'calendar',
                height:32
        });
        row.add(calendar);

        var date = Ti.UI.createLabel({
                color:'#999',
                font:{fontSize:13,fontWeight:'normal', fontFamily:'Arial'},
                left:105,
                bottom:5,
                height:20,
                width:100,
                clickName:'date',
                text:'posted on 3/11'
        });
        row.add(date);

		return row;
	},
});

