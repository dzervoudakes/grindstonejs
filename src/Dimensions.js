/**
 * height() / width()
 *
 * Returns the height/width value of the specified selector as an integer
 * To change the height and/or width (in px), enter in the "num" parameter
 * If simply returning the current height/width, this will only apply to the first match in the set and includes padding
 * Setting the height/width will apply to all elements in the set
 *
 * Parameter: (optional)
 * -num (integer; number of pixels)
 */
	
	$.fn.height = function(_num) {
		
		if (typeof _num === "number" || _num === 0) {
			
			this.init(function() {
				this.style.height = _num + "px";
			});
			
		} else {
			return this.set[0].offsetHeight;
		}
		
		return this;
	};
	
	$.fn.width = function(_num) {
		
		if (typeof _num === "number" || _num === 0) {
			
			this.init(function() {
				this.style.width = _num + "px";
			});
			
		} else {
			return this.set[0].offsetWidth;
		}
		
		return this;
	};
