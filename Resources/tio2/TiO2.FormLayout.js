TiO2.FormLayout = {};

/* DOCUMENTATION TODO

	- options - what youc an pass in to the created objects
	- ading to FieldType

Advanced:
	- Button on textfield
	- More advanced pickers - e.g. mulitple column etc

	Ability to directly create your own fields from the calling location
Of course you can add entries to the FieldType

// Default - a layout that represents forms similar to the iPhone/iPad settings page
// XXX New entry - "values: " - either {} or function - function is field at a time, not returning an object

/* The basic requirements and techniques:
	
	- An input field may be able to include the label, see the Image example in
	  KitchenSync
	- Groupings - allow a special type 'heading' or similar, to add a heading
	  for grouping inputs. Allow an empty one to group, but not put out the
	  heading.
	- Buttons should be right alligned.
	- Allow 'form' as type:
	  	. Include 'items' and other things you need in a form, but allow some inheritance from this data.
		. Basically uses Right Arrow to slide open this form, with a back button
		. Make sure this object returns a 'value' that acutally returns the childrens 'values'
			not sure if this should be a flat list or object at this point?
	- Type label to allow labels (text) that still have a heading label (e.g.  Version 1.3)
	- Make sure buttons can be added to top (cancel, done etc)
	- Allow special buttons like 'Delete' being 'RED'
	- Consider default colour based on title - 'Done' or 'Save' or 'Add' to
	  Blue, 'Cancel' to Grey and 'Delete' to Red.
	
 */

