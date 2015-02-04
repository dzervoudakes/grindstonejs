/**
 * prepend()
 *
 * Inserts a new element or content to the front of the target's childNode list
 * New content can be either HTML input as a string or existing DOM elements
 *
 * Parameter:
 * -prependElement
 */
	
	$.fn.prepend = function(_prependElement){
		
		this.init(function(){
			
			if (_prependElement){
			
				if (typeof _prependElement === "string"){
					
					var txt = _prependElement.split("");
					
					if (txt[0] === "<"){
						
						this.insertAdjacentHTML("afterbegin", _prependElement);
					
					} else {
						
						var dom = document.querySelectorAll(_prependElement);
						
						for (var i = 0; i < dom.length; i++){
							this.insertBefore(dom[i], this.firstChild);
						}
						
					}
					
				} else {
					this.insertBefore(_prependElement, self.firstChild);
				}
				
			} else {
				throw new Error("Cannot prepend undefined element.");
			}
			
		});
		
		return this;
	};
