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
		
		this.init(function(){
			
			var self = this;
			
			if (_content){
				
				if (typeof _content === "string"){
					
					var txt = _content.split("");
					
					if (txt[0] === "<"){
						
						self.insertAdjacentHTML("beforebegin", _content);
						
					} else {
						
						var dom = document.querySelectorAll(_content);
						
						for (var i = 0; i < dom.length; i++){
							self.parentNode.insertBefore(dom[i], self);
						}
						
					}
					
				} else {
					self.parentNode.insertBefore(_content, self);
				}
				
			} else {
				throw new Error("Cannot insert null after the specified element.");
			}
			
		});
		
		return this;
	};
	
	$.fn.after = function(_content){
		
		this.init(function(){
			
			var self = this;
			
			if (_content){
				
				if (typeof _content === "string"){
					
					var txt = _content.split("");
					
					if (txt[0] === "<"){
						
						self.insertAdjacentHTML("afterend", _content);
						
					} else {
						
						var dom = document.querySelectorAll(_content);
						
						for (var i = 0; i < dom.length; i++){
							self.parentNode.insertBefore(dom[i], self.nextSibling);
						}
						
					}
					
				} else {
					self.parentNode.insertBefore(_content, self.nextSibling);
				}
				
			} else {
				throw new Error("Cannot insert null after the specified element.");
			}
			
		});
		
		return this;
	};
