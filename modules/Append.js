/**
 * append()
 *
 * Appends a new child element to the current object
 * New content can be either HTML input as a string or existing DOM elements
 *
 * Parameter:
 * -appendElement
 */
	
	$.fn.append = function(_appendElement){
		
		this.init(function(){
			
			var self = this;
			
			if (_appendElement){
				
				if (typeof _appendElement === "string"){
					
					var txt = _appendElement.split("");
					
					if (txt[0] === "<"){
						
						self.innerHTML += _appendElement;
					
					} else {
						
						var dom = document.querySelectorAll(_appendElement);
						
						for (var i = 0; i < dom.length; i++){
							self.appendChild(dom[i]);
						}
						
					}
					
				} else {
					this.appendChild(_appendElement);
				}
				
			} else {
				throw new Error("Cannot append undefined element.");
			}
			
		});
		
		return this;
	};
