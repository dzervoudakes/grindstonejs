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
	
	$.fn.show = function(_delay){
		$.forEach(this.init,function(){
			if (_delay){
				if (typeof _delay === "number"){
					setTimeout(function(){
						this.style.display = "block";
					},_delay);
				} else {
					throw new Error("Display timeout parameter must be a number.");
				}
			} else {
				this.style.display = "block";
			}
		});
		return this;
	};
	
	$.fn.hide = function(_delay){
		$.forEach(this.init,function(){
			if (_delay){
				if (typeof _delay === "number"){
					setTimeout(function(){
						this.style.display = "none";
					},_delay);
				} else {
					throw new Error("Display timeout parameter must be a number.");
				}
			} else {
				this.style.display = "none";
			}
		});
		return this;
	};