	$.fn.before = function(content) {
		this.each(function() {
			if (typeof content === 'string') {
				if (content.match(/(<).+(>)/)) {
					this.insertAdjacentHTML('beforebegin', content);
				} else {
					let dom = d.querySelectorAll(content);
					dom = Array.prototype.slice.call(dom);
					dom.forEach(item => {
						this.parentNode.insertBefore(item, self);
					});
				}
			} else {
				this.parentNode.insertBefore(content, this);
			}
		});
		return this;
	};

	$.fn.after = function(content) {
		this.each(function() {
			if (typeof content === 'string') {
				if (content.match(/(<).+(>)/)) {
					this.insertAdjacentHTML('afterend', content);
				} else {
					let dom = d.querySelectorAll(content);
					dom = Array.prototype.slice.call(dom);
					dom.forEach(item => {
						this.parentNode.insertBefore(item, self.nextSibling);
					});
				}
			} else {
				this.parentNode.insertBefore(content, this.nextSibling);
			}
		});
		return this;
	};
