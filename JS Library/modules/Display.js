/* show() / hide()
 *
 * Shows a hidden element
 * Hides a visible element
 * May be instant or delayed
 *
 * Parameter: (optional)
 * -timer
 */
	
	GS.show = function(timer){
		forEach(this.init,function(){
			if (testParam(timer)){
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
	
	GS.hide = function(timer){
		forEach(this.init,function(){
			if (testParam(timer)){
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