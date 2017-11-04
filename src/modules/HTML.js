	$.fn.html = function(content) {
		let text;
		this.each(function() {
			if (content || content === '') {
				this.innerHTML = content;
			} else {
				text = this.innerHTML;
			}
		});
		return content ? this : text;
	};
 