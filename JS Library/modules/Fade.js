/* El.fadeIn / El.fadeOut
 *
 * Fades in / fades out the specified element
 *
 * Parameters:
 * -element
 * -duration (default: 400ms)
 *
 * Requires: Core.js
 */
	
	El.fadeIn = function(element,ms){
		if (testParam(element)){
			if (!testParam(ms)){
				ms = 400;
			}
			if (element.style.display != "block"){
				element.style.display = "block";
				var op = 0.01,
					gap = 25 / ms,
					timer = setInterval(function(){
					if (op >= 0.99){
						op = 1;
						clearInterval(timer);
					}
					element.style.opacity = op;
					element.style.filter = "alpha(opacity=" + (op * 100) + ")";
					op += gap;
				},25);
			}
		} else {
			throw new Error("Cannot fade undefined element.");
		}
	};
	
	El.fadeOut = function(element,ms){
		if (testParam(element)){
			if (ms == "" || ms == undefined){
				ms = 400;
			}
			if (element.style.display != "none"){
				var op = 1,
					gap = 25 / ms,
					timer = setInterval(function(){
					if (op <= 0.01){
						op = 0;
						clearInterval(timer);
						element.style.display = "none";
					}
					element.style.opacity = op;
					element.style.filter = "alpha(opacity=" + (op * 100) + ")";
					op -= gap;
				},25);
			}
		} else {
			throw new Error("Cannot fade undefined element.");
		}
	};
