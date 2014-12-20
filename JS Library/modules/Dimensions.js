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
	
	$.fn.height = function(num){
		if (num && typeof num === "number"){
			$.forEach(this.init,function(){
				this.style.height = num + "px";
			});
		} else {
			return this.init[0].offsetHeight;
		}
		return this;
	};
	
	$.fn.width = function(num){
		if (num){
			$.forEach(this.init,function(){
				this.style.width = num + "px";
			});
		} else {
			return this.init[0].offsetWidth;
		}
		return this;
	};