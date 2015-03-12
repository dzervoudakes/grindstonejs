/**
 * prepend()
 *
 * Inserts a new element or content to the front of the target's childNode list
 * New content can be either HTML input as a string or existing DOM elements
 *
 * Parameter:
 * -prependElement
 */
	
	$.fn.prepend = function(_prependElement) {
		
		var dom, i;
		
		this.init(function() {
			
			if (_prependElement) {
			
				if (typeof _prependElement === "string") {
					
					if (_prependElement.charAt(0) === "<" && _prependElement.charAt(_prependElement.length - 1) === ">" && _prependElement.length >= 3) {
						
						this.insertAdjacentHTML("afterbegin", _prependElement);
					
					} else {
						
						dom = document.querySelectorAll(_prependElement);
						
						for (i = 0; i < dom.length; i++) {
							this.insertBefore(dom[i], this.firstChild);
						}
						
					}
					
				} else {
					this.insertBefore(_prependElement, this.firstChild);
				}
				
			} else {
				throw new Error("Cannot prepend undefined element.");
			}
			
		});
		
		return this;
	};
