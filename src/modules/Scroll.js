	$.fn.scroll = function(callback) {
		if (typeof callback === 'function') {
			this.each(function() {
				$(this).on('scroll', callback);
			});
		}
		return this;
	};

	$.fn.scrollTop = function(top) {
		let topOffset;
		this.each(function() {
			switch (this) {
			case window:
				if (typeof top === 'number') {
					this.scrollTo(0, top);
				} else {
					topOffset = this.pageYOffset;
				}
				break;
			case document:
				if (typeof top === 'number') {
					this.body.scrollTop = top;
				} else {
					topOffset = this.body.scrollTop;
				}
				break;
			default:
				if (typeof top === 'number') {
					this.scrollTop = top;
				} else {
					topOffset = this.scrollTop;
				}
			}
		});
		return typeof top === 'number' ? this : topOffset;
	};

	$.fn.scrollLeft = function(left) {
		let leftOffset;
		this.each(function() {
			switch (this) {
			case window:
				if (typeof left === 'number') {
					this.scrollTo(left, 0);
				} else {
					leftOffset = this.pageXOffset;
				}
				break;
			case document:
				if (typeof left === 'number') {
					this.body.scrollLeft = left;
				} else {
					leftOffset = this.body.scrollLeft;
				}
				break;
			default:
				if (typeof left === 'number') {
					this.scrollTop = left;
				} else {
					leftOffset = this.scrollLeft;
				}
			}
		});
		return (typeof left === 'number') ? this : leftOffset;
	};
