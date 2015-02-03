/**
 * prepend()
 *
 * Inserts a new element or content to the front of the target's childNode list
 *
 * Parameter:
 * -prependElement
 */
	
	$.fn.prepend = function(_prependElement){
		
		this.init(function(){
			
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
