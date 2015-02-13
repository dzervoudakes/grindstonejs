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
		
		var txt, dom, i;
		
		this.init(function(){
			
			if (_appendElement){
				
				if (typeof _appendElement === "string"){
					
					txt = _appendElement.split("");
					
					if (txt[0] === "<" && txt[txt.length - 1] === ">" && txt.length >= 3){
						
						this.innerHTML += _appendElement;
					
					} else {
						
						dom = document.querySelectorAll(_appendElement);
						
						for (i = 0; i < dom.length; i++){
							this.appendChild(dom[i]);
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
