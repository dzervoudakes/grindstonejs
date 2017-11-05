	$.fn.each = function(callback) {
		let set = this.set;
		set = Array.prototype.slice.call(set);
		set.forEach(function (item, index) {
			callback.call(item, index);
		});
		return this;
	};
 
