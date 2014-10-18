/* insert()
 *
 * Inserts new content either before or after the target element
 *
 * Parameter:
 * -content (to be added in the location specified)
 * -location (the content will be inserted either before or after the target element within the DOM hierarchy)
 */
	
	$.gs.insertAfter = function(content){
		$.forEach(this.init,function(){
			if (content){
				if (typeof content === "string"){
					this.insertAdjacentHTML("afterend",content);
				} else {
					if (content.length > 1){
						for (var j = 0; j < content.length; j++){
							this.parentNode.insertBefore(content[j],this.nextSibling);
						};
					} else {
						this.parentNode.insertBefore(content,this.nextSibling);
					}
				}
			} else {
				throw new Error("Cannot insert null after the specified element.");
			}
		});
		return this;
	};
	
	$.gs.insertBefore = function(content){
		$.forEach(this.init,function(){
			if (content){
				if (typeof content === "string"){
					this.insertAdjacentHTML("beforebegin",content);
				} else {
					if (content.length > 1){
						for (var j = 0; j < content.length; j++){
							this.parentNode.insertBefore(content[j],this);
						};
					} else {
						this.parentNode.insertBefore(content,this);
					}
				}
			} else {
				throw new Error("Cannot insert null after the specified element.");
			}
		});
		return this;
	};