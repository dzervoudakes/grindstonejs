/**
 * show() / hide()
 *
 * Shows a hidden element
 * Hides a visible element
 * May be instant or delayed
 *
 * Parameter: (optional)
 * -delay (miliseconds)
 */
	
	$.fn.show = function(_delay) {
		
		this.init(function() {
			
			var self = this;
			
			if (_delay) {
				
				if (typeof _delay === "number") {
					
					setTimeout(function() {
						self.style.display = "block";
					}, _delay);
					
				} else {
					throw new Error("Display timeout parameter must be a number.");
				}
				
			} else {
				self.style.display = "block";
			}
			
		});
		
		return this;
	};
	
	$.fn.hide = function(_delay) {
		
		this.init(function() {
			
			var self = this;
			
			if (_delay) {
				
				if (typeof _delay === "number") {
					
					setTimeout(function() {
						self.style.display = "none";
					}, _delay);
					
				} else {
					throw new Error("Display timeout parameter must be a number.");
				}
				
			} else {
				self.style.display = "none";
			}
			
		});
		
		return this;
	};
