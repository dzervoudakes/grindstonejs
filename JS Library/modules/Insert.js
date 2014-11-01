/* before() / after()
 *
 * Inserts new content either before or after the target element
 *
 * Parameter:
 * -content (to be added in the location specified)
 * -location (the content will be inserted either before or after the target element within the DOM hierarchy)
 */
	
	$.fn.before = function(content){
		$.forEach(this.init,function(){
			if (content){
				if (typeof content === "string"){
					this.insertAdjacentHTML("beforebegin",content);
				} else {
					this.parentNode.insertBefore(content,this);
				}
			} else {
				throw new Error("Cannot insert null after the specified element.");
			}
		});
		return this;
	};
	
	$.fn.after = function(content){
		$.forEach(this.init,function(){
			if (content){
				if (typeof content === "string"){
					this.insertAdjacentHTML("afterend",content);
				} else {
					this.parentNode.insertBefore(content,this.nextSibling);
				}
			} else {
				throw new Error("Cannot insert null after the specified element.");
			}
		});
		return this;
	};