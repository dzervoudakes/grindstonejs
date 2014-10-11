/* show() / hide()
 *
 * Shows a hidden element
 * Hides a visible element
 * May be instant or delayed
 *
 * Parameter: (optional)
 * -timer
 */
	
	$.gs.show = function(timer){
		$.forEach(this.init,function(){
			if (timer){
				if (typeof timer === "number"){
					setTimeout(function(){
						this.style.display = "block";
					},timer);
				} else {
					throw new Error("Display timeout parameter must be a number.");
				}
			} else {
				this.style.display = "block";
			}
		});
		return this;
	};
	
	$.gs.hide = function(timer){
		$.forEach(this.init,function(){
			if (timer){
				if (typeof timer === "number"){
					setTimeout(function(){
						this.style.display = "none";
					},timer);
				} else {
					throw new Error("Display timeout parameter must be a number.");
				}
			} else {
				this.style.display = "none";
			}
		});
		return this;
	};