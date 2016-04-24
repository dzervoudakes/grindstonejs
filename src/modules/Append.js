/**
 * append()
 *
 * Appends a new child element to the current object
 * New content can be either HTML input as a string or existing DOM elements
 *
 * Parameter:
 * -appendElement
 */
	
	$.fn.append = function(_appendElement) {
		
		var dom, i;
		
		this.init(function() {
				
			if (typeof _appendElement === "string") {
				
				if (_appendElement.charAt(0) === "<" && _appendElement.charAt(_appendElement.length - 1) === ">" && _appendElement.length >= 3) {
					this.innerHTML += _appendElement;
				}
				
				else {
					
					dom = document.querySelectorAll(_appendElement);
					
					for (i = 0; i < dom.length; i++) {
						this.appendChild(dom[i]);
					}
				}
				
			}
			
			else {
				this.appendChild(_appendElement);
			}
			
		});
		
		return this;
	};
