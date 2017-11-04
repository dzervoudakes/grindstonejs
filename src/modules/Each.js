	$.fn.each = function(callback) {
		let set = this.set;
		set = Array.prototype.slice.call(set);
		set.forEach(item => {
			callback.call(item);
		});
		return this;
	};
 