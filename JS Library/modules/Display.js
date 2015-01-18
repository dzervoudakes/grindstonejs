/**
 * show() / hide()
 *
 * Shows a hidden element
 * Hides a visible element
 * May be instant or delayed
 *
 * Parameter: (optional)
 * -timer
 */
	
	$.fn.show = function(_timer){
		$.forEach(this.init,function(){
			if (_timer){
				if (typeof _timer === "number"){
					setTimeout(function(){
						this.style.display = "block";
					},_timer);
				} else {
					throw new Error("Display timeout parameter must be a number.");
				}
			} else {
				this.style.display = "block";
			}
		});
		return this;
	};
	
	$.fn.hide = function(_timer){
		$.forEach(this.init,function(){
			if (_timer){
				if (typeof _timer === "number"){
					setTimeout(function(){
						this.style.display = "none";
					},_timer);
				} else {
					throw new Error("Display timeout parameter must be a number.");
				}
			} else {
				this.style.display = "none";
			}
		});
		return this;
	};