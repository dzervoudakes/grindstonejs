/* fadeIn() / fadeOut()
 *
 * Fades in / fades out the specified element
 *
 * Parameter:
 * -duration (default: 400ms)
 *
 * Requires: Core.js
 */
	
	Grindstone.prototype.fadeIn = function(duration){
		var element = this.init;
		if (!testParam(duration)){
			duration = 400;
		}
		if (element.style.display != "block"){
			element.style.display = "block";
			var op = 0.01,
				gap = 25 / duration,
				timer = setInterval(function(){
				if (op >= 0.99){
					op = 1;
					clearInterval(timer);
				}
				element.style.opacity = op;
				element.style.filter = "alpha(opacity=" + (op * 100) + ")";
				op += gap;
			},25);
			return this;
		}
	};
	
	Grindstone.prototype.fadeOut = function(duration){
		var element = this.init;
		if (duration == "" || duration == undefined){
			duration = 400;
		}
		if (element.style.display != "none"){
			var op = 1,
				gap = 25 / duration,
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
			return this;
		}
	};