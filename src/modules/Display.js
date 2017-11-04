	$.fn.show = function(delay) {
		if (delay) {
			setTimeout(() => {
				$.fn.show.call(this);
			}, delay);
		} else {
			this.each(function() {
				if (this.style.display === 'none') {
					this.style.display = $(this).data('_prevdisplay') || '';
					$(this).removeData('_prevdisplay');
				}
			});
		}
		return this;
	};

	$.fn.hide = function(delay) {
		if (delay) {
			setTimeout(() => {
				$.fn.hide.call(this);
			}, delay);
		} else {
			this.each(function() {
				if (this.style.display !== 'none') {
					if (this.style.display) $(this).data('_prevdisplay', this.style.display);
					this.style.display = 'none';
				}
			});
		}
		return this;
	};
