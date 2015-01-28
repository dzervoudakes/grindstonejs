/**
 * prepend()
 *
 * Appends a new child element to the current object and moves it to the front of the childNode list
 *
 * Parameter:
 * -prependElement
 */
	
	$.fn.prepend = function(_prependElement){
		$.forEach(this.init,function(){
			if (_prependElement){
				if (typeof _prependElement === "string"){
					this.insertAdjacentHTML("afterbegin",_prependElement);
				} else {
					this.insertBefore(_prependElement,this.firstChild);
				}
			} else {
				throw new Error("Cannot prepend undefined element.");
			}
		});
		return this;
	};
