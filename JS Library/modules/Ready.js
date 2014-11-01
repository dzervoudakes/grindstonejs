/* ready() / load()
 *
 * Triggers when the DOM Content of the selected element is loaded
 *
 * Parameters:
 * -element
 * -callback
 */
	
	// DOM structure ready
	
	$.fn.ready = function(callback){
		$.forEach(this.init,function(){
			this.addEventListener("DOMContentLoaded",callback,false);
		});
		return this;
	};
	
	// DOM structure and content fully loaded
	
	$.fn.load = function(callback){
		$.forEach(this.init,function(){
			this.addEventListener("load",callback,false);
		});
		return this;
	};