/*!
 * A very simple jQuery plugin used to clone *objects* easily without
 * retaining a relationship with the original.
 *
 * (c) Elliot Wright - 2013
 *
 * For full license information please visit
 * http://license.visualidiot.com/
 */

;(function( jQuery, window, undefined ) {

	if (!jQuery) { return; }

	jQuery.extend({

		// Returns a clone of the given object
		clone: function(obj) {
			return jQuery.extend(true, { }, obj);
		}

	});

})( jQuery, window );
