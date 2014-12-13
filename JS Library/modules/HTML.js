/**
 * html()
 * 
 * Returns the selected element's innerHTML, or replaces it if "content" argument is entered
 *
 * Parameter:
 * -content (the new content)
 */
	
	$.fn.html = function(content){
		var txt;
		$.forEach(this.init,function(){
			if(content){
				this.innerHTML = content;
			} else {
				txt = this.innerHTML;
			}
		});
		var toReturn = (content) ? this : txt;
		return toReturn;
 	};