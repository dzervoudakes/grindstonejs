/* append()
 *
 * Appends a new child element to the current object
 *
 * Parameter:
 * -appendElement
 */
	
	GS.append = function(appendElement){
		forEach(this.init,function(){
			if (appendElement){
				if (typeof appendElement === "string"){
					this.innerHTML += appendElement;
				} else {
					this.appendChild(appendElement);
				}
			} else {
				throw new Error("Cannot append undefined element.");
			}
		});
		return this;
	};