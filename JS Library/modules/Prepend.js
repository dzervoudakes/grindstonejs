/* prepend()
 *
 * Appends a new child element to the current object and moves it to the front of the child-node list
 *
 * Parameter:
 * -prependElement
 */
	
	GS.prepend = function(prependElement){
		forEach(this.init,function(){
			if (prependElement){
				if (typeof prependElement === "string"){
					this.insertAdjacentHTML("afterbegin",prependElement);
				} else {
					this.insertBefore(prependElement,element.firstChild);
				}
			} else {
				throw new Error("Cannot prepend undefined element.");
			}
		});
		return this;
	};