	$.fn.each = function(callback) {
		let set = this.set;
		set = Array.prototype.slice.call(set);
		set.forEach((item, index, array) => {
			callback.call(item, index, array);
		});
		return this;
	};
 
