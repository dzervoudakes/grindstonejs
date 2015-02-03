/**
 * append()
 *
 * Appends a new child element to the current object
 *
 * Parameter:
 * -appendElement
 */
	
	$.fn.append = function(_appendElement){
		this.init(function(){
			if (_appendElement){
				if (typeof _appendElement === "string"){
					this.innerHTML += _appendElement;
				} else {
					this.appendChild(_appendElement);
				}
			} else {
				throw new Error("Cannot append undefined element.");
			}
		});
		return this;
	};
