/**
 * before() / after()
 *
 * Inserts new content either before or after the target element
 *
 * Parameter:
 * -content
 */
	
	$.fn.before = function(_content){
		$.forEach(this.init,function(){
			if (_content){
				if (typeof _content === "string"){
					this.insertAdjacentHTML("beforebegin", _content);
				} else {
					this.parentNode.insertBefore(_content,this);
				}
			} else {
				throw new Error("Cannot insert null after the specified element.");
			}
		});
		return this;
	};
	
	$.fn.after = function(_content){
		$.forEach(this.init,function(){
			if (_content){
				if (typeof _content === "string"){
					this.insertAdjacentHTML("afterend", _content);
				} else {
					this.parentNode.insertBefore(_content, this.nextSibling);
				}
			} else {
				throw new Error("Cannot insert null after the specified element.");
			}
		});
		return this;
	};
