/**
 * height() / width()
 *
 * Returns the height/width value of the specified selector as an integer
 * This will only apply to the first match in the set and includes padding
 */
	
	$.fn.height = function(){
		return this.init[0].offsetHeight;
	};
	
	$.fn.width = function(){
		return this.init[0].offsetWidth;
	};