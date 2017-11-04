	$.fn.height = function(num) {
		if (typeof num === 'number' || num === 0) {
			this.each(function() {
				this.style.height = `${num}px`;
			});
			return this;
		} else {
			if (this.set[0] === document) {
				return document.body.clientHeight;
			} else if (this.set[0] === window) {
				return window.innerHeight;
			} else {
				return this.set[0].offsetHeight;
			}
		}
	};

	$.fn.width = function(num) {
		if (typeof num === 'number' || num === 0) {
			this.each(function() {
				this.style.width = `${num}px`;
			});
			return this;
		} else {
			if (this.set[0] === document) {
				return document.body.clientWidth;
			} else if (this.set[0] === window) {
				return window.innerWidth;
			} else {
				return this.set[0].offsetWidth;
			}
		}
	};
