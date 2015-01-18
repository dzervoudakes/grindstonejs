/**
 * ready() / load()
 *
 * Triggers when the DOM Content of the selected element is loaded
 *
 * Parameters:
 * -callback
 */
	
	// DOM structure ready
	
	$.fn.ready = function(_callback){
		$.forEach(this.init,function(){
			this.addEventListener("DOMContentLoaded",_callback,false);
		});
		return this;
	};
	
	// DOM structure and content fully loaded
	
	$.fn.load = function(_callback){
		$.forEach(this.init,function(){
			this.addEventListener("load",_callback,false);
		});
		return this;
	};