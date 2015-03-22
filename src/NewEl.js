/**
 * newEl()
 *
 * Creates a new DOM element
 *
 * Parameters:
 * -type (type of DOM element)
 * -id (ID of the new element - optional)
 * -class (className of the new element - optional)
 * -inner (innerHTML to be added - optional)
 */
	
	$.newEl = function(_type, _id, _class, _inner) {
		
		if (_type) {
			
			var newElement = document.createElement(_type);
			
			newElement.id 		 = (_id)	? _id 	 : "";
			newElement.className = (_class) ? _class : "";
			newElement.innerHTML = (_inner) ? _inner : "";
			
			return newElement;
			
		} else {
			throw new Error("New element type is undefined.");
		}
	};
