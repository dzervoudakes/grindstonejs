/**
 * ready() / load()
 *
 * Ready: triggers when the DOM structure of the selected element is ready
 * Load: triggers when the full DOM content of the selected element is loaded
 *
 * Parameter:
 * -callback
 */
	
	// DOM structure ready
	//
	$.fn.ready = function(_callback) {
		
		this.init(function() {
			this.addEventListener("DOMContentLoaded", _callback, false);
		});
		
		return this;
	};
	
	// DOM structure and content fully loaded
	//
	$.fn.load = function(_callback) {
		
		this.init(function() {
			this.addEventListener("load", _callback, false);
		});
		
		return this;
	};
