/* doubleTap() / doubleClick()
 * 
 * Custom double-tapping and double-clicking methods
 *
 * Parameter:
 * -callback (triggered if the double-click/tap event is completed in time)
 */
	
	$.gs.doubleTap = function(callback){
		$.forEach(this.init,function(){
			var active = false;
			if(callback){
				$(this).evt("click touchstart",function(e){
					if (active){
						callback();
						active = false;
					}
					active = true;
					setTimeout(function(){
						active = false;
					},360);
					e.preventDefault();
				});
			} else {
				throw new Error("Double-tap/double-click callback is undefined.");
			}
		});
		return this;
 	};