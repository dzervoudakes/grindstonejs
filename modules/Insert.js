/**
 * before() / after()
 *
 * Inserts new content either before or after the target element
 * New content can be either HTML input as a string or existing DOM elements
 *
 * Parameter:
 * -content
 */
	
	$.fn.before = function(_content){
		
		var txt, dom, i;
		
		this.init(function(){
			
			if (_content){
				
				if (typeof _content === "string"){
					
					txt = _content.split("");
					
					if (txt[0] === "<" && txt[txt.length - 1] === ">" && txt.length >= 3){
						
						this.insertAdjacentHTML("beforebegin", _content);
						
					} else {
						
						dom = document.querySelectorAll(_content);
						
						for (i = 0; i < dom.length; i++){
							this.parentNode.insertBefore(dom[i], this);
						}
						
					}
					
				} else {
					this.parentNode.insertBefore(_content, this);
				}
				
			} else {
				throw new Error("Cannot insert null after the specified element.");
			}
			
		});
		
		return this;
	};
	
	$.fn.after = function(_content){
		
		var txt, dom, i;
		
		this.init(function(){
			
			if (_content){
				
				if (typeof _content === "string"){
					
					txt = _content.split("");
					
					if (txt[0] === "<" && txt[txt.length - 1] === ">" && txt.length >= 3){
						
						this.insertAdjacentHTML("afterend", _content);
						
					} else {
						
						dom = document.querySelectorAll(_content);
						
						for (i = 0; i < dom.length; i++){
							this.parentNode.insertBefore(dom[i], this.nextSibling);
						}
						
					}
					
				} else {
					this.parentNode.insertBefore(_content, this.nextSibling);
				}
				
			} else {
				throw new Error("Cannot insert null after the specified element.");
			}
			
		});
		
		return this;
	};
