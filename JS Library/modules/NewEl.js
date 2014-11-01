/* newEl()
 *
 * Creates a new element
 *
 * Parameters:
 * -element type
 * -id
 * -className
 * -innerHTML
 */
	
	$.newEl = function(elType,elId,elClass,elInner){
		if (elType){
			var newElement = document.createElement(elType);
			if (elId){
				newElement.id = elId;
			}
			if (elClass){
				newElement.className = elClass;
			}
			if (elInner){
				newElement.innerHTML = elInner;
			}
			return newElement;
		} else {
			throw new Error("New element type is undefined.");
		}
	};