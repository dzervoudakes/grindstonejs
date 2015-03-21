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
			
			if (_delay && typeof _delay === "number") {
				
				var self = this;
				
				setTimeout(function() {
					self.style.display = "block";
				}, _delay);
				
			} else {
				this.style.display = "block";
			}
			
		});
		
		return this;
	};
	
	$.fn.hide = function(_delay) {
		
		this.init(function() {
			
			if (_delay && typeof _delay === "number") {
				
				var self = this;
				
				setTimeout(function() {
					self.style.display = "none";
				}, _delay);
				
			} else {
				this.style.display = "none";
			}
			
		});
		
		return this;
	};
